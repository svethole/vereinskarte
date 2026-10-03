/*
 * Zentrales Register, in das sich die Datendateien eintragen.
 *
 * Die Daten liegen bewusst als .js-Dateien vor (nicht als .json): Browser
 * erlauben kein fetch() von JSON über file://, ein <script>-Tag funktioniert
 * dagegen auch beim lokalen Testen ohne Webserver. Der Inhalt zwischen den Klammern
 * ist trotzdem reines JSON, damit Werkzeuge (siehe werkzeuge/) ihn lesen und
 * schreiben können.
 */
window.VK = {
  laender: {},
  saisonListe: [],
  saisonDaten: {},

  registriereLaender(daten) {
    this.laender = daten;
  },

  registriereSaisons(liste) {
    this.saisonListe = liste;
  },

  registriereSaison(daten) {
    this.saisonDaten[daten.id] = daten;
    document.dispatchEvent(new CustomEvent('vk:saison-geladen', { detail: daten.id }));
  },
};
