#!/usr/bin/env python3
"""Ergänzt eine Saisondatei mit Basisdaten aus Wikidata / Wikimedia Commons.

Aufruf (aus dem Projektordner):
    python3 werkzeuge/wikidata_abgleich.py                 # neueste Saison
    python3 werkzeuge/wikidata_abgleich.py --saison 2026-27
    python3 werkzeuge/wikidata_abgleich.py --nur vfb-stuttgart --trocken

Was passiert pro Verein:
  1. Wikidata-Objekt über den Wikipedia-Titel finden (Feld "wiki") und als
     "wikidata" merken. Ist "wikidata" schon gesetzt, wird es direkt benutzt.
  2. Fehlende Wikipedia-Titel (Landessprache, de, en) aus den Sitelinks ergänzen.
  3. Logo (P154) als PNG nach assets/logos/vereine/ laden, falls noch keins da ist.
  4. Heimstadion (P115): Koordinaten (P625) übernehmen, wenn sie mehr als
     300 m abweichen; Kapazität (P1083) ergänzen, falls leer; Stadionbild (P18)
     nach assets/stadien/ laden, inkl. Urheber*in und Lizenz als Bildnachweis.
  5. Gründungsjahr (P571) nur ergänzen, wenn leer – Abweichungen werden gemeldet.

Handgeschriebene Inhalte (Texte, Trainer, Sponsor …) werden nie angefasst.
Benötigt nur Python 3.8+ ohne Zusatzpakete. --trocken zeigt nur an, was sich
ändern würde.
"""
import argparse
import json
import math
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

from vkdaten import WURZEL, lesen, saisondateien, schreiben

API = 'https://www.wikidata.org/w/api.php'
COMMONS_API = 'https://commons.wikimedia.org/w/api.php'
# Wikimedia verlangt einen aussagekräftigen User-Agent
USER_AGENT = 'Vereinskarte/0.1 (privates Projekt; https://github.com/svethole/vereinskarte)'
PAUSE = 0.3  # Sekunden zwischen Anfragen, um die Server zu schonen


def holen(url, params=None, roh=False):
    if params:
        url += '?' + urllib.parse.urlencode(params)
    anfrage = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    for versuch in range(3):
        try:
            with urllib.request.urlopen(anfrage, timeout=30) as antwort:
                daten = antwort.read()
            time.sleep(PAUSE)
            return daten if roh else json.loads(daten)
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and versuch < 2:
                time.sleep(5 * (versuch + 1))
                continue
            raise


def entitaeten(ids):
    """Holt mehrere Wikidata-Objekte (max. 50) auf einmal."""
    if not ids:
        return {}
    antwort = holen(API, {
        'action': 'wbgetentities', 'ids': '|'.join(ids), 'format': 'json',
        'props': 'claims|sitelinks',
    })
    return antwort.get('entities', {})


def qid_ueber_titel(sprache, titel):
    antwort = holen(API, {
        'action': 'wbgetentities', 'sites': f'{sprache}wiki', 'titles': titel,
        'format': 'json', 'props': 'info', 'normalize': 1, 'redirects': 'yes',
    })
    for qid in antwort.get('entities', {}):
        if qid.startswith('Q'):
            return qid
    return None


def werte(objekt, eigenschaft):
    """Alle Hauptwerte einer Eigenschaft; bevorzugte Aussagen zuerst."""
    aussagen = objekt.get('claims', {}).get(eigenschaft, [])
    aussagen = [a for a in aussagen if a.get('rank') != 'deprecated']
    aussagen.sort(key=lambda a: a.get('rank') != 'preferred')
    ergebnis = []
    for a in aussagen:
        snak = a.get('mainsnak', {})
        if snak.get('snaktype') == 'value':
            ergebnis.append((snak['datavalue']['value'], a))
    return ergebnis


def aktuelles_heimstadion(objekt):
    """P115 ohne Enddatum (P582) bevorzugen – alte Stadien haben meist eins."""
    kandidaten = werte(objekt, 'P115')
    for wert, aussage in kandidaten:
        if 'P582' not in aussage.get('qualifiers', {}):
            return wert['id']
    return kandidaten[0][0]['id'] if kandidaten else None


