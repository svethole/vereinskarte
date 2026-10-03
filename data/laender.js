/*
 * Länder-Stammdaten (saisonunabhängig).
 *
 *   Schlüssel – Ländercode nach ISO 3166-1 (bzw. gb-eng/gb-sct/gb-wls), zugleich
 *               Dateiname der Flagge in vendor/flaggen/
 *   sprache – Wikipedia-Sprachversion für den „Landessprache“-Link.
 *             null = je nach Region verschieden, dann MUSS jeder Verein
 *             selbst ein Feld "wikiSprache" haben (z.B. Belgien, Schweiz).
 *
 * Länder, die hier fehlen (z.B. Herkunftsländer von Trainer*innen), benennt
 * die Seite automatisch über den Browser (Intl.DisplayNames).
 *
 * Fehlt der Artikel in der Landessprache, fällt die Seite auf Englisch zurück.
 */
VK.registriereLaender(
{
  "de":     { "name": "Deutschland",          "sprache": "de" },
  "nl":     { "name": "Niederlande",          "sprache": "nl" },
  "dk":     { "name": "Dänemark",             "sprache": "da" },
  "no":     { "name": "Norwegen",             "sprache": "no" },
  "se":     { "name": "Schweden",             "sprache": "sv" },
  "fi":     { "name": "Finnland",             "sprache": "fi" },
  "pl":     { "name": "Polen",                "sprache": "pl" },
  "cz":     { "name": "Tschechien",           "sprache": "cs" },
  "at":     { "name": "Österreich",           "sprache": "de" },
  "hu":     { "name": "Ungarn",               "sprache": "hu" },
  "ch":     { "name": "Schweiz",              "sprache": null },
  "it":     { "name": "Italien",              "sprache": "it" },
  "tr":     { "name": "Türkei",               "sprache": "tr" },
  "fr":     { "name": "Frankreich",           "sprache": "fr" },
  "be":     { "name": "Belgien",              "sprache": null },
  "lu":     { "name": "Luxemburg",            "sprache": "lb" },
  "gb-eng": { "name": "England",              "sprache": "en" },
  "gb-wls": { "name": "Wales",                "sprache": "en" },
  "gb-sct": { "name": "Schottland",           "sprache": "en" },
  "ie":     { "name": "Irland",               "sprache": "en" },
  "is":     { "name": "Island",               "sprache": "is" },
  "es":     { "name": "Spanien",              "sprache": "es" },
  "pt":     { "name": "Portugal",             "sprache": "pt" }
}
);
