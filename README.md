# ⚽ Vereinskarte

Interaktive Karte europäischer Fußballvereine. Die Vereinswappen sitzen als Pins auf den Stadien. Wenn sich Pins überlappen, werden sie zusammengefasst. Klickst Du einen Verein an, öffnet sich ein Steckbrief mit Geschichte, Fankultur, Derbys und Fanfreundschaften.

Die Seite ist rein statisch: kein PHP, keine Datenbank, kein Build-Schritt. Zum Veröffentlichen reicht es, den Ordner auf einen beliebigen Webserver hochzuladen.

## Öffnen

**Auf dem Server:** Den ganzen Ordner hochladen (ohne `.git/` und `werkzeuge/`) und `index.html` aufrufen. Weil die Seite privat bleiben soll, schützt Du das Verzeichnis am besten mit einem Passwort, z. B. per HTTP-Basic-Auth (`.htaccess` bei Apache, `auth_basic` bei nginx).

**Lokal testen:** Im Projektordner `python3 -m http.server 8000` starten und http://localhost:8000 öffnen. Wenn Du `index.html` per Doppelklick öffnest, funktioniert zwar alles, aber die Karte bleibt grau. Die Kachelserver von OpenStreetMap verlangen nach ihren [Nutzungsregeln](https://operations.osmfoundation.org/policies/tiles/) eine Herkunftsangabe (Referer) und antworten auf `file://`-Seiten mit „403 Access blocked“.

Die Bibliotheken (Leaflet, MarkerCluster, Flaggen) liegen in `vendor/` im Projekt, aus dem Internet kommen nur die Kartenkacheln. Der Kachelanbieter steht oben in `js/app.js` (`KACHELN`).

Direktlinks auf einzelne Vereine funktionieren über die Adresszeile, z. B. `index.html#2026-27/vfb-stuttgart`.

## Bedienung

- **Pin anklicken:** Der Steckbrief öffnet sich in der Seitenleiste (am Handy als Panel von unten).
- **Kreis mit Zahl anklicken:** Es öffnet sich eine Auswahlliste der Vereine an dieser Stelle. Der Knopf „Hineinzoomen“ löst den Kreis auf. Bei Vereinen mit gemeinsamem Stadion fehlt der Knopf, weil Zoomen dort nichts bringt.
- **Ligen-Knöpfe oben:** Ligen ein- und ausblenden.
- **Suche:** Filtert die Karte. Mit Enter springst Du zum ersten Treffer.
- **Saison-Auswahl:** Zeigt den Stand einer früheren Spielzeit.

Projektstand und nächste Schritte stehen in [PROJEKT.md](PROJEKT.md).

## Aufbau

```
index.html                 Seite
css/style.css              Gestaltung (Hell-/Dunkelmodus automatisch)
js/register.js             Register, in das sich die Datendateien eintragen
js/app.js                  Programmlogik
data/laender.js            Länder: Name und Wikipedia-Sprache
data/saisons.js            Liste aller Spielzeiten (neueste zuerst)
data/saisons/2026-27.js    Alle Ligen und Vereine einer Spielzeit
assets/logos/vereine/      Vereinswappen  (<vereins-id>.png/.svg)
assets/logos/ligen/        Ligalogos      (<liga-id>.svg, z.B. de-1.svg)
assets/stadien/            Stadionbilder
werkzeuge/                 Hilfsskripte (Python 3, ohne Zusatzpakete)
vendor/                    Fremdbibliotheken mit Lizenzen
```

Die Datendateien sind `.js`-Dateien, damit die Seite auch ohne Webserver (`file://`) ihre Daten laden kann. Dort dürfen Browser kein JSON nachladen. Zwischen `VK.registriere…(` und `);` steht aber **reines JSON**. Es gelten also die üblichen JSON-Regeln: doppelte Anführungszeichen und kein Komma nach dem letzten Eintrag.

## Datenfelder eines Vereins

| Feld | Bedeutung |
|---|---|
| `id` | Eindeutiger Kurzname in Kleinbuchstaben, z. B. `vfb-stuttgart`. **Bleibt über alle Saisons gleich.** |
| `name`, `kurzname`, `kuerzel` | Offizieller Name, Anzeigename, Kürzel für das Ersatzwappen |
| `liga`, `land` | Liga-ID aus `ligen` und Ländercode aus `laender.js` |
| `farben` | Zwei Vereinsfarben für Pin und Ersatzwappen |
| `logo` | Pfad zum Wappen oder `null`. Fehlt die Datei, erscheint automatisch das Ersatzwappen. |
| `gruendung`, `adresse`, `web` | Eckdaten |
| `wiki` | Wikipedia-Titel je Sprache, z. B. `{"nl": "AFC Ajax", "de": "Ajax Amsterdam", "en": "AFC Ajax"}` |
| `wikiSprache` | Nur nötig, wo die Landessprache je nach Region wechselt (Belgien, Schweiz), z. B. `"fr"` |
| `stadion` | `name`, `adresse`, `lat`, `lon`, `kapazitaet`, `bild`, `bildNachweis` |
| `eigentuemer` | `text`, `art`, `laender` (Liste von Ländercodes für die Flaggen) |
| `sponsor`, `trainer` | `name` und `land` |
| `geschichte`, `mentalitaet` | Fließtext. Eine Leerzeile (`\n\n`) beginnt einen neuen Absatz. |
| `wissenswertes` | Liste kurzer Sätze |
| `rivalitaeten`, `freundschaften` | Liste mit `gegner`, optional `gegnerId` (macht den Namen klickbar), `bezeichnung`, `text` |
| `geprueft` | `false` zeigt den Hinweis „Entwurf, noch ungeprüft“ |