def abstand_m(lat1, lon1, lat2, lon2):
    r = 6371000
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp, dl = p2 - p1, math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def bild_laden(dateiname, ziel_ohne_endung, breite):
    """Lädt ein Commons-Bild als Vorschaubild und liefert (pfad, nachweis)."""
    antwort = holen(COMMONS_API, {
        'action': 'query', 'titles': f'File:{dateiname}', 'prop': 'imageinfo',
        'iiprop': 'url|extmetadata', 'iiurlwidth': breite, 'format': 'json',
    })
    seite = next(iter(antwort['query']['pages'].values()))
    info = (seite.get('imageinfo') or [None])[0]
    if not info:
        return None, None
    url = info.get('thumburl') or info['url']
    endung = re.search(r'\.(png|jpe?g|gif|webp|svg)(?:$|\?)', url.lower())
    endung = endung.group(1) if endung else 'png'
    pfad = ziel_ohne_endung.with_suffix('.' + endung)
    pfad.parent.mkdir(parents=True, exist_ok=True)
    pfad.write_bytes(holen(url, roh=True))

    meta = info.get('extmetadata', {})
    urheber = re.sub(r'<[^>]+>', '', meta.get('Artist', {}).get('value', '')).strip()
    lizenz = meta.get('LicenseShortName', {}).get('value', '').strip()
    nachweis = ' · '.join(t for t in (urheber, lizenz, 'Wikimedia Commons') if t)
    return pfad.relative_to(WURZEL).as_posix(), nachweis


