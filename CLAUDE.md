# Vereinskarte – Hinweise für Claude

Private, interaktive Karte europäischer Fußballvereine von SveTho. Die Pins sitzen auf den Stadien, ein Klick öffnet den Steckbrief mit Eckdaten, Geschichte, Fankultur, Derbys und Fanfreundschaften. Projektstand und nächste Schritte stehen in [PROJEKT.md](PROJEKT.md), Aufbau, Datenfelder und Arbeitsabläufe in der [README.md](README.md).

Dieses Repo hat nichts mit SveThos Obsidian-Vault zu tun. Hier gibt es also keine Daily Notes, keinen Inbox-Check und keine Lernthemen.

## Sprache und Stil

- **Duzen**, Deutsch als Grundsprache, mit süddeutschem bzw. österreichisch-schweizerischem Wortschatz im Zweifel („Grüß Gott“, „Benützung“, „sie frägt“) und Perfekt statt Präteritum.
- **Gendern mit Asterisk** (Spieler*innen, Trainer*innen), auch in der Oberfläche und in den Datentexten.
- Locker, freundlich, gern mit etwas Humor und dosiert eingesetzten Emojis. Keine Floskeln, kein Marketingsprech.
- Code-Bezeichner, Kommentare, Commit-Messages und Doku auf Deutsch, passend zum bestehenden Code (`waehleVerein`, `zustand`, `saisonDaten` …).

## Regeln für die Vereinsdaten

- **Nur Belegbares.** Im Zweifel ein Feld lieber leer lassen (die Seite zeigt dann „noch nicht erfasst“), statt etwas Plausibles zu erfinden. Gilt besonders für Sponsoren, Eigentümer, Trainer, Gründungsjahre und Fanfreundschaften.
- **Politische Einordnung von Fanszenen** nur konkret und mit Beleg („Ultragruppe X positioniert sich offen antifaschistisch“), keine pauschalen Etiketten für ganze Vereine.
- Aktuelle Angaben (Trainer, Kader-Umfeld, Auf- und Absteiger) per Websuche prüfen und im Chat die Quellen nennen. Was unsicher bleibt, im Chat ausdrücklich zum Gegenchecken markieren.
- Neue oder überarbeitete Einträge behalten `"geprueft": false`. Auf `true` setzt nur SveTho, nachdem er gegengelesen hat.
- Vereins-IDs (`id`) bleiben über alle Saisons gleich. Archivierte Saisondateien werden nicht mehr verändert, außer bei offensichtlichen Fehlern und auf Nachfrage.
- Texte in `geschichte` und `mentalitaet`: Fließtext, Absätze mit `\n\n`, Tiefe wie in den Mustervereinen (VfB Stuttgart, Union Berlin, Schalke, St. Pauli, Ajax, PSV).

## Technik

- Rein statische Seite (HTML/CSS/Vanilla-JS, Leaflet + MarkerCluster lokal in `vendor/`). Kein Build-Schritt, keine Frameworks, keine CDNs. Das soll so bleiben.
- Die Datendateien sind JSON-in-JS. Zwischen `VK.registriere…(` und `);` muss gültiges JSON stehen, damit `werkzeuge/` sie lesen kann.
- Nach jeder Datenänderung `python3 werkzeuge/pruefen.py` laufen lassen, es muss 0 Fehler melden.
- Kartenkacheln kommen von openstreetmap.org. Die sperren `file://`-Seiten, deshalb lokal mit `python3 -m http.server` testen.
- Die Seite bleibt **privat** (Logos sind markenrechtlich geschützt). Gehostet wird sie auf SveThos eigenem Server hinter einem Passwort, nicht öffentlich und nicht auf GitHub Pages.

## Git

- Commit-Messages auf Deutsch, knapp und beschreibend.
- Kein `push --force` und kein Umschreiben der History ohne Rückfrage.