Leere Felder sind kein Problem: Die Seite zeigt dann „noch nicht erfasst“.

### Wikipedia-Links

Angezeigt wird der Artikel in der Landessprache (aus `laender.js` oder `wikiSprache`). Fehlt er, springt die Seite auf Englisch um. Zusätzlich gibt es immer den deutschen Artikel, falls im Feld `wiki` ein `de`-Titel steht.

## Neue Saison

1. Die aktuelle Saisondatei kopieren, z. B. `data/saisons/2026-27.js` → `data/saisons/2027-28.js`.
2. In der neuen Datei `id`, `bezeichnung` und `stand` anpassen. Dann Auf- und Absteiger umhängen (Feld `liga`), neue Vereine ergänzen und Trainer, Sponsoren usw. aktualisieren. Die alte Datei bleibt unverändert, sie ist das Archiv.
3. Die neue Saison in `data/saisons.js` **oben** eintragen:
   ```
   { "id": "2027-28", "bezeichnung": "2027/28", "datei": "data/saisons/2027-28.js" },
   ```
4. `python3 werkzeuge/pruefen.py` ausführen. Es meldet Tippfehler, doppelte IDs, fehlende Koordinaten und tote Verweise.

Die Wappen in `assets/` sind saisonübergreifend und werden von allen Spielzeiten mitbenutzt.

## Neue Liga oder neues Land

1. Gibt es das Land noch nicht in `data/laender.js`, dort ergänzen. Den Ländercode trägst Du gleichzeitig als Dateinamen der Flagge in `vendor/flaggen/` ein.
2. In der Saisondatei unter `ligen` eintragen, z. B. `{ "id": "at-1", "name": "Bundesliga", "land": "at", "stufe": 1, "logo": "assets/logos/ligen/at-1.svg" }`.
3. Die Vereine mit `"liga": "at-1"` ergänzen. Mindestens nötig sind `id`, `name`, `kurzname`, `liga`, `land`, `wiki` und das Stadion mit Name.
4. `python3 werkzeuge/wikidata_abgleich.py --nur <id> …` ergänzt Koordinaten, Logo, Stadionbild und fehlende Wikipedia-Titel.

## Werkzeuge

```bash
# Daten prüfen (offline)
python3 werkzeuge/pruefen.py          # Fehler
python3 werkzeuge/pruefen.py -v       # plus Liste fehlender Inhalte

# Basisdaten von Wikidata holen (braucht Internet)
python3 werkzeuge/wikidata_abgleich.py --trocken    # erst anschauen, was passieren würde
python3 werkzeuge/wikidata_abgleich.py              # neueste Saison abgleichen
python3 werkzeuge/wikidata_abgleich.py --nur ajax --nur psv
```

Der Abgleich fasst **nur Basisdaten** an: Wikidata-ID, fehlende Wikipedia-Titel, Logo, Stadion-Koordinaten (bei mehr als 300 m Abweichung), Kapazität und Stadionbild mit Bildnachweis. Selbst geschriebene Texte, Trainer und Sponsoren bleiben unangetastet. Für viele deutsche Vereinswappen gibt es auf Wikimedia Commons keine freie Datei. Diese Wappen legst Du von Hand als `assets/logos/vereine/<id>.png` ab und trägst den Pfad im Feld `logo` ein.

## Rechtliches

Die Seite ist für den **privaten Gebrauch** gedacht. Vereins- und Ligalogos sind markenrechtlich geschützt und sollten nicht öffentlich ins Netz gestellt werden. Stadionbilder von Wikimedia Commons stehen unter freien Lizenzen, deshalb zeigt die Seite den Bildnachweis jeweils mit an. Kartendaten und -kacheln © OpenStreetMap-Mitwirkende. Die Kachelserver von OpenStreetMap werden ehrenamtlich betrieben und sind für Seiten mit wenigen Zugriffen wie diese ausdrücklich in Ordnung.

Fremdbibliotheken: [Leaflet](https://leafletjs.com) (BSD-2), [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) (MIT), [flag-icons](https://github.com/lipis/flag-icons) (MIT). Die Lizenztexte liegen in `vendor/`.
