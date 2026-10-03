#!/usr/bin/env python3
"""Prüft alle Saisondateien auf Tippfehler und Unstimmigkeiten.

Aufruf:  python3 werkzeuge/pruefen.py

Meldet Fehler (Seite würde nicht richtig funktionieren) und Hinweise
(fehlende Inhalte). Läuft ohne Internet und ohne Zusatzpakete.
"""
import sys
from collections import Counter
from pathlib import Path

from vkdaten import WURZEL, lesen, saisondateien

PFLICHT = ['id', 'name', 'kurzname', 'liga', 'land', 'stadion']


def pruefe_saison(eintrag, pfad, laender):
    fehler, hinweise = [], []
    if not pfad.exists():
        return [f'Datei fehlt: {pfad}'], []
    try:
        _, saison, _ = lesen(pfad)
    except ValueError as e:
        return [str(e)], []

    if saison.get('id') != eintrag['id']:
        fehler.append(f'Saison-ID „{saison.get("id")}“ passt nicht zum Index-Eintrag „{eintrag["id"]}“')

    ligen = {l['id'] for l in saison.get('ligen', [])}
    vereine = saison.get('vereine', [])
    ids = [v.get('id') for v in vereine]
    for vid, anzahl in Counter(ids).items():
        if anzahl > 1:
            fehler.append(f'Vereins-ID doppelt: {vid}')

    for v in vereine:
        name = v.get('id', '?')
        for feld in PFLICHT:
            if not v.get(feld):
                fehler.append(f'{name}: Pflichtfeld „{feld}“ fehlt')
        if v.get('liga') and v['liga'] not in ligen:
            fehler.append(f'{name}: unbekannte Liga „{v["liga"]}“')
        if v.get('land') and v['land'] not in laender:
            fehler.append(f'{name}: Land „{v["land"]}“ fehlt in data/laender.js')
        s = v.get('stadion') or {}
        if not isinstance(s.get('lat'), (int, float)) or not isinstance(s.get('lon'), (int, float)):
            fehler.append(f'{name}: Stadion ohne gültige Koordinaten (wird nicht auf der Karte angezeigt)')
        if v.get('logo') and not (WURZEL / v['logo']).exists():
            hinweise.append(f'{name}: Logodatei {v["logo"]} nicht gefunden')
        land = laender.get(v.get('land'), {})
        if land.get('sprache') is None and not v.get('wikiSprache'):
            fehler.append(f'{name}: In {land.get("name", v.get("land"))} hängt die Wiki-Sprache von der Region ab, bitte „wikiSprache“ setzen')
        for art in ('rivalitaeten', 'freundschaften'):
            for r in v.get(art) or []:
                if r.get('gegnerId') and r['gegnerId'] not in ids:
                    fehler.append(f'{name}: {art} verweist auf unbekannte ID „{r["gegnerId"]}“')
        fehlend = [f for f in ('geschichte', 'mentalitaet', 'sponsor', 'eigentuemer') if not v.get(f)]
        if fehlend:
            hinweise.append(f'{name}: noch leer – {", ".join(fehlend)}')

    return fehler, hinweise


def main():
    _, laender, _ = lesen(WURZEL / 'data' / 'laender.js')
    gesamt_fehler = 0
    ausfuehrlich = '-v' in sys.argv
    for eintrag, pfad in saisondateien():
        fehler, hinweise = pruefe_saison(eintrag, pfad, laender)
        print(f'Saison {eintrag["bezeichnung"]}: {len(fehler)} Fehler, {len(hinweise)} Hinweise')
        for f in fehler:
            print('  ✗', f)
        if ausfuehrlich:
            for h in hinweise:
                print('  ·', h)
        gesamt_fehler += len(fehler)
    if not ausfuehrlich:
        print('(Hinweise auf fehlende Inhalte mit -v anzeigen)')
    sys.exit(1 if gesamt_fehler else 0)


if __name__ == '__main__':
    main()
