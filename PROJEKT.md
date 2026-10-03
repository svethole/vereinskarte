# Projektstand Vereinskarte ⚽

## Ziel

Eine private, interaktive Karte europäischer Fußballvereine. Die Vereinswappen sitzen als Pins auf den Stadien. Ein Klick öffnet einen Steckbrief mit Eigentümer, Sponsor, Trainer, Geschichte, Mentalität und Fanszene, Derbys und Fanfreundschaften. Die Seite ist rein statisch (kein PHP, keine Datenbank), die Spielzeiten sind als Archiv per Dropdown abrufbar.

## Zielumfang (22 Länder)

Deutschland (3 Ligen), Niederlande (2), Dänemark (2), Norwegen, Schweden, Finnland, Polen (2), Tschechien (2), Österreich (2), Ungarn, Schweiz (2), Italien (2), Türkei, Frankreich (3), Belgien, Luxemburg, England + Wales (3), Schottland, Irland, Island, Spanien (2), Portugal (2). Insgesamt rund 600 Vereine.

## Stand

- 03.10.2026: Prototyp gebaut mit Bundesliga, 2. Bundesliga und Eredivisie (54 Vereine). Basisdaten und Trainer für alle, komplette Texte für 6 Mustervereine (VfB, Union, Schalke, St. Pauli, Ajax, PSV).
- 03.10.2026: Kurz auf CARTO-Kacheln umgestellt, dann zurück zu OpenStreetMap. Die Seite kommt auf den eigenen Server, dort tritt die OSM-Sperre für `file://`-Seiten nicht auf.

## Nächste Schritte

- [ ] Prototyp anschauen: Passen Bedienung, Cluster-Overlay und Seitenleiste?
- [ ] Auf dem Mac `python3 werkzeuge/wikidata_abgleich.py` laufen lassen (Logos, Stadionbilder, Koordinaten)
- [ ] Fehlende Wappen von Hand nach `assets/logos/vereine/` legen
- [ ] Texte Liga für Liga ergänzen, jeweils mit `geprueft: true` abhaken
- [ ] Nächste Ligen aufnehmen

## Notizen

- Die Seite soll privat bleiben, weil die Logos markenrechtlich geschützt sind. Sie kommt deshalb auf den eigenen Server, mit Passwortschutz statt GitHub Pages. Lokal testen mit `python3 -m http.server`.
- Die Daten liegen als JSON-in-JS vor, eine Datei pro Saison. Für eine neue Saison die Datei kopieren und anpassen, die alte bleibt als Archiv. Details in der [README.md](README.md).
- Politische Einordnungen von Fanszenen nur mit Belegen aufnehmen, keine pauschalen Etiketten.