def gleiche_ab(verein, objekt, stadien, laender, trocken, protokoll):
    vid = verein['id']

    # Wikipedia-Titel ergänzen
    sprache = verein.get('wikiSprache') or laender.get(verein['land'], {}).get('sprache')
    wiki = verein.setdefault('wiki', {})
    for sp in filter(None, {sprache, 'de', 'en'}):
        link = objekt.get('sitelinks', {}).get(f'{sp}wiki')
        if link and not wiki.get(sp):
            wiki[sp] = link['title']
            protokoll(f'Wikipedia ({sp}) ergänzt: {link["title"]}')

    # Gründungsjahr
    for wert, _ in werte(objekt, 'P571')[:1]:
        jahr = int(wert['time'][1:5])
        if not verein.get('gruendung'):
            verein['gruendung'] = jahr
            protokoll(f'Gründungsjahr ergänzt: {jahr}')
        elif verein['gruendung'] != jahr:
            protokoll(f'Hinweis: Gründungsjahr laut Wikidata {jahr}, in der Datei {verein["gruendung"]} (nicht geändert)')

    # Logo
    logo_vorhanden = verein.get('logo') and (WURZEL / verein['logo']).exists()
    logos = werte(objekt, 'P154')
    if not logo_vorhanden and logos:
        if trocken:
            protokoll(f'Logo würde geladen: {logos[0][0]}')
        else:
            pfad, _ = bild_laden(logos[0][0], WURZEL / 'assets' / 'logos' / 'vereine' / vid, 160)
            if pfad:
                verein['logo'] = pfad
                protokoll(f'Logo geladen: {pfad}')
    elif not logo_vorhanden:
        protokoll('Kein Logo auf Wikidata – bitte manuell nach assets/logos/vereine/ legen')

    # Stadion
    stadion_id = aktuelles_heimstadion(objekt)
    stadion_obj = stadien.get(stadion_id) if stadion_id else None
    if not stadion_obj:
        protokoll('Kein Heimstadion auf Wikidata gefunden')
        return
    s = verein.setdefault('stadion', {})
    for wert, _ in werte(stadion_obj, 'P625')[:1]:
        lat, lon = round(wert['latitude'], 5), round(wert['longitude'], 5)
        if isinstance(s.get('lat'), (int, float)) and isinstance(s.get('lon'), (int, float)):
            abweichung = abstand_m(s['lat'], s['lon'], lat, lon)
            if abweichung > 300:
                protokoll(f'Koordinaten korrigiert ({abweichung:.0f} m Abweichung)')
                s['lat'], s['lon'] = lat, lon
        else:
            s['lat'], s['lon'] = lat, lon
            protokoll('Koordinaten ergänzt')
    for wert, _ in werte(stadion_obj, 'P1083')[:1]:
        if not s.get('kapazitaet'):
            s['kapazitaet'] = int(float(wert['amount']))
            protokoll(f'Kapazität ergänzt: {s["kapazitaet"]}')
    bilder = werte(stadion_obj, 'P18')
    bild_vorhanden = s.get('bild') and (WURZEL / s['bild']).exists()
    if bilder and not bild_vorhanden:
        if trocken:
            protokoll(f'Stadionbild würde geladen: {bilder[0][0]}')
        else:
            pfad, nachweis = bild_laden(bilder[0][0], WURZEL / 'assets' / 'stadien' / vid, 800)
            if pfad:
                s['bild'], s['bildNachweis'] = pfad, nachweis
                protokoll(f'Stadionbild geladen: {pfad}')


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--saison', help='Saison-ID, z.B. 2026-27 (Standard: neueste)')
    parser.add_argument('--nur', action='append', help='nur diese Vereins-ID(s) bearbeiten')
    parser.add_argument('--trocken', action='store_true', help='nichts speichern, nur anzeigen')
    args = parser.parse_args()

    dateien = saisondateien()
    auswahl = [d for d in dateien if not args.saison or d[0]['id'] == args.saison]
    if not auswahl:
        sys.exit(f'Saison {args.saison} nicht in data/saisons.js gefunden')
    eintrag, pfad = auswahl[0]
    kopf, saison, fuss = lesen(pfad)
    _, laender, _ = lesen(WURZEL / 'data' / 'laender.js')

    vereine = [v for v in saison['vereine'] if not args.nur or v['id'] in args.nur]
    print(f'Saison {eintrag["bezeichnung"]}: {len(vereine)} Vereine werden abgeglichen …')

    # 1. QIDs ermitteln
    for v in vereine:
        if v.get('wikidata'):
            continue
        sprache = v.get('wikiSprache') or laender.get(v['land'], {}).get('sprache')
        for sp in filter(None, [sprache, 'de', 'en']):
            titel = (v.get('wiki') or {}).get(sp)
            if titel:
                qid = qid_ueber_titel(sp, titel)
                if qid:
                    v['wikidata'] = qid
                    break
        if not v.get('wikidata'):
            print(f'  ✗ {v["id"]}: kein Wikidata-Objekt gefunden – Wikipedia-Titel prüfen oder "wikidata" von Hand setzen')

    # 2. Vereine und Stadien gebündelt laden
    mit_qid = [v for v in vereine if v.get('wikidata')]
    objekte = {}
    for i in range(0, len(mit_qid), 50):
        objekte.update(entitaeten([v['wikidata'] for v in mit_qid[i:i + 50]]))
    stadion_ids = sorted({sid for o in objekte.values() if (sid := aktuelles_heimstadion(o))})
    stadien = {}
    for i in range(0, len(stadion_ids), 50):
        stadien.update(entitaeten(stadion_ids[i:i + 50]))

    # 3. Abgleich
    for v in mit_qid:
        meldungen = []
        objekt = objekte.get(v['wikidata'])
        if not objekt or 'missing' in objekt:
            print(f'  ✗ {v["id"]}: Wikidata-Objekt {v["wikidata"]} nicht abrufbar')
            continue
        try:
            gleiche_ab(v, objekt, stadien, laender, args.trocken, meldungen.append)
        except (urllib.error.URLError, KeyError, ValueError) as fehler:
            meldungen.append(f'Fehler: {fehler}')
        if meldungen:
            print(f'  • {v["kurzname"]} ({v["wikidata"]})')
            for m in meldungen:
                print(f'      {m}')

    if args.trocken:
        print('Trockenlauf – nichts gespeichert.')
    else:
        schreiben(pfad, kopf, saison, fuss)
        print(f'Gespeichert: {pfad.relative_to(WURZEL)}')
        print('Tipp: Danach „python3 werkzeuge/pruefen.py“ laufen lassen.')


if __name__ == '__main__':
    main()
