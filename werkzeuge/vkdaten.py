"""Lesen und Schreiben der Datendateien (data/*.js).

Die Dateien bestehen aus Kopfkommentar, einem Aufruf wie
``VK.registriereSaison(`` und reinem JSON bis zum abschließenden ``);``.
"""
import json
import re
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
AUFRUF = re.compile(r'VK\.registriere\w+\(\s*\n', re.M)


def lesen(pfad):
    """Gibt (kopf, daten, fuss) zurück."""
    text = Path(pfad).read_text(encoding='utf-8')
    treffer = AUFRUF.search(text)
    if not treffer:
        raise ValueError(f'{pfad}: kein VK.registriere…(-Aufruf gefunden')
    ende = text.rindex(');')
    kopf, rumpf, fuss = text[:treffer.end()], text[treffer.end():ende], text[ende:]
    try:
        return kopf, json.loads(rumpf), fuss
    except json.JSONDecodeError as fehler:
        zeile = kopf.count('\n') + fehler.lineno
        raise ValueError(f'{pfad}, Zeile {zeile}: ungültiges JSON – {fehler.msg}') from None


def schreiben(pfad, kopf, daten, fuss):
    rumpf = json.dumps(daten, ensure_ascii=False, indent=2)
    Path(pfad).write_text(kopf + rumpf + '\n' + fuss, encoding='utf-8')


def saisondateien():
    _, liste, _ = lesen(WURZEL / 'data' / 'saisons.js')
    return [(eintrag, WURZEL / eintrag['datei']) for eintrag in liste]
