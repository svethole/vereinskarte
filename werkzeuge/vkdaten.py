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


def _formatieren(wert, einrueckung=0):
    """Wie json.dumps(indent=2), aber kurze Objekte/Listen bleiben einzeilig."""
    kompakt = json.dumps(wert, ensure_ascii=False)
    if not isinstance(wert, (dict, list)) or (len(kompakt) + einrueckung <= 110 and kompakt.count('{') <= 1):
        return kompakt
    innen = ' ' * (einrueckung + 2)
    if isinstance(wert, dict):
        teile = [f'{innen}{json.dumps(k, ensure_ascii=False)}: {_formatieren(v, einrueckung + 2)}' for k, v in wert.items()]
        klammern = '{}'
    else:
        teile = [f'{innen}{_formatieren(v, einrueckung + 2)}' for v in wert]
        klammern = '[]'
    if not teile:
        return klammern
    return klammern[0] + '\n' + ',\n'.join(teile) + '\n' + ' ' * einrueckung + klammern[1]


def schreiben(pfad, kopf, daten, fuss):
    Path(pfad).write_text(kopf + _formatieren(daten) + '\n' + fuss, encoding='utf-8')


def saisondateien():
    _, liste, _ = lesen(WURZEL / 'data' / 'saisons.js')
    return [(eintrag, WURZEL / eintrag['datei']) for eintrag in liste]
