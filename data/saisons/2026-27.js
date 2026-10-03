/* Saison 2026/27 – Inhalt zwischen den Klammern ist reines JSON (siehe README.md). */
VK.registriereSaison(
{
  "id": "2026-27",
  "bezeichnung": "2026/27",
  "stand": "2026-10-03",
  "ligen": [
    {"id": "de-1", "name": "Bundesliga", "land": "de", "stufe": 1, "logo": "assets/logos/ligen/de-1.svg"},
    {"id": "de-2", "name": "2. Bundesliga", "land": "de", "stufe": 2, "logo": "assets/logos/ligen/de-2.svg"},
    {"id": "nl-1", "name": "Eredivisie", "land": "nl", "stufe": 1, "logo": "assets/logos/ligen/nl-1.svg"}
  ],
  "vereine": [
    {
      "id": "fc-bayern-muenchen",
      "name": "FC Bayern München e.V.",
      "kurzname": "FC Bayern München",
      "kuerzel": "FCB",
      "liga": "de-1",
      "land": "de",
      "farben": ["#dc052d", "#0066b2"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Säbener Straße 51–57, 81547 München",
      "web": "https://fcbayern.com",
      "wiki": {"de": "FC Bayern München", "en": "FC Bayern Munich"},
      "stadion": {
        "name": "Allianz Arena",
        "adresse": "Werner-Heisenberg-Allee 25, 80939 München",
        "lat": 48.2188,
        "lon": 11.6247,
        "kapazitaet": 75024,
        "bild": null
      },
      "eigentuemer": {
        "text": "FC Bayern München AG: e.V. rund 75 %, adidas, Audi und Allianz je rund 8,3 %",
        "art": "Ausgegliederte AG, Vereinsmehrheit (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Deutsche Telekom", "land": "de"},
      "trainer": {"name": "Vincent Kompany", "land": "be"},
      "geschichte": "Gegründet worden ist der FC Bayern am 27. Februar 1900 von Mitgliedern, die den MTV 1879 verlassen haben, weil sie dort keinen Fußball spielen durften. Prägende Figur der Frühzeit ist der jüdische Präsident Kurt Landauer gewesen, unter dem der Verein 1932 seine erste Meisterschaft geholt hat. In der NS-Zeit ist der Klub als „Judenklub“ diffamiert worden, Landauer hat emigrieren müssen und ist nach dem Krieg zurückgekehrt.\n\nBei der Gründung der Bundesliga 1963 war nicht der FC Bayern, sondern der TSV 1860 dabei. Erst 1965 ist Bayern aufgestiegen und hat mit Beckenbauer, Gerd Müller und Sepp Maier eine Ära begonnen: drei Landesmeisterpokale von 1974 bis 1976, später die Champions League 2001, 2013 und 2020. Mit über 30 Meistertiteln ist der FC Bayern deutscher Rekordmeister und gewinnt die Meisterschaft seit Jahrzehnten in schöner Regelmäßigkeit.",
      "mentalitaet": "„Mia san mia“: Selbstbewusstsein bis zur Arroganz gehört zum Markenkern, Platz zwei gilt als Niederlage. Historisch hat der Verein eher bürgerliche Wurzeln, im Gegensatz zum „Arbeiterverein“ 1860 aus Giesing. Heute ist der FC Bayern der mitgliederstärkste Sportverein der Welt und hat Fans in ganz Deutschland. Genauso groß ist allerdings die Zahl derer, die ihn von Herzen nicht mögen.\n\nDie Südkurve, angeführt von der Ultragruppe Schickeria, gilt als politisch klar gegen Rechts positioniert. Sie hat die Erinnerung an Kurt Landauer mit Choreografien wiederbelebt und ist dafür 2014 mit dem Julius-Hirsch-Preis des DFB ausgezeichnet worden. In der Arena sitzt ein breites, oft eher eventorientiertes Publikum, sie ist sehr familientauglich.",
      "wissenswertes": [
        "Die Allianz Arena kann ihre Außenhülle beleuchten, bei Bayern-Spielen leuchtet sie rot. Bis 2017 hat sich der FC Bayern das Stadion mit dem TSV 1860 geteilt, dann hat sie für 1860 blau geleuchtet.",
        "In den 1990ern hat der Klub wegen seiner vielen internen Querelen den Spitznamen „FC Hollywood“ bekommen.",
        "2013 und 2020 hat der FC Bayern das Triple aus Meisterschaft, Pokal und Champions League gewonnen.",
        "Der Spielfilm „Landauer – Der Präsident“ (2014) erzählt die Geschichte des jüdischen Präsidenten."
      ],
      "rivalitaeten": [
        {
          "gegner": "TSV 1860 München",
          "bezeichnung": "Münchner Stadtderby",
          "text": "Das traditionelle Stadtderby, durch die unterschiedlichen Ligen seit Jahren fast nur noch historisch."
        },
        {"gegner": "1. FC Nürnberg", "gegnerId": "1-fc-nuernberg", "bezeichnung": "Bayerisches Derby"},
        {
          "gegner": "Borussia Dortmund",
          "gegnerId": "borussia-dortmund",
          "bezeichnung": "Der Klassiker",
          "text": "Sportliche Spitzenrivalität seit den 1990ern."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "borussia-dortmund",
      "name": "Ballspielverein Borussia 09 e.V. Dortmund",
      "kurzname": "Borussia Dortmund",
      "kuerzel": "BVB",
      "liga": "de-1",
      "land": "de",
      "farben": ["#fde100", "#000000"],
      "logo": null,
      "gruendung": 1909,
      "adresse": "Rheinlanddamm 207–209, 44137 Dortmund",
      "web": "https://www.bvb.de",
      "wiki": {"de": "Borussia Dortmund", "en": "Borussia Dortmund"},
      "stadion": {
        "name": "Signal Iduna Park",
        "adresse": "Strobelallee 50, 44139 Dortmund",
        "lat": 51.4926,
        "lon": 7.4519,
        "kapazitaet": 81365,
        "bild": null
      },
      "eigentuemer": {
        "text": "Borussia Dortmund GmbH & Co. KGaA, börsennotiert; der e.V. kontrolliert die Komplementär-GmbH",
        "art": "Börsennotierte KGaA (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Vodafone", "land": "gb"},
      "trainer": {"name": "Niko Kovač", "land": "hr"},
      "geschichte": "Am 19. Dezember 1909 haben junge Männer der katholischen Dreifaltigkeitsgemeinde in der Gaststätte „Zum Wildschütz“ am Borsigplatz den BV Borussia gegründet, gegen den erklärten Willen ihres Kaplans. Den Namen hat die nahe Borussia-Brauerei geliefert. 1956 und 1957 ist der BVB erstmals Meister geworden. 1966 hat er mit dem Europapokal der Pokalsieger als erster deutscher Verein einen Europapokal gewonnen.\n\nUnter Ottmar Hitzfeld sind die Meisterschaften 1995 und 1996 und 1997 der Sieg in der Champions League gefolgt. Nach dem Börsengang 2000 hat der Klub 2005 kurz vor der Insolvenz gestanden. Unter Jürgen Klopp ist er wiederauferstanden: Meister 2011, Double 2012 und das Champions-League-Finale 2013.",
      "mentalitaet": "Ein Arbeiterverein durch und durch: Kohle, Stahl und Bier haben Dortmund geprägt, und der BVB ist bis heute das emotionale Zentrum der Stadt. Die Südtribüne, die „Gelbe Wand“, ist mit rund 25.000 Stehplätzen die größte Stehplatztribüne Europas, und der Zuschauerschnitt ist einer der höchsten der Welt.\n\nIn den 1980ern hat es mit der „Borussenfront“ eine berüchtigte rechtsextreme Hooligangruppe gegeben, und auch später sind rechte Strukturen im Umfeld ein Thema gewesen. Verein, Fanprojekt und große Teile der Kurve gehen heute sichtbar dagegen vor. Abseits der Derbys ist das Stadion gut für Familien geeignet.",
      "wissenswertes": [
        "Das Westfalenstadion ist für die WM 1974 gebaut worden, heute heißt es Signal Iduna Park.",
        "Gefeiert wird traditionell am Borsigplatz, dem Gründungsort des Vereins.",
        "Der Werbeslogan „Echte Liebe“ ist längst Teil der Fansprache geworden."
      ],
      "rivalitaeten": [
        {
          "gegner": "FC Schalke 04",
          "gegnerId": "fc-schalke-04",
          "bezeichnung": "Revierderby",
          "text": "Eines der emotionalsten Derbys Europas, zurück in der Bundesliga seit Schalkes Aufstieg 2026."
        },
        {"gegner": "VfL Bochum", "gegnerId": "vfl-bochum", "bezeichnung": "Revierderby"},
        {"gegner": "FC Bayern München", "gegnerId": "fc-bayern-muenchen", "bezeichnung": "Der Klassiker"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "rb-leipzig",
      "name": "RasenBallsport Leipzig e.V.",
      "kurzname": "RB Leipzig",
      "kuerzel": "RBL",
      "liga": "de-1",
      "land": "de",
      "farben": ["#dd0741", "#ffffff"],
      "logo": null,
      "gruendung": 2009,
      "adresse": "Am Sportforum 3, 04105 Leipzig",
      "web": "https://www.rbleipzig.com",
      "wiki": {"de": "RB Leipzig", "en": "RB Leipzig"},
      "stadion": {
        "name": "Red Bull Arena",
        "adresse": "Am Sportforum 3, 04105 Leipzig",
        "lat": 51.3458,
        "lon": 12.3483,
        "kapazitaet": 47069,
        "bild": null
      },
      "eigentuemer": {
        "text": "RasenBallsport Leipzig GmbH, wirtschaftlich nahezu vollständig bei Red Bull",
        "art": "Konzernclub; 50+1 formal über sehr kleinen e.V. erfüllt (umstritten)",
        "laender": ["at"]
      },
      "sponsor": {"name": "Red Bull", "land": "at"},
      "trainer": {"name": "Martín Demichelis", "land": "ar"},
      "geschichte": "RB Leipzig ist 2009 auf Initiative von Red Bull gegründet worden und hat das Startrecht des Oberligisten SSV Markranstädt übernommen. In nur sieben Jahren ist der Verein bis in die Bundesliga durchmarschiert. Dort ist er 2017 gleich in der ersten Saison Vizemeister geworden und hat sich seither in der Spitzengruppe festgesetzt.\n\nDie größten Erfolge sind das Halbfinale der Champions League 2020 und die DFB-Pokalsiege 2022 und 2023. Gespielt wird im ehemaligen Zentralstadion: In die Wälle des alten „Stadions der Hunderttausend“ von 1956 ist zur WM 2006 eine moderne Arena hineingebaut worden.",
      "mentalitaet": "Das Gegenmodell zum Traditionsverein: ein Konzernprojekt mit klarer sportlicher Linie (junge Spieler, Pressing, Weiterverkauf). Die 50+1-Regel wird formal eingehalten, allerdings mit einem e.V., der nur sehr wenige stimmberechtigte Mitglieder hat. Daran entzündet sich bundesweit Kritik und Protest vieler Fanszenen.\n\nIn Leipzig selbst ist der Verein dagegen gut angekommen. Die Region hatte lange keinen Erstligisten, das Stadion ist regelmäßig voll. Das Publikum ist jung, familiär und deutlich weniger ultrageprägt als anderswo, eine aktive Fankurve gibt es aber auch hier.",
      "wissenswertes": [
        "„RasenBallsport“ heißt der Verein, weil Sponsorennamen im Vereinsnamen nicht erlaubt sind. Die Abkürzung RB ist natürlich trotzdem kein Zufall.",
        "Leipzig ist die Heimat des ersten deutschen Meisters überhaupt: Der VfB Leipzig hat 1903 die erste Endrunde gewonnen.",
        "Die Traditionsvereine der Stadt, der 1. FC Lokomotive und die BSG Chemie, spielen inzwischen in tieferen Ligen."
      ],
      "rivalitaeten": [
        {
          "gegner": "Union Berlin",
          "gegnerId": "1-fc-union-berlin",
          "text": "Wiederkehrende Fanproteste gegen das Red-Bull-Modell, nicht nur aus Köpenick."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "vfb-stuttgart",
      "name": "VfB Stuttgart 1893 e.V.",
      "kurzname": "VfB Stuttgart",
      "kuerzel": "VfB",
      "liga": "de-1",
      "land": "de",
      "farben": ["#e32219", "#ffffff"],
      "logo": null,
      "gruendung": 1893,
      "adresse": "Mercedesstraße 109, 70372 Stuttgart",
      "web": "https://www.vfb.de",
      "wiki": {"de": "VfB Stuttgart", "en": "VfB Stuttgart"},
      "stadion": {
        "name": "MHPArena",
        "adresse": "Mercedesstraße 87, 70372 Stuttgart",
        "lat": 48.7922,
        "lon": 9.232,
        "kapazitaet": 60449,
        "bild": null
      },
      "eigentuemer": {
        "text": "VfB Stuttgart 1893 AG: e.V. mit deutlicher Mehrheit, Minderheitsanteile u. a. bei Mercedes-Benz und Porsche",
        "art": "Ausgegliederte AG, Vereinsmehrheit (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "LBBW", "land": "de"},
      "trainer": {"name": "Sebastian Hoeneß", "land": "de"},
      "geschichte": "Der VfB geht auf den 1893 gegründeten FV Stuttgart zurück, der anfangs vor allem Rugby gespielt hat. 1912 hat er mit dem Kronen-Club Cannstatt zum Verein für Bewegungsspiele fusioniert. Deutscher Meister ist der VfB 1950, 1952, 1984, 1992 und 2007 geworden, den DFB-Pokal hat er 1954, 1958, 1997 und 2025 gewonnen.\n\nNach den Abstiegen 2016 und 2019 ist er jeweils direkt wieder aufgestiegen. 2023 hat er sich erst in der Relegation gegen den HSV gerettet und ist schon in der Saison darauf unter Sebastian Hoeneß Vizemeister geworden, mit Rückkehr in die Champions League.",
      "mentalitaet": "Bürgerlich-schwäbisch geprägter Großstadtverein mit riesigem Einzugsgebiet in ganz Württemberg. Die Nähe zur Autoindustrie ist sichtbar: Das Stadion steht im Neckarpark direkt neben dem Mercedes-Werk, Mercedes-Benz und Porsche halten Anteile an der AG.\n\nDie Cannstatter Kurve gehört zu den lautesten Kurven Deutschlands, prägende Ultragruppe ist das Commando Cannstatt 1997. Politisch ist die Kurve keinem Lager klar zuzuordnen, positioniert sich aber regelmäßig gegen Diskriminierung. Im Stadion ist viel Familienpublikum, der VfB gehört zu den mitgliederstärksten Vereinen Deutschlands.",
      "wissenswertes": [
        "Markenzeichen ist der rote Brustring auf dem weißen Trikot.",
        "Das Stadion hieß nacheinander Neckarstadion, Gottlieb-Daimler-Stadion und Mercedes-Benz Arena, heute heißt es MHPArena. Spielort bei den WM-Turnieren 1974 und 2006 sowie bei der EM 2024.",
        "„Junge Wilde“: Anfang der 2000er hat der VfB mit vielen Eigengewächsen wie Hinkel, Kuranyi oder Hleb für Furore gesorgt.",
        "Maskottchen ist das Krokodil Fritzle."
      ],
      "rivalitaeten": [
        {
          "gegner": "Karlsruher SC",
          "gegnerId": "karlsruher-sc",
          "bezeichnung": "Baden-Württemberg-Derby",
          "text": "Die große Rivalität zwischen Württemberg und Baden. Aktuell spielen die beiden in verschiedenen Ligen."
        },
        {"gegner": "FC Bayern München", "gegnerId": "fc-bayern-muenchen", "bezeichnung": "Südderby"},
        {
          "gegner": "SC Freiburg",
          "gegnerId": "sc-freiburg",
          "bezeichnung": "Landesderby",
          "text": "Deutlich entspannter als gegen den KSC."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "tsg-hoffenheim",
      "name": "TSG 1899 Hoffenheim e.V.",
      "kurzname": "TSG Hoffenheim",
      "kuerzel": "TSG",
      "liga": "de-1",
      "land": "de",
      "farben": ["#1961b5", "#ffffff"],
      "logo": null,
      "gruendung": 1899,
      "adresse": "Horrenberger Straße 58, 74939 Zuzenhausen",
      "web": "https://www.tsg-hoffenheim.de",
      "wiki": {"de": "TSG 1899 Hoffenheim", "en": "TSG Hoffenheim"},
      "stadion": {
        "name": "PreZero Arena",
        "adresse": "Dietmar-Hopp-Straße 1, 74889 Sinsheim",
        "lat": 49.2381,
        "lon": 8.8876,
        "kapazitaet": 30150,
        "bild": null
      },
      "eigentuemer": {
        "text": "Spielbetriebs-GmbH; seit 2023 wieder mit Stimmenmehrheit beim e.V., Dietmar Hopp als großer Anteilseigner",
        "art": "Ausgegliederte GmbH (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "SAP", "land": "de"},
      "trainer": {"name": "Christian Ilzer", "land": "at"},
      "geschichte": "Die TSG stammt aus dem Dorf Hoffenheim, das heute ein Stadtteil von Sinsheim im Kraichgau ist und rund 3.000 Einwohner*innen hat. Gegründet worden ist sie 1899 als Turnverein, die heutige TSG ist 1945 durch eine Fusion entstanden. Ab 1990 hat SAP-Mitgründer Dietmar Hopp, der als Jugendlicher selbst in Hoffenheim gekickt hat, den Verein gefördert. Mit seinem Geld ist die TSG von der Kreisliga bis in die Bundesliga aufgestiegen, wo sie seit 2008 spielt.\n\n2018 hat sie erstmals in der Champions League gespielt. Julian Nagelsmann ist hier 2016 mit 28 Jahren jüngster Bundesliga-Cheftrainer geworden.",
      "mentalitaet": "Ein Dorfverein mit Mäzen. Das macht die TSG für viele Fanszenen zum Feindbild „Retortenklub“. Die Anfeindungen gegen Dietmar Hopp haben im Februar 2020 ihren Höhepunkt erreicht: Nach Schmähbannern der Bayern-Fans haben beide Mannschaften die letzten Minuten des Spiels demonstrativ nur noch den Ball hin und her geschoben.\n\nDie eigene Fanszene ist klein, aber gewachsen. Das Publikum stammt aus der Region Kraichgau und Rhein-Neckar, es ist familiär, ruhig und ausgesprochen kinderfreundlich. 2023 hat Hopp die Stimmenmehrheit an den e.V. zurückgegeben, seither gilt wieder die normale 50+1-Regel.",
      "wissenswertes": [
        "Das Stadion steht nicht in Hoffenheim, sondern am Rand von Sinsheim direkt an der A6. Trainiert wird im benachbarten Zuzenhausen.",
        "Hopp hat bis 2023 eine Ausnahmegenehmigung von der 50+1-Regel gehabt, weil er den Verein mehr als 20 Jahre lang gefördert hat."
      ],
      "rivalitaeten": [],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "bayer-04-leverkusen",
      "name": "Bayer 04 Leverkusen Fußball GmbH",
      "kurzname": "Bayer 04 Leverkusen",
      "kuerzel": "B04",
      "liga": "de-1",
      "land": "de",
      "farben": ["#e32221", "#000000"],
      "logo": null,
      "gruendung": 1904,
      "adresse": "Bismarckstraße 122–124, 51373 Leverkusen",
      "web": "https://www.bayer04.de",
      "wiki": {"de": "Bayer 04 Leverkusen", "en": "Bayer 04 Leverkusen"},
      "stadion": {
        "name": "BayArena",
        "adresse": "Bismarckstraße 122–124, 51373 Leverkusen",
        "lat": 51.0383,
        "lon": 7.0022,
        "kapazitaet": 30210,
        "bild": null
      },
      "eigentuemer": {"text": "Bayer AG (100 %)", "art": "Werksclub, Ausnahme von der 50+1-Regel", "laender": ["de"]},
      "sponsor": {"name": "BarmeniaGothaer", "land": "de"},
      "trainer": {"name": "Carles Martínez Novell", "land": "es"},
      "geschichte": "Am 1. Juli 1904 ist auf Anregung von Beschäftigten der Farbenfabriken Bayer der „Turn- und Spielverein der Farbenfabriken vorm. Friedr. Bayer & Co.“ gegründet worden. Der Konzern hat den Sport seiner Belegschaft von Anfang an gefördert. Erste Titel sind der UEFA-Pokal 1988 und der DFB-Pokal 1993 gewesen.\n\n2002 ist Bayer in Meisterschaft, Pokal und Champions League jeweils Zweiter geworden. Der Spott „Vizekusen“ hat sich über 20 Jahre gehalten. Erst 2023/24 hat Xabi Alonso ihn beendet: Leverkusen ist als erster Verein der Bundesliga-Geschichte ungeschlagen Meister geworden und hat dazu den DFB-Pokal gewonnen.",
      "mentalitaet": "Ein klassischer Werksclub. Bayer hält den Profifußball zu 100 % und hat deshalb eine Ausnahme von der 50+1-Regel. Leverkusen ist eine kleine Stadt zwischen den Fußballhochburgen Köln und Düsseldorf. Die Fanbasis ist entsprechend kleiner, aber treu, und viele Fans haben einen familiären Bezug zum Werk.\n\nAktive Fanszene ist die Nordkurve. Für Gästefans aus Köln oder Gladbach ist der Spott über „Plastikklub“ und „Pillendreher“ Pflichtprogramm. Das Stadion ist kompakt und sehr familienfreundlich.",
      "wissenswertes": [
        "Das beleuchtete Bayer-Kreuz über dem Werk ist eines der größten Leuchtschilder der Welt und das Wahrzeichen der Stadt.",
        "Die BayArena hieß früher Ulrich-Haberland-Stadion, nach einem ehemaligen Bayer-Vorstandsvorsitzenden.",
        "Nach dem ungeschlagenen Meisterjahr 2024 hat sich „Neverkusen“ als neuer Spitzname eingebürgert."
      ],
      "rivalitaeten": [{"gegner": "1. FC Köln", "gegnerId": "1-fc-koeln", "bezeichnung": "Rheinisches Derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sc-freiburg",
      "name": "Sport-Club Freiburg e.V.",
      "kurzname": "SC Freiburg",
      "kuerzel": "SCF",
      "liga": "de-1",
      "land": "de",
      "farben": ["#e2001a", "#000000"],
      "logo": null,
      "gruendung": 1904,
      "adresse": "Schwarzwaldstraße 193, 79117 Freiburg im Breisgau",
      "web": "https://www.scfreiburg.com",
      "wiki": {"de": "SC Freiburg", "en": "SC Freiburg"},
      "stadion": {
        "name": "Europa-Park Stadion",
        "adresse": "Achim-Stocker-Straße 1, 79108 Freiburg im Breisgau",
        "lat": 48.0216,
        "lon": 7.8297,
        "kapazitaet": 34700,
        "bild": null
      },
      "eigentuemer": {
        "text": "SC Freiburg e.V.",
        "art": "Eingetragener Verein, Profiabteilung nicht ausgegliedert",
        "laender": ["de"]
      },
      "sponsor": {"name": "Lexware", "land": "de"},
      "trainer": {"name": "Julian Schuster", "land": "de"},
      "geschichte": "Der Sport-Club ist 1904 gegründet worden und hat lange im Schatten anderer südbadischer Vereine gestanden. Erst 1993 ist er unter Volker Finke in die Bundesliga aufgestiegen. Finke ist 16 Jahre lang Trainer geblieben und hat den Freiburger Stil geprägt: Kurzpassspiel, Ausbildung und Geduld.\n\nChristian Streich hat diese Linie von 2011 bis 2024 fortgesetzt und den SC dauerhaft in der Bundesliga etabliert. Unter ihm hat der SC in der Europa League gespielt und 2022 das Pokalfinale erreicht, das er erst im Elfmeterschießen gegen Leipzig verloren hat. 2021 ist der Verein vom Dreisamstadion ins neue Europa-Park Stadion umgezogen.",
      "mentalitaet": "Studentenstadt, grünes Milieu, Schwarzwald-Bodenständigkeit: Der SC gilt als einer der sympathischsten Vereine der Liga. Er wirtschaftet solide und ist bis heute ein eingetragener Verein ohne ausgegliederte Profiabteilung. Trainer und Verein beziehen auch gesellschaftlich Stellung. Streichs Pressekonferenzen gegen Rassismus und Rechtsextremismus sind bundesweit beachtet worden.\n\nDie Fanszene gilt als eher links-liberal, das Publikum als entspannt und sehr familienfreundlich. Krawall ist in Freiburg die große Ausnahme.",
      "wissenswertes": [
        "Das alte Dreisamstadion hatte als eines der ersten Stadien Deutschlands Solarzellen auf dem Dach.",
        "Volker Finke (16 Jahre) und Christian Streich (über 12 Jahre) gehören zu den Trainern mit den längsten Amtszeiten der Bundesliga-Geschichte.",
        "Ein großer Teil der Profis stammt aus der eigenen Freiburger Fußballschule."
      ],
      "rivalitaeten": [
        {"gegner": "Karlsruher SC", "gegnerId": "karlsruher-sc", "bezeichnung": "Badisches Derby"},
        {"gegner": "VfB Stuttgart", "gegnerId": "vfb-stuttgart", "bezeichnung": "Landesderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "eintracht-frankfurt",
      "name": "Eintracht Frankfurt e.V.",
      "kurzname": "Eintracht Frankfurt",
      "kuerzel": "SGE",
      "liga": "de-1",
      "land": "de",
      "farben": ["#e1000f", "#000000"],
      "logo": null,
      "gruendung": 1899,
      "adresse": "Mörfelder Landstraße 362, 60528 Frankfurt am Main",
      "web": "https://www.eintracht.de",
      "wiki": {"de": "Eintracht Frankfurt", "en": "Eintracht Frankfurt"},
      "stadion": {
        "name": "Deutsche Bank Park",
        "adresse": "Mörfelder Landstraße 362, 60528 Frankfurt am Main",
        "lat": 50.0686,
        "lon": 8.6455,
        "kapazitaet": 58000,
        "bild": null
      },
      "eigentuemer": {
        "text": "Eintracht Frankfurt Fußball AG mit Vereinsmehrheit",
        "art": "Ausgegliederte AG (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Indeed", "land": "us"},
      "trainer": {"name": "Adi Hütter", "land": "at"},
      "geschichte": "Die Wurzeln der Eintracht reichen bis zum 8. März 1899 zurück, als der Frankfurter Fußball-Club Victoria gegründet worden ist. 1959 ist die Eintracht Deutscher Meister geworden. Ein Jahr später hat sie im Europapokalfinale gegen Real Madrid gestanden, ein legendäres 3:7 vor über 127.000 Zuschauer*innen in Glasgow.\n\nEs folgen der UEFA-Pokal 1980 und fünf DFB-Pokalsiege (1974, 1975, 1981, 1988, 2018). Der größte Erfolg der jüngeren Zeit ist der Gewinn der Europa League 2022 im Finale gegen die Glasgow Rangers.",
      "mentalitaet": "Großstadtverein in der Banken- und Messestadt, mit einer bunt gemischten Anhängerschaft aus ganz Hessen. Die Fanszene in der Nordwestkurve ist eine der stimmungsgewaltigsten Deutschlands und für massenhafte Auswärtsfahrten bekannt. Beim Europa-League-Spiel 2022 in Barcelona waren rund 30.000 Frankfurter Fans im Camp Nou. Pyrotechnik und Strafen gehören allerdings auch zur Bilanz.\n\nPolitisch hat sich der Verein klar positioniert. Ex-Präsident Peter Fischer hat 2018 erklärt, dass die Wahl der AfD mit einer Mitgliedschaft in der Eintracht nicht vereinbar sei. In den 1920ern hatte die Eintracht viele jüdische Mitglieder und Förderer, an die der Verein heute aktiv erinnert.",
      "wissenswertes": [
        "Spitzname „Die Diva vom Main“: Die Eintracht ist für ihre launische Form berühmt-berüchtigt.",
        "Bei Heimspielen ist mit dem Steinadler „Attila“ ein echter Greifvogel als Maskottchen dabei.",
        "Der alte Spitzname „Schlappekicker“ stammt aus den 1920ern, als die jüdische Schuhfabrik J. & C. A. Schneider den Verein unterstützt hat."
      ],
      "rivalitaeten": [
        {
          "gegner": "Kickers Offenbach",
          "bezeichnung": "Main-Derby",
          "text": "Die klassische Rivalität am Main, durch die Ligenunterschiede selten geworden."
        },
        {"gegner": "SV Darmstadt 98", "gegnerId": "sv-darmstadt-98", "bezeichnung": "Hessenderby"},
        {
          "gegner": "1. FC Kaiserslautern",
          "gegnerId": "1-fc-kaiserslautern",
          "text": "Traditionelle Südwest-Rivalität."
        }
      ],
      "freundschaften": [{"gegner": "Atalanta Bergamo", "text": "Bekannte Freundschaft der Ultraszenen."}],
      "geprueft": false
    },
    {
      "id": "fc-augsburg",
      "name": "FC Augsburg 1907 e.V.",
      "kurzname": "FC Augsburg",
      "kuerzel": "FCA",
      "liga": "de-1",
      "land": "de",
      "farben": ["#ba3733", "#46714d"],
      "logo": null,
      "gruendung": 1907,
      "adresse": "Bürgermeister-Ulrich-Straße 90, 86199 Augsburg",
      "web": "https://www.fcaugsburg.de",
      "wiki": {"de": "FC Augsburg", "en": "FC Augsburg"},
      "stadion": {
        "name": "WWK Arena",
        "adresse": "Bürgermeister-Ulrich-Straße 90, 86199 Augsburg",
        "lat": 48.3233,
        "lon": 10.8862,
        "kapazitaet": 30660,
        "bild": null
      },
      "eigentuemer": {
        "text": "FC Augsburg 1907 GmbH & Co. KGaA; Kapitalmehrheit bei einer US-Investorengruppe, Stimmenmehrheit beim e.V.",
        "art": "KGaA mit Investor (50+1)",
        "laender": ["us"]
      },
      "sponsor": {"name": "WWK Versicherungen", "land": "de"},
      "trainer": {"name": "Manuel Baum", "land": "de"},
      "geschichte": "Der FCA ist 1969 aus der Fusion der Fußballer des BC Augsburg und des TSV Schwaben Augsburg entstanden. Das Gründungsjahr 1907 geht auf den BC Augsburg zurück, bei dem unter anderem Helmut Haller groß geworden ist, der später im WM-Finale 1966 getroffen hat.\n\nLange hat der FCA zwischen Regionalliga und 2. Liga gependelt, 2011 ist er erstmals in die Bundesliga aufgestiegen. Dort hält er sich seitdem ohne Unterbrechung, 2015/16 hat er sogar in der Europa League gespielt.",
      "mentalitaet": "Bodenständiger Verein aus Bayerisch-Schwaben mit „kleiner Verein, großes Herz“-Selbstbild. Man versteht sich bewusst nicht als Ableger des großen Nachbarn aus München. Die Fanszene in der Ulrich-Biesinger-Tribüne ist überschaubar, aber treu.\n\nDas Publikum ist familiär und regional verwurzelt. Seit 2021 hält eine US-Investorengruppe um David Blitzer die Kapitalmehrheit an der KGaA, die Stimmenmehrheit liegt nach 50+1 weiter beim Verein.",
      "wissenswertes": [
        "Die Stehplatztribüne ist nach Ulrich Biesinger benannt, Augsburgs Fußballidol und Weltmeister von 1954.",
        "Die WWK Arena ist 2009 eröffnet worden und hat das altehrwürdige Rosenaustadion abgelöst."
      ],
      "rivalitaeten": [],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "1-fsv-mainz-05",
      "name": "1. FSV Mainz 05 e.V.",
      "kurzname": "1. FSV Mainz 05",
      "kuerzel": "M05",
      "liga": "de-1",
      "land": "de",
      "farben": ["#c3141e", "#ffffff"],
      "logo": null,
      "gruendung": 1905,
      "adresse": "Isaac-Fulda-Allee 5, 55124 Mainz",
      "web": "https://www.mainz05.de",
      "wiki": {"de": "1. FSV Mainz 05", "en": "1. FSV Mainz 05"},
      "stadion": {
        "name": "Mewa Arena",
        "adresse": "Eugen-Salomon-Straße 1, 55128 Mainz",
        "lat": 49.9839,
        "lon": 8.2244,
        "kapazitaet": 33305,
        "bild": null
      },
      "eigentuemer": {"text": "1. FSV Mainz 05 e.V.", "art": "Eingetragener Verein", "laender": ["de"]},
      "sponsor": {"name": "Kömmerling", "land": "de"},
      "trainer": {"name": "Urs Fischer", "land": "ch"},
      "geschichte": "Gegründet am 16. März 1905, ist Mainz lange ein Zweitligist ohne große Ambitionen gewesen. Das hat sich mit Jürgen Klopp geändert: Er hat erst als Spieler am Bruchweg gekickt und 2001 direkt ins Traineramt gewechselt. 2004 hat er den Verein erstmals in die Bundesliga geführt.\n\nNach Klopp hat Thomas Tuchel die Mainzer zwischen 2009 und 2014 bis in die Europa League gebracht. Seither gilt Mainz als Talentschmiede für Trainer. 2011 ist der Verein vom engen Bruchwegstadion in die neue Arena am Europakreisel umgezogen.",
      "mentalitaet": "Fastnacht und Fußball gehören in Mainz zusammen. Der Verein pflegt ein fröhliches, selbstironisches Image und versteht sich als sympathischer Außenseiter. Die Fanszene im Q-Block ist engagiert, das Publikum ausgesprochen familienfreundlich.\n\nMainz ist bis heute ein eingetragener Verein ohne Ausgliederung und legt viel Wert auf seine Nähe zu den Mitgliedern. Gegen Diskriminierung bezieht der Verein immer wieder klar Stellung.",
      "wissenswertes": [
        "Jürgen Klopp ist 2001 praktisch über Nacht vom Spieler zum Cheftrainer geworden.",
        "Neben Klopp und Tuchel haben später auch Bo Svensson und andere von Mainz aus Karriere gemacht.",
        "Der Spitzname „Nullfünfer“ kommt vom Gründungsjahr 1905."
      ],
      "rivalitaeten": [
        {
          "gegner": "1. FC Kaiserslautern",
          "gegnerId": "1-fc-kaiserslautern",
          "bezeichnung": "Rheinland-Pfalz-Derby"
        },
        {
          "gegner": "Eintracht Frankfurt",
          "gegnerId": "eintracht-frankfurt",
          "bezeichnung": "Rhein-Main-Derby"
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "1-fc-union-berlin",
      "name": "1. FC Union Berlin e.V.",
      "kurzname": "1. FC Union Berlin",
      "kuerzel": "FCU",
      "liga": "de-1",
      "land": "de",
      "farben": ["#eb1923", "#ffffff"],
      "logo": null,
      "gruendung": 1966,
      "adresse": "Hämmerlingstraße 80–88, 12555 Berlin",
      "web": "https://www.fc-union-berlin.de",
      "wiki": {"de": "1. FC Union Berlin", "en": "1. FC Union Berlin"},
      "stadion": {
        "name": "Stadion An der Alten Försterei",
        "adresse": "An der Wuhlheide 263, 12555 Berlin",
        "lat": 52.4573,
        "lon": 13.5681,
        "kapazitaet": 22012,
        "bild": null
      },
      "eigentuemer": {"text": "1. FC Union Berlin e.V.", "art": "Eingetragener Verein", "laender": ["de"]},
      "sponsor": {"name": "Raisin", "land": "de"},
      "trainer": {"name": "Mauro Lustrinelli", "land": "ch"},
      "geschichte": "Die Wurzeln reichen bis 1906 zum SC Olympia Oberschöneweide zurück, unter dem heutigen Namen gibt es den Verein seit 1966. In der DDR ist Union als Gegenpol zum Stasi-nahen Serienmeister BFC Dynamo zum Sammelbecken für Menschen geworden, die sich mit dem System schwergetan haben. „Eisern Union“ ist auch eine Haltung gewesen. Größter Erfolg zu DDR-Zeiten ist der FDGB-Pokal 1968 gewesen.\n\n2019 ist Union in die Bundesliga aufgestiegen und hat sich dort festgesetzt. Höhepunkt ist die Teilnahme an der Champions League 2023/24 gewesen.",
      "mentalitaet": "Köpenicker Kiezverein mit Wurzeln im Arbeiter- und „Kleine-Leute“-Milieu des Berliner Südostens. Selbstbild als ehrlicher Underdog, große Nähe zwischen Verein und Fans. Stehplatzkultur ist zentral: Das Stadion hat einen sehr hohen Stehplatzanteil.\n\nDie Fanszene ist stimmungsstark und kritisch gegenüber der Kommerzialisierung. Gerade gegenüber RB Leipzig wird das deutlich. Das Publikum ist gemischt und an Spieltagen durchaus familientauglich.",
      "wissenswertes": [
        "2008/09 haben rund 2.000 freiwillige Fans das Stadion in zehntausenden Arbeitsstunden selbst mit umgebaut.",
        "„Bluten für Union“ (2004): Fans haben Blut gespendet und den Erlös dem klammen Verein gegeben, um die Lizenz zu sichern.",
        "Seit 2003 gibt es kurz vor Weihnachten das Weihnachtssingen im Stadion, inzwischen mit zehntausenden Teilnehmenden.",
        "Zur WM 2014 haben Fans ihre Sofas auf den Rasen gestellt: das „WM-Wohnzimmer“."
      ],
      "rivalitaeten": [
        {
          "gegner": "Hertha BSC",
          "gegnerId": "hertha-bsc",
          "bezeichnung": "Berliner Stadtderby",
          "text": "Ost gegen West. Vor der Wende gab es übrigens eine Freundschaft der Fanszenen."
        },
        {
          "gegner": "BFC Dynamo",
          "bezeichnung": "Historische Rivalität",
          "text": "Wurzelt in der DDR-Zeit, als der BFC der Klub der Staatssicherheit war."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "borussia-moenchengladbach",
      "name": "Borussia VfL 1900 Mönchengladbach e.V.",
      "kurzname": "Borussia Mönchengladbach",
      "kuerzel": "BMG",
      "liga": "de-1",
      "land": "de",
      "farben": ["#000000", "#00b140"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Hennes-Weisweiler-Allee 1, 41179 Mönchengladbach",
      "web": "https://www.borussia.de",
      "wiki": {"de": "Borussia Mönchengladbach", "en": "Borussia Mönchengladbach"},
      "stadion": {
        "name": "Borussia-Park",
        "adresse": "Hennes-Weisweiler-Allee 1, 41179 Mönchengladbach",
        "lat": 51.1746,
        "lon": 6.3855,
        "kapazitaet": 54042,
        "bild": null
      },
      "eigentuemer": {
        "text": "Borussia VfL 1900 Mönchengladbach GmbH, vollständig im Besitz des e.V.",
        "art": "Ausgegliederte GmbH (100 % Verein)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Reuter", "land": "de"},
      "trainer": {"name": "Alexander Blessin", "land": "de"},
      "geschichte": "Gegründet am 1. August 1900, hat Borussia ihre große Zeit in den 1970ern erlebt. Die „Fohlenelf“ von Hennes Weisweiler und später Udo Lattek ist 1970, 1971, 1975, 1976 und 1977 Meister geworden. Dazu kommen die UEFA-Pokalsiege 1975 und 1979 und das Landesmeisterfinale 1977 gegen Liverpool. Günter Netzer, Berti Vogts und Jupp Heynckes stehen für diese Zeit.\n\nNach dem Abstieg 1999 und schwierigen Jahren hat Lucien Favre den Verein ab 2011 zurück in die Champions League geführt. 2004 ist Borussia vom legendären Bökelberg in den Borussia-Park umgezogen.",
      "mentalitaet": "Der Verein des Niederrheins, stark geprägt von der Nostalgie an die wilde, offensive Fohlenzeit. Die Fans sind treu und leidensfähig, die Nordkurve ist eine der lautesten Stehplatztribünen der Liga.\n\nDas Publikum ist breit gemischt und familienfreundlich. Die Rivalität mit Köln gehört zum Selbstverständnis, ebenso die alte sportliche Feindschaft mit den Bayern aus den 70ern.",
      "wissenswertes": [
        "Im Pokalfinale 1973 gegen Köln hat sich Günter Netzer in der Verlängerung selbst eingewechselt und kurz darauf das Siegtor geschossen.",
        "Das 7:1 gegen Inter Mailand 1971 ist nach einem Büchsenwurf auf Inter-Stürmer Boninsegna annulliert worden.",
        "Nach drei Niederlagen zum Saisonstart 2026/27 hat Polanski gehen müssen, Nachfolger ist Alexander Blessin."
      ],
      "rivalitaeten": [
        {
          "gegner": "1. FC Köln",
          "gegnerId": "1-fc-koeln",
          "bezeichnung": "Rheinisches Derby",
          "text": "Eines der traditionsreichsten Derbys im Westen."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "hamburger-sv",
      "name": "Hamburger Sport-Verein e.V.",
      "kurzname": "Hamburger SV",
      "kuerzel": "HSV",
      "liga": "de-1",
      "land": "de",
      "farben": ["#0a3f86", "#ffffff"],
      "logo": null,
      "gruendung": 1887,
      "adresse": "Sylvesterallee 7, 22525 Hamburg",
      "web": "https://www.hsv.de",
      "wiki": {"de": "Hamburger SV", "en": "Hamburger SV"},
      "stadion": {
        "name": "Volksparkstadion",
        "adresse": "Sylvesterallee 7, 22525 Hamburg",
        "lat": 53.5872,
        "lon": 9.8986,
        "kapazitaet": 57000,
        "bild": null
      },
      "eigentuemer": {
        "text": "HSV Fußball AG: Mehrheit beim e.V., größter externer Anteilseigner ist Klaus-Michael Kühne",
        "art": "Ausgegliederte AG (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "HanseMerkur", "land": "de"},
      "trainer": {"name": "Merlin Polzin", "land": "de"},
      "geschichte": "Der HSV geht auf den 29. September 1887 zurück und ist damit einer der ältesten Vereine Deutschlands. Meister ist er 1923, 1928, 1960, 1979, 1982 und 1983 geworden, dazu kommen der Europapokal der Pokalsieger 1977 und der Landesmeisterpokal 1983 durch Felix Magaths Tor gegen Juventus. Die Vereinslegende ist Uwe Seeler.\n\nAls einziges Gründungsmitglied hat der HSV bis 2018 ununterbrochen in der Bundesliga gespielt. Dann ist er doch abgestiegen und hat danach sechs zähe Jahre in der 2. Liga verbracht. 2025 ist ihm der Wiederaufstieg gelungen.",
      "mentalitaet": "Hanseatisch-bürgerlicher Großstadtverein mit riesiger, sehr leidensfähiger Anhängerschaft. Auch in den Zweitligajahren ist das Volksparkstadion fast immer ausverkauft gewesen. Die aktive Szene steht in der Nordtribüne.\n\nDie Fans haben ein gespaltenes Verhältnis zu Investor Klaus-Michael Kühne, der seit Jahren viel Geld gibt und gleichzeitig viel mitreden will. Das Stadion ist familientauglich, nur die Derbys gegen St. Pauli und Werder sind entsprechend aufgeladen.",
      "wissenswertes": [
        "Die Stadionuhr hat bis zum Abstieg 2018 die ununterbrochene Bundesligazugehörigkeit gezählt.",
        "Vor dem Stadion steht eine riesige Bronzeskulptur von Uwe Seelers rechtem Fuß.",
        "Maskottchen ist der Dinosaurier Hermann, in Anlehnung an den Spitznamen „Dino“."
      ],
      "rivalitaeten": [
        {"gegner": "SV Werder Bremen", "gegnerId": "sv-werder-bremen", "bezeichnung": "Nordderby"},
        {"gegner": "FC St. Pauli", "gegnerId": "fc-st-pauli", "bezeichnung": "Hamburger Stadtderby"}
      ],
      "freundschaften": [
        {
          "gegner": "Hannover 96",
          "gegnerId": "hannover-96",
          "text": "Gilt traditionell als gutes Verhältnis der Fanszenen."
        }
      ],
      "geprueft": false
    },
    {
      "id": "1-fc-koeln",
      "name": "1. FC Köln 01/07 e.V.",
      "kurzname": "1. FC Köln",
      "kuerzel": "KOE",
      "liga": "de-1",
      "land": "de",
      "farben": ["#ed1c24", "#ffffff"],
      "logo": null,
      "gruendung": 1948,
      "adresse": "Franz-Kremer-Allee 1–3, 50937 Köln",
      "web": "https://fc.de",
      "wiki": {"de": "1. FC Köln", "en": "1. FC Köln"},
      "stadion": {
        "name": "RheinEnergieStadion",
        "adresse": "Aachener Straße 999, 50933 Köln",
        "lat": 50.9336,
        "lon": 6.8751,
        "kapazitaet": 50000,
        "bild": null
      },
      "eigentuemer": {
        "text": "1. FC Köln GmbH & Co. KGaA, Mehrheit beim e.V.",
        "art": "Ausgegliederte KGaA (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "REWE", "land": "de"},
      "trainer": {"name": "René Wagner", "land": "de"},
      "geschichte": "Der 1. FC Köln ist am 13. Februar 1948 aus der Fusion von Kölner BC 01 und SpVgg Sülz 07 entstanden. Präsident Franz Kremer hat ihn mit großer Weitsicht professionalisiert. 1962 ist der FC Meister geworden und 1964 der erste Meister der neuen Bundesliga.\n\nDas Double 1978 ist der letzte große Titel geblieben. Seit den 1990ern pendelt der FC immer wieder zwischen erster und zweiter Liga. 2025 ist er zuletzt wieder aufgestiegen. Prägende Spieler waren Wolfgang Overath, Toni Schumacher, Pierre Littbarski und Lukas Podolski.",
      "mentalitaet": "Kölsches Lebensgefühl in Reinform: emotional, karnevalistisch, mit Hang zur Selbstüberschätzung und großer Verbundenheit zur Stadt. Der FC ist für viele Kölner*innen weniger Verein als Lebenseinstellung, die Vereinshymne „Mer stonn zo dir FC Kölle“ singt das ganze Stadion.\n\nDie Südkurve ist eine der größten aktiven Szenen Deutschlands. Verein und Kurve beziehen immer wieder deutlich Position gegen Rassismus und Rechtsextremismus. Das Publikum ist sehr gemischt und familienfreundlich.",
      "wissenswertes": [
        "Maskottchen ist der lebende Geißbock Hennes, der Name geht auf Trainerlegende Hennes Weisweiler zurück.",
        "Die Vereinshymne stammt von den Höhnern.",
        "Spitzname „Die Geißböcke“, das Vereinsgelände heißt Geißbockheim."
      ],
      "rivalitaeten": [
        {
          "gegner": "Borussia Mönchengladbach",
          "gegnerId": "borussia-moenchengladbach",
          "bezeichnung": "Rheinisches Derby"
        },
        {"gegner": "Fortuna Düsseldorf", "bezeichnung": "Rheinisches Derby"},
        {
          "gegner": "Bayer 04 Leverkusen",
          "gegnerId": "bayer-04-leverkusen",
          "bezeichnung": "Rheinisches Derby"
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sv-werder-bremen",
      "name": "SV Werder Bremen e.V.",
      "kurzname": "SV Werder Bremen",
      "kuerzel": "SVW",
      "liga": "de-1",
      "land": "de",
      "farben": ["#1d9053", "#ffffff"],
      "logo": null,
      "gruendung": 1899,
      "adresse": "Franz-Böhmert-Straße 1c, 28205 Bremen",
      "web": "https://www.werder.de",
      "wiki": {"de": "SV Werder Bremen", "en": "SV Werder Bremen"},
      "stadion": {
        "name": "Weserstadion",
        "adresse": "Franz-Böhmert-Straße 1, 28205 Bremen",
        "lat": 53.0664,
        "lon": 8.8376,
        "kapazitaet": 42100,
        "bild": null
      },
      "eigentuemer": {
        "text": "SV Werder Bremen GmbH & Co. KGaA, Mehrheit beim e.V., Minderheitsanteile bei regionalen Unternehmen",
        "art": "Ausgegliederte KGaA (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Matthäi", "land": "de"},
      "trainer": {"name": "Daniel Thioune", "land": "de"},
      "geschichte": "Am 4. Februar 1899 haben Schüler den „Fußballverein Werder“ gegründet, benannt nach dem Flusswerder an der Weser, auf dem sie gespielt haben. Meister ist Werder 1965, 1988, 1993 und 2004 geworden, 2004 sogar mit dem Double.\n\nUnter Otto Rehhagel (1981–1995) ist Werder zur Spitzenmannschaft geworden und hat 1992 den Europapokal der Pokalsieger gewonnen. Thomas Schaaf hat 2004 das Double geholt. Nach dem Abstieg 2021 ist der Verein direkt wieder aufgestiegen.",
      "mentalitaet": "Hanseatisch, bodenständig und mit großem Rückhalt in der ganzen Region zwischen Weser und Ems. Werder pflegt ein familiäres, eher bescheidenes Image.\n\nDie Ostkurve gilt als politisch engagiert und antirassistisch, und auch die Vereinsführung hat sich wiederholt klar gegen Rechtsextremismus positioniert. Präsident Hubertus Hess-Grunewald hat etwa eine AfD-Mitgliedschaft für unvereinbar mit den Vereinswerten erklärt. Das Weserstadion ist sehr familienfreundlich.",
      "wissenswertes": [
        "„Wunder von der Weser“ heißen die legendären Europapokal-Aufholjagden der 1980er, etwa das 6:2 gegen Spartak Moskau 1987 nach einem 1:4 im Hinspiel.",
        "Die Fassade des Weserstadions ist mit Solarmodulen verkleidet.",
        "Werder ist einer der wenigen Vereine, die fast durchgehend Bundesliga gespielt haben: Abgestiegen ist er nur 1980 und 2021."
      ],
      "rivalitaeten": [{"gegner": "Hamburger SV", "gegnerId": "hamburger-sv", "bezeichnung": "Nordderby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "fc-schalke-04",
      "name": "Fußballclub Gelsenkirchen-Schalke 04 e.V.",
      "kurzname": "FC Schalke 04",
      "kuerzel": "S04",
      "liga": "de-1",
      "land": "de",
      "farben": ["#004d9d", "#ffffff"],
      "logo": null,
      "gruendung": 1904,
      "adresse": "Ernst-Kuzorra-Weg 1, 45891 Gelsenkirchen",
      "web": "https://schalke04.de",
      "wiki": {"de": "FC Schalke 04", "en": "FC Schalke 04"},
      "stadion": {
        "name": "Veltins-Arena",
        "adresse": "Rudi-Assauer-Platz 1, 45891 Gelsenkirchen",
        "lat": 51.5546,
        "lon": 7.0676,
        "kapazitaet": 62271,
        "bild": null
      },
      "eigentuemer": {
        "text": "FC Schalke 04 e.V.",
        "art": "Eingetragener Verein, Mitglieder haben eine Ausgliederung bislang abgelehnt",
        "laender": ["de"]
      },
      "sponsor": {"name": "Beumer Group", "land": "de"},
      "trainer": {"name": "Miron Muslić", "land": "at"},
      "geschichte": "Gegründet am 4. Mai 1904 von Jugendlichen im Bergarbeiterstadtteil Schalke, zunächst als Westfalia Schalke. In den 1930ern und 40ern ist Schalke die prägende Mannschaft Deutschlands gewesen: Sechs Meisterschaften zwischen 1934 und 1942 hat der „Schalker Kreisel“ um Ernst Kuzorra und Fritz Szepan geholt, dazu kommt der Titel 1958. Die Rolle des Vereins im Nationalsozialismus hat er inzwischen wissenschaftlich aufarbeiten lassen.\n\nDazu kommen fünf DFB-Pokale (1937, 1972, 2001, 2002, 2011) und der UEFA-Pokal 1997 durch die „Eurofighter“. Legendär ist die „Meisterschaft der Herzen“ 2001: Vier Minuten lang ist Schalke Meister gewesen, dann hat Bayern in Hamburg noch ausgeglichen. Nach den Abstiegen 2021 und 2023 ist Schalke 2026 in die Bundesliga zurückgekehrt.",
      "mentalitaet": "Der Archetyp des Arbeitervereins: Bergbau, Zeche, Malocher-Ethos. Die Spieler heißen „Knappen“, gegrüßt wird mit „Glück auf“, und vor dem Spiel wird das Steigerlied gesungen. Die Identifikation mit dem Ruhrgebiet ist enorm. Schalke gehört zu den mitgliederstärksten Vereinen der Welt.\n\nDie Nordkurve mit den Ultras Gelsenkirchen ist sehr stimmungsstark. Verein und Fanprojekte engagieren sich seit Jahren sichtbar gegen Rassismus und Diskriminierung. Das Publikum in der Arena ist breit gemischt und in weiten Teilen familientauglich, beim Revierderby kocht die Stimmung aber regelmäßig über.",
      "wissenswertes": [
        "In der Veltins-Arena gibt es eine ökumenische Kapelle, und der Spielertunnel ist einem Bergwerksstollen nachempfunden.",
        "Unter der Arena verläuft eine kilometerlange Bierleitung, die alle Ausschankstellen versorgt.",
        "Vorgängerstadien waren die Glückauf-Kampfbahn und das Parkstadion.",
        "Weil das Vereinsgelände im Stadtteil Schalke liegt, nennen sich Fans und Spieler auch einfach „die Schalker“, ganz gleich ob sie aus Gelsenkirchen kommen oder nicht."
      ],
      "rivalitaeten": [
        {
          "gegner": "Borussia Dortmund",
          "gegnerId": "borussia-dortmund",
          "bezeichnung": "Revierderby",
          "text": "Die Mutter aller Derbys im Ruhrgebiet."
        },
        {"gegner": "VfL Bochum", "gegnerId": "vfl-bochum", "bezeichnung": "Revierderby"}
      ],
      "freundschaften": [
        {
          "gegner": "1. FC Nürnberg",
          "gegnerId": "1-fc-nuernberg",
          "text": "Eine der ältesten und bekanntesten Fanfreundschaften Deutschlands, bei gemeinsamen Spielen oft mit gemischten Fangesängen."
        },
        {
          "gegner": "FC Twente",
          "gegnerId": "fc-twente",
          "text": "Grenzüberschreitende Freundschaft mit den Fans aus Enschede."
        }
      ],
      "geprueft": false
    },
    {
      "id": "sv-elversberg",
      "name": "SV 07 Elversberg e.V.",
      "kurzname": "SV Elversberg",
      "kuerzel": "SVE",
      "liga": "de-1",
      "land": "de",
      "farben": ["#000000", "#ffffff"],
      "logo": null,
      "gruendung": 1907,
      "adresse": "Spiesen-Elversberg",
      "web": "https://www.sv07elversberg.de",
      "wiki": {"de": "SV 07 Elversberg", "en": "SV Elversberg"},
      "stadion": {
        "name": "Ursapharm-Arena an der Kaiserlinde",
        "adresse": "66583 Spiesen-Elversberg",
        "lat": 49.3164,
        "lon": 7.1188,
        "kapazitaet": 10000,
        "bild": null
      },
      "eigentuemer": {
        "text": "SV 07 Elversberg; eng verbunden mit dem Pharmaunternehmen Ursapharm",
        "art": null,
        "laender": ["de"]
      },
      "sponsor": {"name": "Ursapharm", "land": "de"},
      "trainer": {"name": "Vincent Wagner", "land": "de"},
      "geschichte": "Die SV 07 stammt aus Spiesen-Elversberg, einer Gemeinde mit gut 13.000 Einwohner*innen im Saarland. Jahrzehntelang hat sie im Amateurfußball gespielt, getragen von der Familie Holzer und ihrem Pharmaunternehmen Ursapharm.\n\nDann ist es steil nach oben gegangen: 2022 in die 3. Liga, 2023 direkt in die 2. Liga. 2025 ist der Verein noch in der Relegation an Heidenheim gescheitert, 2026 hat es dann mit dem Aufstieg in die Bundesliga geklappt. 2026/27 ist die erste Erstligasaison der Vereinsgeschichte.",
      "mentalitaet": "Dorfverein mit Mäzen, ehrgeizig, aber ohne großen Glamour. Die Fanszene ist klein und familiär, im Saarland ist der große 1. FC Saarbrücken weiterhin die Nummer eins der Herzen. Umso größer ist der Stolz der Region auf den Bundesligisten aus der Provinz.\n\nDas Stadion an der Kaiserlinde ist klein, das Publikum entspannt und sehr familienfreundlich.",
      "wissenswertes": [
        "Spiesen-Elversberg ist eine der kleinsten Gemeinden, die je einen Bundesligaverein gestellt hat.",
        "Ursapharm unterstützt den Verein schon seit 1990."
      ],
      "rivalitaeten": [{"gegner": "1. FC Saarbrücken", "bezeichnung": "Saarland-Derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sc-paderborn-07",
      "name": "SC Paderborn 07 e.V.",
      "kurzname": "SC Paderborn 07",
      "kuerzel": "SCP",
      "liga": "de-1",
      "land": "de",
      "farben": ["#005ba1", "#000000"],
      "logo": null,
      "gruendung": 1907,
      "adresse": "Paderborner Straße 89, 33104 Paderborn",
      "web": "https://www.scp07.de",
      "wiki": {"de": "SC Paderborn 07", "en": "SC Paderborn 07"},
      "stadion": {
        "name": "Home Deluxe Arena",
        "adresse": "Paderborner Straße 89, 33104 Paderborn",
        "lat": 51.7311,
        "lon": 8.7105,
        "kapazitaet": 15000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Hedenkamp", "land": "de"},
      "trainer": {"name": "Ralf Kettemann", "land": "de"},
      "geschichte": "Der heutige SC Paderborn 07 ist 1985 aus der Fusion des 1. FC Paderborn mit dem TuS Schloß Neuhaus hervorgegangen, das Gründungsjahr 1907 stammt aus der Vereinstradition. Seinen heutigen Namen trägt er seit 1997.\n\n2014 ist Paderborn erstmals in die Bundesliga aufgestiegen und nach vier Spieltagen sogar Tabellenführer gewesen. Danach ist es dreimal in Folge abwärts gegangen, nur ein Lizenzentzug bei 1860 München hat den Absturz in die Regionalliga verhindert. 2019 folgte die zweite Bundesligasaison, 2026 hat Paderborn sich über die Relegation gegen Wolfsburg zum dritten Mal hochgekämpft.",
      "mentalitaet": "Ostwestfälischer Verein aus der katholisch geprägten Bischofsstadt: ruhig, bodenständig, mit kleinem Budget und viel Kreativität im Kader. Die Fanszene ist überschaubar, das Stadion kompakt und sehr familienfreundlich.\n\nDie Rivalität mit Arminia Bielefeld sorgt für das wichtigste Spiel der Saison, das OWL-Derby.",
      "wissenswertes": [
        "Moritz Stoppelkamp hat 2014 gegen Hannover aus 82 Metern getroffen, damals das weiteste Tor der Bundesliga-Geschichte.",
        "Paderborn ist innerhalb weniger Jahre zweimal von der Bundesliga in die 3. Liga durchgerauscht und zweimal wieder zurückgekehrt."
      ],
      "rivalitaeten": [{"gegner": "Arminia Bielefeld", "gegnerId": "arminia-bielefeld", "bezeichnung": "OWL-Derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "hertha-bsc",
      "name": "Hertha, Berliner Sport-Club (Hertha BSC) e.V.",
      "kurzname": "Hertha BSC",
      "kuerzel": "BSC",
      "liga": "de-2",
      "land": "de",
      "farben": ["#005ca9", "#ffffff"],
      "logo": null,
      "gruendung": 1892,
      "adresse": "Hanns-Braun-Straße, Friesenhaus 2, 14053 Berlin",
      "web": "https://www.herthabsc.com",
      "wiki": {"de": "Hertha BSC", "en": "Hertha BSC"},
      "stadion": {
        "name": "Olympiastadion",
        "adresse": "Olympischer Platz 3, 14053 Berlin",
        "lat": 52.5147,
        "lon": 13.2395,
        "kapazitaet": 74475,
        "bild": null
      },
      "eigentuemer": {
        "text": "Hertha BSC GmbH & Co. KGaA; die Kapitalmehrheit hat nach der Pleite von 777 Partners der US-Finanzierer A-CAP übernommen. Ein Rückkauf durch ein Konsortium von Hertha-Fans ist im Gespräch (Stand unklar, bitte prüfen).",
        "art": "KGaA mit Investor (50+1)",
        "laender": ["us"]
      },
      "sponsor": {"name": "Sparda-Bank Berlin", "land": "de"},
      "trainer": {"name": "Stefan Leitl", "land": "de"},
      "geschichte": "Gegründet am 25. Juli 1892 von vier Jugendlichen, die den Verein nach einem Ausflugsdampfer mit blau-weißem Schornstein benannt haben. 1930 und 1931 ist Hertha Deutscher Meister geworden. Als Gründungsmitglied der Bundesliga hat der Verein 1965 wegen unerlaubter Gehaltszahlungen die Lizenz verloren, und auch in den Bundesliga-Skandal 1971 sind Hertha-Spieler verwickelt gewesen.\n\nIn den 2000ern hat Hertha regelmäßig international gespielt. Danach sind die Investorenjahre mit Lars Windhorst und 777 Partners gefolgt, die finanziell im Chaos geendet haben. Seit dem Abstieg 2023 spielt Hertha in der 2. Liga und setzt auf den „Berliner Weg“ mit eigenen Talenten.",
      "mentalitaet": "Die „Alte Dame“ ist der West-Berliner Traditionsverein, in einer Stadt, in der Fußball lange nicht die erste Geige gespielt hat. Das riesige Olympiastadion ist selten voll, die Ostkurve aber laut und treu. Die Fanszene ist ausgesprochen leidensfähig.\n\nPrägend in jüngerer Zeit ist Kay Bernstein gewesen: Der frühere Ultra ist 2022 Präsident geworden und hat für einen bodenständigeren, fannahen Kurs gestanden. Im Januar 2024 ist er überraschend gestorben. Im Olympiastadion sitzt viel Familienpublikum, auch weil es fast immer Karten gibt.",
      "wissenswertes": [
        "Vor der Wende hat es eine Freundschaft zwischen Hertha- und Union-Fans gegeben. West-Berliner Herthaner sind zu Union-Spielen in den Osten gefahren.",
        "Das Olympiastadion ist für die Spiele 1936 gebaut worden und Austragungsort des DFB-Pokalfinales.",
        "Den Spitznamen „Big City Club“ hat Investor Windhorst geprägt. Heute wird er meist ironisch benützt."
      ],
      "rivalitaeten": [
        {
          "gegner": "1. FC Union Berlin",
          "gegnerId": "1-fc-union-berlin",
          "bezeichnung": "Berliner Stadtderby"
        }
      ],
      "freundschaften": [
        {
          "gegner": "Karlsruher SC",
          "gegnerId": "karlsruher-sc",
          "text": "Langjährige, bekannte Fanfreundschaft."
        }
      ],
      "geprueft": false
    },
    {
      "id": "arminia-bielefeld",
      "name": "DSC Arminia Bielefeld e.V.",
      "kurzname": "Arminia Bielefeld",
      "kuerzel": "DSC",
      "liga": "de-2",
      "land": "de",
      "farben": ["#004e95", "#000000"],
      "logo": null,
      "gruendung": 1905,
      "adresse": "Melanchthonstraße 31a, 33615 Bielefeld",
      "web": "https://www.arminia.de",
      "wiki": {"de": "Arminia Bielefeld", "en": "Arminia Bielefeld"},
      "stadion": {
        "name": "SchücoArena",
        "adresse": "Melanchthonstraße 31a, 33615 Bielefeld",
        "lat": 52.0315,
        "lon": 8.5168,
        "kapazitaet": 26515,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Schüco", "land": "de"},
      "trainer": {"name": "Oliver Kirch", "land": "de"},
      "geschichte": "Gegründet am 3. Mai 1905 und benannt nach dem Cheruskerfürsten Arminius. Arminia ist ein klassischer Fahrstuhlverein: insgesamt viele Bundesligajahre, aber selten länger am Stück. Auch Bielefeld war in den Bundesliga-Skandal 1971 verwickelt.\n\nNach dem Absturz bis in die 3. Liga hat Arminia 2025 eine Märchensaison gespielt: Als Drittligist hat sie im DFB-Pokal unter anderem Union, Freiburg, Bremen und Titelverteidiger Leverkusen ausgeschaltet. Im Finale hat sie dann gegen den VfB Stuttgart verloren. Im gleichen Jahr ist sie in die 2. Liga zurückgekehrt.",
      "mentalitaet": "Ostwestfälisch bodenständig, nicht laut, aber zäh. Die SchücoArena heißt bei allen nur „Alm“ und ist ein reines Fußballstadion mitten in der Stadt mit steilen Tribünen. Die Südtribüne ist für ihre Stimmung bekannt.\n\nDie Fans sind treu und selbstironisch, wie es die Region verlangt. Das Stadion ist familienfreundlich.",
      "wissenswertes": [
        "Die „Bielefeld-Verschwörung“ ist ein Internet-Witz aus den 1990ern, nach dem es Bielefeld gar nicht gibt. Der Verein spielt gern mit dem Gag.",
        "Mit dem Pokalfinale 2025 gehört Arminia zu den ganz wenigen Drittligisten, die es je bis ins Endspiel geschafft haben."
      ],
      "rivalitaeten": [
        {"gegner": "SC Paderborn 07", "gegnerId": "sc-paderborn-07", "bezeichnung": "OWL-Derby"},
        {"gegner": "Preußen Münster", "bezeichnung": "Westfalen-Derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "vfl-bochum",
      "name": "VfL Bochum 1848 Fußballgemeinschaft e.V.",
      "kurzname": "VfL Bochum",
      "kuerzel": "BOC",
      "liga": "de-2",
      "land": "de",
      "farben": ["#005ca9", "#ffffff"],
      "logo": null,
      "gruendung": 1848,
      "adresse": "Castroper Straße 145, 44791 Bochum",
      "web": "https://www.vfl-bochum.de",
      "wiki": {"de": "VfL Bochum", "en": "VfL Bochum"},
      "stadion": {
        "name": "Vonovia Ruhrstadion",
        "adresse": "Castroper Straße 145, 44791 Bochum",
        "lat": 51.49,
        "lon": 7.2365,
        "kapazitaet": 26000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Vonovia", "land": "de"},
      "trainer": {"name": "Uwe Rösler", "land": "de"},
      "geschichte": "Der VfL beruft sich auf einen Turnverein von 1848 und ist damit nominell einer der ältesten Vereine Deutschlands. Die Fußballer sind 1938 aus einer Fusion hervorgegangen. Von 1971 bis 1993 hat Bochum ununterbrochen in der Bundesliga gespielt und sich den Spitznamen „Die Unabsteigbaren“ verdient.\n\nSeitdem pendelt der VfL zwischen erster und zweiter Liga, 1997 und 2004 hat er sogar im UEFA-Pokal gespielt. Nach drei Bundesligajahren ist er 2025 wieder abgestiegen.",
      "mentalitaet": "Ruhrgebiet pur, aber im Schatten der großen Nachbarn Dortmund und Schalke. Der VfL ist die „graue Maus“, die sich ihr Underdog-Image zur Tugend gemacht hat: kämpferisch, ehrlich, unprätentiös. Das Ruhrstadion liegt mitten in der Stadt und ist eng und laut, wie es sich für ein Stadion im Pott gehört.\n\nDie Ostkurve ist stimmungsstark, das Publikum gemischt und familienfreundlich.",
      "wissenswertes": [
        "Vor jedem Heimspiel läuft Herbert Grönemeyers „Bochum“, und das ganze Stadion singt mit.",
        "Das Ruhrstadion liegt mitten in der Stadt an der Castroper Straße, ganz klassisch ohne Laufbahn."
      ],
      "rivalitaeten": [
        {"gegner": "FC Schalke 04", "gegnerId": "fc-schalke-04", "bezeichnung": "Revierderby"},
        {"gegner": "Borussia Dortmund", "gegnerId": "borussia-dortmund", "bezeichnung": "Revierderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "eintracht-braunschweig",
      "name": "Braunschweiger Turn- und Sportverein Eintracht von 1895 e.V.",
      "kurzname": "Eintracht Braunschweig",
      "kuerzel": "EBS",
      "liga": "de-2",
      "land": "de",
      "farben": ["#ffd400", "#004e95"],
      "logo": null,
      "gruendung": 1895,
      "adresse": "Hamburger Straße 210, 38112 Braunschweig",
      "web": "https://www.eintracht.com",
      "wiki": {"de": "Eintracht Braunschweig", "en": "Eintracht Braunschweig"},
      "stadion": {
        "name": "Eintracht-Stadion",
        "adresse": "Hamburger Straße 210, 38112 Braunschweig",
        "lat": 52.29,
        "lon": 10.5214,
        "kapazitaet": 23325,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Brawo Group", "land": "de"},
      "trainer": {"name": "Lars Kornetka", "land": "de"},
      "geschichte": "Gegründet am 15. Dezember 1895, ist die Eintracht 1963 Gründungsmitglied der Bundesliga gewesen. 1967 ist sie überraschend Deutscher Meister geworden, mit der damals besten Abwehr der Liga.\n\nNach dem Abstieg 1985 sind schwere Jahre bis in die Drittklassigkeit gefolgt. 2013/14 hat die Eintracht noch einmal eine Bundesligasaison gespielt. Seitdem wechselt sie zwischen 2. und 3. Liga.",
      "mentalitaet": "Traditionsverein mit großer Bindung an die Stadt und das Braunschweiger Land. Der Löwe aus dem Stadtwappen ist das Symbol. Die Südkurve ist laut und zahlreich, der Zuschauerzuspruch auch in der 2. Liga hoch.\n\nDas Niedersachsenderby gegen Hannover gehört zu den hitzigsten Duellen im deutschen Fußball und findet unter großem Polizeiaufgebot statt.",
      "wissenswertes": [
        "1973 ist die Eintracht der erste Bundesligist mit Trikotwerbung gewesen: Jägermeister hat den Hirschkopf aufs Trikot gebracht und das Vereinswappen dafür ersetzt.",
        "Die Meistermannschaft von 1967 ist bis heute Teil der Vereinsidentität."
      ],
      "rivalitaeten": [
        {"gegner": "Hannover 96", "gegnerId": "hannover-96", "bezeichnung": "Niedersachsenderby"},
        {"gegner": "VfL Wolfsburg", "gegnerId": "vfl-wolfsburg", "bezeichnung": "Niedersachsenderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "energie-cottbus",
      "name": "FC Energie Cottbus e.V.",
      "kurzname": "Energie Cottbus",
      "kuerzel": "FCE",
      "liga": "de-2",
      "land": "de",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1966,
      "adresse": "Am Eliaspark 1, 03042 Cottbus",
      "web": "https://www.fcenergie.de",
      "wiki": {"de": "FC Energie Cottbus", "en": "FC Energie Cottbus"},
      "stadion": {
        "name": "LEAG Energie Stadion",
        "adresse": "Am Eliaspark 1, 03042 Cottbus",
        "lat": 51.7514,
        "lon": 14.3462,
        "kapazitaet": 22528,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "LEAG", "land": "de"},
      "trainer": {"name": "Claus-Dieter Wollitz", "land": "de"},
      "geschichte": "Der Verein ist 1966 als BSG Energie Cottbus gegründet worden, der Betriebssportgemeinschaft der Braunkohle- und Energiewirtschaft der Lausitz. Zu DDR-Zeiten ist Energie eher eine Randerscheinung gewesen. Aufmerksamkeit hat der Verein erst 1997 bekommen, als er als Regionalligist bis ins DFB-Pokalfinale gestürmt ist. Dort hat er gegen den VfB Stuttgart verloren.\n\nVon 2000 bis 2003 und 2006 bis 2009 hat Cottbus in der Bundesliga gespielt. Danach ist es bis in die Regionalliga abwärts gegangen, 2026 ist der Verein wieder in die 2. Liga aufgestiegen. Trainer Claus-Dieter „Pele“ Wollitz verkörpert den Verein wie kaum ein anderer.",
      "mentalitaet": "Lausitzer Identität, Kohle und Strukturwandel: Energie ist für die Region ein wichtiger Stolzfaktor. Der Verein pflegt ein Underdog-Image als „gallisches Dorf“ im Osten.\n\nDie Fanszene hat lange ein ernstes Problem mit Rechtsextremismus gehabt. Die Ultragruppe „Inferno Cottbus“ hat sich 2017 aufgelöst, nachdem sie ins Visier der Behörden geraten war. Verein und Fanprojekt haben seither Programme gegen Rechts aufgelegt. Das Stadion der Freundschaft ist bei normalen Spielen familientauglich.",
      "wissenswertes": [
        "Am 6. April 2001 hat Cottbus als erster Bundesligist mit elf ausländischen Spielern in der Startelf gespielt.",
        "Das Stadion heißt im Volksmund weiterhin „Stadion der Freundschaft“."
      ],
      "rivalitaeten": [{"gegner": "Dynamo Dresden", "gegnerId": "dynamo-dresden", "bezeichnung": "Ost-Derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sv-darmstadt-98",
      "name": "SV Darmstadt 1898 e.V.",
      "kurzname": "SV Darmstadt 98",
      "kuerzel": "D98",
      "liga": "de-2",
      "land": "de",
      "farben": ["#004e9e", "#ffffff"],
      "logo": null,
      "gruendung": 1898,
      "adresse": "Nieder-Ramstädter Straße 170, 64285 Darmstadt",
      "web": "https://www.sv98.de",
      "wiki": {"de": "SV Darmstadt 98", "en": "SV Darmstadt 98"},
      "stadion": {
        "name": "Merck-Stadion am Böllenfalltor",
        "adresse": "Nieder-Ramstädter Straße 170, 64285 Darmstadt",
        "lat": 49.8578,
        "lon": 8.6726,
        "kapazitaet": 17810,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Haix", "land": "de"},
      "trainer": {"name": "Florian Kohfeldt", "land": "de"},
      "geschichte": "Gegründet am 22. Mai 1898. Die „Lilien“ haben ihre Bundesligajahre 1978/79 und 1981/82 gehabt, danach lange in der 2. Liga und tiefer gespielt. Zwischendurch hat der Verein kurz vor dem Ende gestanden.\n\nDann ist das Wunder unter Trainer Dirk Schuster gekommen: 2014 nach einer dramatischen Relegation in Bielefeld in die 2. Liga, 2015 direkt in die Bundesliga, wo die Lilien sich zwei Jahre gehalten haben. 2023/24 hat Darmstadt erneut eine Bundesligasaison gespielt.",
      "mentalitaet": "Underdog aus der Wissenschafts- und Studentenstadt Darmstadt, mit großer Sympathie in der Region. Der Verein ist bescheiden aufgestellt, und das Stadion am Böllenfalltor ist eng, laut und herrlich altmodisch.\n\nDie Fans sind leidenschaftlich und treu, die Stimmung familiär. Gegen Frankfurt und Offenbach geht es ums Prestige in Hessen.",
      "wissenswertes": [
        "Der Spitzname „Lilien“ kommt von der Lilie im Darmstädter Stadtwappen.",
        "Das „Bölle“ ist inzwischen modernisiert, hat aber viel von seinem alten Charme behalten."
      ],
      "rivalitaeten": [
        {"gegner": "Eintracht Frankfurt", "gegnerId": "eintracht-frankfurt", "bezeichnung": "Hessenderby"},
        {"gegner": "Kickers Offenbach", "bezeichnung": "Hessenderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "dynamo-dresden",
      "name": "SG Dynamo Dresden e.V.",
      "kurzname": "Dynamo Dresden",
      "kuerzel": "SGD",
      "liga": "de-2",
      "land": "de",
      "farben": ["#fdd700", "#000000"],
      "logo": null,
      "gruendung": 1953,
      "adresse": "Lennéstraße 12, 01069 Dresden",
      "web": "https://www.dynamo-dresden.de",
      "wiki": {"de": "SG Dynamo Dresden", "en": "Dynamo Dresden"},
      "stadion": {
        "name": "Rudolf-Harbig-Stadion",
        "adresse": "Lennéstraße 12, 01069 Dresden",
        "lat": 51.0408,
        "lon": 13.7478,
        "kapazitaet": 32066,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "ALL-INKL.COM", "land": "de"},
      "trainer": {"name": "Thomas Stamm", "land": "de"},
      "geschichte": "Gegründet am 12. April 1953 als Sportgemeinschaft der Volkspolizei. Schon 1954 hat die DDR-Führung die halbe Mannschaft nach Ost-Berlin versetzt, daraus ist später der BFC Dynamo entstanden. Trotzdem ist Dresden mit acht Meistertiteln und sieben FDGB-Pokalen einer der erfolgreichsten Vereine der DDR geworden.\n\nNach der Wende hat Dynamo von 1991 bis 1995 in der Bundesliga gespielt, ist dann aber wegen Lizenzverstößen in die Regionalliga zwangsversetzt worden. Seitdem pendelt der Verein zwischen 2. und 3. Liga.",
      "mentalitaet": "Eine der größten und lautesten Fanszenen Deutschlands: Der K-Block ist für gewaltige Choreografien und Tausende Fans bei Auswärtsspielen bekannt. Dynamo ist für viele in Sachsen eine Herzensangelegenheit.\n\nDie Kehrseite: Wiederholte Ausschreitungen, Pyrotechnik und Debatten um rechte Tendenzen in Teilen der Szene. Nach Krawallen in Dortmund 2011 ist Dynamo für eine Saison aus dem DFB-Pokal ausgeschlossen worden. Im normalen Ligabetrieb ist das Stadion aber gut für Familien geeignet.",
      "wissenswertes": [
        "Das Rudolf-Harbig-Stadion ist nach dem Dresdner Mittelstreckenläufer benannt, der 1939 einen Weltrekord über 800 Meter aufgestellt hat.",
        "Zu DDR-Zeiten ist Dynamo regelmäßig im Europapokal angetreten und hat dort 1989 das Halbfinale im UEFA-Pokal erreicht."
      ],
      "rivalitaeten": [
        {"gegner": "1. FC Magdeburg", "gegnerId": "1-fc-magdeburg", "bezeichnung": "Ost-Derby"},
        {"gegner": "Energie Cottbus", "gegnerId": "energie-cottbus", "bezeichnung": "Ost-Derby"},
        {"gegner": "Chemnitzer FC", "bezeichnung": "Sachsenderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "spvgg-greuther-fuerth",
      "name": "SpVgg Greuther Fürth e.V.",
      "kurzname": "SpVgg Greuther Fürth",
      "kuerzel": "SGF",
      "liga": "de-2",
      "land": "de",
      "farben": ["#009a44", "#ffffff"],
      "logo": null,
      "gruendung": 1903,
      "adresse": "Laubenweg 60, 90765 Fürth",
      "web": "https://www.sgf1903.de",
      "wiki": {"de": "SpVgg Greuther Fürth", "en": "SpVgg Greuther Fürth"},
      "stadion": {
        "name": "Sportpark Ronhof Thomas Sommer",
        "adresse": "Laubenweg 60, 90765 Fürth",
        "lat": 49.487,
        "lon": 10.9993,
        "kapazitaet": 16626,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Personal Hofmann", "land": "de"},
      "trainer": {"name": "Heiko Vogel", "land": "de"},
      "geschichte": "Die SpVgg Fürth ist am 23. September 1903 gegründet worden und ist in den 1910ern und 20ern eine der stärksten Mannschaften Deutschlands gewesen: Meister 1914, 1926 und 1929. Aus dieser Zeit stammt die erbitterte Rivalität mit dem Nachbarn Nürnberg.\n\n1996 haben sich die Fußballer mit dem TSV Vestenbergsgreuth zusammengetan, seitdem heißt der Verein Greuther Fürth. In der Bundesliga hat er 2012/13 und 2021/22 gespielt, beide Male nur eine Saison.",
      "mentalitaet": "Bodenständiger Verein aus der Nachbarstadt Nürnbergs, mit dem Kleeblatt aus dem Stadtwappen als Symbol. Das Selbstverständnis lebt stark vom Gegenpol zum großen „Club“.\n\nDie Fanszene ist klein, aber treu, das Stadion kompakt und sehr familienfreundlich.",
      "wissenswertes": [
        "In der Bundesligasaison 2012/13 hat Fürth kein einziges Heimspiel gewonnen, ein bis heute einmaliger Negativrekord.",
        "Der Fusionspartner TSV Vestenbergsgreuth hat 1994 als Amateurverein den FC Bayern aus dem DFB-Pokal geworfen."
      ],
      "rivalitaeten": [
        {
          "gegner": "1. FC Nürnberg",
          "gegnerId": "1-fc-nuernberg",
          "bezeichnung": "Frankenderby",
          "text": "Eines der ältesten Derbys Deutschlands, die Stadien liegen nur wenige Kilometer auseinander."
        }
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "hannover-96",
      "name": "Hannoverscher Sportverein von 1896 e.V.",
      "kurzname": "Hannover 96",
      "kuerzel": "H96",
      "liga": "de-2",
      "land": "de",
      "farben": ["#da291c", "#000000"],
      "logo": null,
      "gruendung": 1896,
      "adresse": "Robert-Enke-Straße 1, 30169 Hannover",
      "web": "https://www.hannover96.de",
      "wiki": {"de": "Hannover 96", "en": "Hannover 96"},
      "stadion": {
        "name": "Heinz von Heiden Arena",
        "adresse": "Robert-Enke-Straße 1, 30169 Hannover",
        "lat": 52.36,
        "lon": 9.7313,
        "kapazitaet": 49000,
        "bild": null
      },
      "eigentuemer": {
        "text": "Hannover 96 GmbH & Co. KGaA; langjähriger Streit zwischen e.V. und Investorenseite um Martin Kind über die 50+1-Regel",
        "art": "KGaA mit Investor (50+1)",
        "laender": ["de"]
      },
      "sponsor": {"name": "Heise", "land": "de"},
      "trainer": {"name": "Sandro Wagner", "land": "de"},
      "geschichte": "Gegründet am 12. April 1896. Deutscher Meister ist Hannover 1938 und 1954 geworden. Eine Sensation ist der DFB-Pokalsieg 1992 gewesen, als Zweitligist gegen Mönchengladbach.\n\nNach dem Bundesliga-Aufstieg 2002 hat 96 eine lange Erstligaphase erlebt, mit Europa-League-Teilnahmen 2011 bis 2013. Seit 2019 spielt der Verein wieder in der 2. Liga. Im September 2026 hat 96 Trainer Christian Titz entlassen, Nachfolger ist Sandro Wagner.",
      "mentalitaet": "Großstadtverein aus Niedersachsens Hauptstadt mit treuer Anhängerschaft und einer großen Fanszene in der Nordkurve. Prägend ist der jahrelange Machtkampf zwischen dem e.V. bzw. großen Teilen der Fans und dem langjährigen Geldgeber Martin Kind um die 50+1-Regel. 2023 hat dieser Streit sogar die bundesweite Abstimmung der DFL über einen Investoreneinstieg mit beeinflusst.\n\nDas Stadion ist gut für Familien geeignet. Das Niedersachsenderby gegen Braunschweig ist aber ein Hochrisikospiel.",
      "wissenswertes": [
        "Die Straße am Stadion trägt den Namen von Robert Enke, dem 96-Torwart und Nationalspieler, der 2009 an Depressionen gestorben ist. Die Robert-Enke-Stiftung setzt sich seither für die Aufklärung über Depressionen ein.",
        "Der Pokalsieg 1992 ist bis heute einer der wenigen Triumphe eines Zweitligisten im DFB-Pokal."
      ],
      "rivalitaeten": [
        {
          "gegner": "Eintracht Braunschweig",
          "gegnerId": "eintracht-braunschweig",
          "bezeichnung": "Niedersachsenderby"
        }
      ],
      "freundschaften": [
        {
          "gegner": "Hamburger SV",
          "gegnerId": "hamburger-sv",
          "text": "Gilt traditionell als gutes Verhältnis der Fanszenen."
        }
      ],
      "geprueft": false
    },
    {
      "id": "1-fc-heidenheim",
      "name": "1. FC Heidenheim 1846 e.V.",
      "kurzname": "1. FC Heidenheim",
      "kuerzel": "FCH",
      "liga": "de-2",
      "land": "de",
      "farben": ["#e3001b", "#004e9e"],
      "logo": null,
      "gruendung": 1846,
      "adresse": "Schloßhaustraße 162, 89522 Heidenheim an der Brenz",
      "web": "https://www.fc-heidenheim.de",
      "wiki": {"de": "1. FC Heidenheim", "en": "1. FC Heidenheim"},
      "stadion": {
        "name": "Voith-Arena",
        "adresse": "Schloßhaustraße 162, 89522 Heidenheim an der Brenz",
        "lat": 48.6687,
        "lon": 10.1393,
        "kapazitaet": 15000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "MHP", "land": "de"},
      "trainer": {"name": "Frank Schmidt", "land": "de"},
      "geschichte": "Die Wurzeln reichen bis zum Heidenheimer Turnverein von 1846 zurück, der heutige 1. FC Heidenheim ist 2007 als eigenständiger Fußballverein entstanden. Im selben Jahr hat Frank Schmidt das Traineramt übernommen und es bis heute behalten, länger als jeder andere Trainer im deutschen Profifußball.\n\nUnter ihm ist Heidenheim von der Oberliga bis in die Bundesliga marschiert. 2023 ist er aufgestiegen und hat 2024/25 sogar in der Conference League gespielt. 2026 ist der Verein abgestiegen.",
      "mentalitaet": "Schwäbisch-bodenständiger Verein von der Ostalb: solide, bescheiden, beharrlich. Er ist eng verbunden mit der regionalen Industrie, etwa dem Maschinenbauer Voith, der dem Stadion den Namen gibt.\n\nDas Publikum ist familiär und regional, die Fanszene klein, aber gewachsen. Dass hier ein Trainer fast zwei Jahrzehnte im Amt bleibt, sagt viel über die Vereinskultur.",
      "wissenswertes": [
        "Die Voith-Arena liegt auf dem Schlossberg direkt unterhalb von Schloss Hellenstein.",
        "Frank Schmidt hat den Verein durch alle Ligen von der Oberliga bis zur Bundesliga begleitet."
      ],
      "rivalitaeten": [],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "1-fc-kaiserslautern",
      "name": "1. FC Kaiserslautern e.V.",
      "kurzname": "1. FC Kaiserslautern",
      "kuerzel": "FCK",
      "liga": "de-2",
      "land": "de",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Fritz-Walter-Straße 1, 67663 Kaiserslautern",
      "web": "https://www.fck.de",
      "wiki": {"de": "1. FC Kaiserslautern", "en": "1. FC Kaiserslautern"},
      "stadion": {
        "name": "Fritz-Walter-Stadion",
        "adresse": "Fritz-Walter-Straße 1, 67663 Kaiserslautern",
        "lat": 49.4345,
        "lon": 7.7766,
        "kapazitaet": 49327,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Löwen Entertainment (Novoline)", "land": "de"},
      "trainer": {"name": "Torsten Lieberknecht", "land": "de"},
      "geschichte": "Gegründet am 2. Juni 1900. Die Lauterer Nachkriegself um Fritz Walter ist 1951 und 1953 Meister geworden und hat 1954 gleich fünf Spieler für das WM-Finale von Bern gestellt: Fritz und Ottmar Walter, Werner Liebrich, Werner Kohlmeyer und Horst Eckel.\n\nWeitere Meisterschaften sind 1991 und 1998 gefolgt, 1998 als Aufsteiger unter Otto Rehhagel, was bis heute einmalig ist. Nach finanziellen Krisen ist der FCK 2018 in die 3. Liga abgestürzt, 2022 aber zurückgekehrt. 2024 hat er als Zweitligist im DFB-Pokalfinale gegen Leverkusen gestanden.",
      "mentalitaet": "Pfälzer Arbeiter- und Regionalstolz in seiner reinsten Form. Der Betzenberg thront über der Stadt, und der FCK ist für die ganze Westpfalz Identität und Religion zugleich. Die Westkurve ist berühmt und berüchtigt, das Stadion als „Hölle Betzenberg“ gefürchtet.\n\nDie Fans sind extrem treu, auch in der 3. Liga ist der Betze voll gewesen. Abseits der Südwestderbys ist das Stadion familientauglich.",
      "wissenswertes": [
        "„Fritz-Walter-Wetter“ ist sprichwörtlich für Regenwetter, weil Fritz Walter auf nassem Boden am besten gespielt haben soll.",
        "1998 ist der FCK als erster und bisher einziger Aufsteiger direkt Deutscher Meister geworden."
      ],
      "rivalitaeten": [
        {"gegner": "SV Waldhof Mannheim", "bezeichnung": "Südwestderby"},
        {"gegner": "Karlsruher SC", "gegnerId": "karlsruher-sc", "bezeichnung": "Südwestderby"},
        {"gegner": "1. FSV Mainz 05", "gegnerId": "1-fsv-mainz-05", "bezeichnung": "Rheinland-Pfalz-Derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "karlsruher-sc",
      "name": "Karlsruher Sport-Club Mühlburg-Phönix e.V.",
      "kurzname": "Karlsruher SC",
      "kuerzel": "KSC",
      "liga": "de-2",
      "land": "de",
      "farben": ["#00519e", "#ffffff"],
      "logo": null,
      "gruendung": 1894,
      "adresse": "Adenauerring 17, 76131 Karlsruhe",
      "web": "https://www.ksc.de",
      "wiki": {"de": "Karlsruher SC", "en": "Karlsruher SC"},
      "stadion": {
        "name": "BBBank Wildpark",
        "adresse": "Adenauerring 17, 76131 Karlsruhe",
        "lat": 49.02,
        "lon": 8.413,
        "kapazitaet": 34302,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "SWEG", "land": "de"},
      "trainer": {"name": "Maximilian Senft", "land": null},
      "geschichte": "Der KSC ist 1952 aus der Fusion von VfB Mühlburg und FC Phönix Karlsruhe entstanden. Phönix ist schon 1909 Deutscher Meister geworden. Der neue Verein hat 1955 und 1956 den DFB-Pokal gewonnen und war Gründungsmitglied der Bundesliga.\n\nSeine beste Zeit hat er unter Winfried Schäfer in den 1990ern erlebt, mit Spielern wie Oliver Kahn und Mehmet Scholl. Legendär ist das 7:0 gegen den FC Valencia im UEFA-Pokal 1993. Inzwischen spielt der KSC seit Jahren in der 2. Liga, das Stadion im Wildpark ist bis 2023 komplett neu gebaut worden.",
      "mentalitaet": "Badischer Stolz und die tiefe Abneigung gegen alles Württembergische prägen den Verein. Das Derby gegen den VfB ist das Spiel des Jahres. Die Fanszene ist groß und lautstark, die Fans halten auch in schwierigen Zeiten zum Verein.\n\nDas Publikum ist breit gemischt und familienfreundlich. Bekannt ist die langjährige Freundschaft mit Hertha BSC.",
      "wissenswertes": [
        "Das 7:0 gegen Valencia 1993 heißt bis heute „das Wunder vom Wildpark“.",
        "Oliver Kahn und Mehmet Scholl sind beide aus der KSC-Jugend in den Profifußball gekommen."
      ],
      "rivalitaeten": [
        {"gegner": "VfB Stuttgart", "gegnerId": "vfb-stuttgart", "bezeichnung": "Baden-Württemberg-Derby"},
        {"gegner": "1. FC Kaiserslautern", "gegnerId": "1-fc-kaiserslautern", "bezeichnung": "Südwestderby"},
        {"gegner": "SC Freiburg", "gegnerId": "sc-freiburg", "bezeichnung": "Badisches Derby"}
      ],
      "freundschaften": [{"gegner": "Hertha BSC", "gegnerId": "hertha-bsc", "text": "Langjährige, bekannte Fanfreundschaft."}],
      "geprueft": false
    },
    {
      "id": "holstein-kiel",
      "name": "Kieler Sportvereinigung Holstein von 1900 e.V.",
      "kurzname": "Holstein Kiel",
      "kuerzel": "KSV",
      "liga": "de-2",
      "land": "de",
      "farben": ["#005ca9", "#e2001a"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Westring 501, 24106 Kiel",
      "web": "https://www.holstein-kiel.de",
      "wiki": {"de": "Holstein Kiel", "en": "Holstein Kiel"},
      "stadion": {
        "name": "Holstein-Stadion",
        "adresse": "Westring 501, 24106 Kiel",
        "lat": 54.3489,
        "lon": 10.1236,
        "kapazitaet": 15034,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "famila", "land": "de"},
      "trainer": {"name": "Tim Walter", "land": "de"},
      "geschichte": "Die Kieler Sportvereinigung Holstein ist am 7. Oktober 1900 gegründet worden. 1912 ist sie Deutscher Meister geworden. Danach ist es lange still um die „Störche“ gewesen, jahrzehntelang haben sie in der Regionalliga und der 3. Liga gespielt.\n\nSeit dem Aufstieg 2017 hat sich Kiel in der 2. Liga etabliert. 2024 ist Holstein als erster Verein aus Schleswig-Holstein in die Bundesliga aufgestiegen, 2025 aber direkt wieder abgestiegen.",
      "mentalitaet": "Norddeutsch, ruhig und maritim. Die Landeshauptstadt am Meer identifiziert sich eher mit Segeln und Handball (THW Kiel) als mit Fußball. Umso größer ist der Stolz auf den Bundesligaaufstieg gewesen.\n\nDas Holstein-Stadion ist klein und familiär, die Fanszene ist überschaubar, aber gewachsen.",
      "wissenswertes": [
        "Den bislang einzigen Meistertitel hat Holstein 1912 im Finale gegen den Karlsruher FV geholt.",
        "Der Bundesligaaufstieg 2024 ist der erste eines Vereins aus Schleswig-Holstein gewesen."
      ],
      "rivalitaeten": [{"gegner": "FC Hansa Rostock", "bezeichnung": "Ostseederby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "1-fc-nuernberg",
      "name": "1. FC Nürnberg – Verein für Leibesübungen e.V.",
      "kurzname": "1. FC Nürnberg",
      "kuerzel": "FCN",
      "liga": "de-2",
      "land": "de",
      "farben": ["#a41f35", "#000000"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Valznerweiherstraße 200, 90480 Nürnberg",
      "web": "https://www.fcn.de",
      "wiki": {"de": "1. FC Nürnberg", "en": "1. FC Nürnberg"},
      "stadion": {
        "name": "Max-Morlock-Stadion",
        "adresse": "Max-Morlock-Platz 1, 90480 Nürnberg",
        "lat": 49.4262,
        "lon": 11.1256,
        "kapazitaet": 50000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "toolcraft", "land": "de"},
      "trainer": {"name": "Miroslav Klose", "land": "de"},
      "geschichte": "Der „Club“ ist am 4. Mai 1900 gegründet worden und ist in den 1920ern die dominierende Mannschaft Deutschlands gewesen. Mit neun Titeln war er lange Rekordmeister, bis der FC Bayern ihn 1987 überholt hat. Dazu kommen vier DFB-Pokale (1935, 1939, 1962, 2007).\n\nKurios: 1968 ist Nürnberg Meister geworden und ein Jahr später als amtierender Meister abgestiegen. Seither pendelt der Club regelmäßig zwischen erster und zweiter Liga. Den bisher letzten Titel hat er mit dem Pokalsieg 2007 geholt.",
      "mentalitaet": "Fränkische Identität und eine unglaubliche Leidensfähigkeit: „Der Club is a Depp“ sagen die Fans selbst über ihren Verein, mit viel Liebe. Die Anhängerschaft ist riesig und treu, die Nordkurve eine der stimmungsvollsten Deutschlands.\n\nDas Publikum ist gemischt und familienfreundlich. Die Freundschaft mit Schalke ist eine der ältesten und bekanntesten im deutschen Fußball.",
      "wissenswertes": [
        "Das Stadion liegt direkt neben dem ehemaligen Reichsparteitagsgelände der NSDAP, eine historisch belastete Nachbarschaft.",
        "Max Morlock, Weltmeister von 1954 und Namensgeber des Stadions, hat sein ganzes Fußballerleben beim Club verbracht.",
        "Der Club ist bislang der einzige Verein, der als amtierender Meister aus der Bundesliga abgestiegen ist."
      ],
      "rivalitaeten": [
        {"gegner": "SpVgg Greuther Fürth", "gegnerId": "spvgg-greuther-fuerth", "bezeichnung": "Frankenderby"},
        {"gegner": "FC Bayern München", "gegnerId": "fc-bayern-muenchen", "bezeichnung": "Bayerisches Derby"}
      ],
      "freundschaften": [
        {
          "gegner": "FC Schalke 04",
          "gegnerId": "fc-schalke-04",
          "text": "Eine der ältesten und bekanntesten Fanfreundschaften Deutschlands."
        }
      ],
      "geprueft": false
    },
    {
      "id": "vfl-osnabrueck",
      "name": "VfL Osnabrück e.V.",
      "kurzname": "VfL Osnabrück",
      "kuerzel": "OSN",
      "liga": "de-2",
      "land": "de",
      "farben": ["#5b2d8e", "#ffffff"],
      "logo": null,
      "gruendung": 1899,
      "adresse": "Scharnhorststraße 50, 49084 Osnabrück",
      "web": "https://www.vfl.de",
      "wiki": {"de": "VfL Osnabrück", "en": "VfL Osnabrück"},
      "stadion": {
        "name": "Bremer Brücke",
        "adresse": "Scharnhorststraße 50, 49084 Osnabrück",
        "lat": 52.2803,
        "lon": 8.0715,
        "kapazitaet": 15741,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Thomas Philipps", "land": "de"},
      "trainer": {"name": "Timo Schultz", "land": "de"},
      "geschichte": "Gegründet am 17. April 1899. Der VfL hat nie in der Bundesliga gespielt, ist aber ein Dauergast in der 2. Liga. Er pendelt seit Jahrzehnten zwischen zweiter und dritter Liga.\n\nNach dem Abstieg 2024 ist Osnabrück 2026 wieder in die 2. Liga zurückgekehrt.",
      "mentalitaet": "Lila-weiße Leidenschaft in einem der stimmungsvollsten Traditionsstadien Deutschlands. Die Bremer Brücke ist eng, steil und hat viele Stehplätze, die Ostkurve gilt als eine der lautesten der Liga.\n\nDie Fans sind treu und bodenständig, das Verhältnis zwischen Verein und Stadt ist sehr eng. Das Stadion ist familientauglich, wenngleich es bei Derbys hoch hergeht.",
      "wissenswertes": [
        "Die Bremer Brücke gehört zu den letzten echten Traditionsstadien im deutschen Profifußball, mit Tribünen direkt am Spielfeldrand.",
        "Lila als Vereinsfarbe ist im deutschen Profifußball ziemlich einzigartig."
      ],
      "rivalitaeten": [
        {"gegner": "Preußen Münster", "bezeichnung": "Derby"},
        {"gegner": "Arminia Bielefeld", "gegnerId": "arminia-bielefeld", "bezeichnung": "Derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "fc-st-pauli",
      "name": "FC St. Pauli von 1910 e.V.",
      "kurzname": "FC St. Pauli",
      "kuerzel": "FCSP",
      "liga": "de-2",
      "land": "de",
      "farben": ["#5a3825", "#ffffff"],
      "logo": null,
      "gruendung": 1910,
      "adresse": "Harald-Stender-Platz 1, 20359 Hamburg",
      "web": "https://www.fcstpauli.com",
      "wiki": {"de": "FC St. Pauli", "en": "FC St. Pauli"},
      "stadion": {
        "name": "Millerntor-Stadion",
        "adresse": "Harald-Stender-Platz 1, 20359 Hamburg",
        "lat": 53.5545,
        "lon": 9.9676,
        "kapazitaet": 29546,
        "bild": null
      },
      "eigentuemer": {
        "text": "FC St. Pauli von 1910 e.V.; die Stadiongesellschaft gehört seit 2024/25 mehrheitlich der Fan-Genossenschaft „Football Cooperative Sankt Pauli von 1910 eG“",
        "art": "Eingetragener Verein + Genossenschaft",
        "laender": ["de"]
      },
      "sponsor": {"name": "congstar", "land": "de"},
      "trainer": {"name": "Marcel Rapp", "land": "de"},
      "geschichte": "1910 als Fußballabteilung des Hamburg-St. Pauli Turnvereins entstanden, eigenständig seit 1924. Gespielt wird am Millerntor direkt am Heiligengeistfeld, mitten im Stadtteil St. Pauli. Sportlich ist der Verein lange eine Fahrstuhlmannschaft zwischen erster und zweiter Liga gewesen. Kult ist der 2:1-Sieg 2002 gegen den frisch gebackenen Weltpokalsieger Bayern München, daher das Shirt „Weltpokalsiegerbesieger“.\n\n2024 ist St. Pauli in die Bundesliga aufgestiegen, 2026 ging es wieder runter in die 2. Liga.",
      "mentalitaet": "Ab Mitte der 1980er hat sich die Kurve stark verändert: Rund um die Hafenstraßen-Szene kamen Punks, Hausbesetzer*innen und Studierende ans Millerntor, und der Totenkopf wurde zum inoffiziellen Vereinssymbol. Seitdem versteht sich St. Pauli ausdrücklich als links, antifaschistisch, antirassistisch und antisexistisch. Diese Haltung steht auch in den Leitlinien des Vereins.\n\nDie Fanbasis ist international, mit Fanclubs auf der ganzen Welt, und gilt als ausgesprochen inklusiv, auch für queere Fans. Das Publikum ist bunt gemischt, Familien inklusive. Konflikte gibt es vor allem mit rechtsoffenen Fanszenen, allen voran Hansa Rostock.",
      "wissenswertes": [
        "Beim Einlaufen läuft „Hells Bells“ von AC/DC, nach Toren „Song 2“ von Blur.",
        "Über das Totenkopf-Merchandising verdient der Verein einen erheblichen Teil seiner Einnahmen.",
        "Mit der Genossenschaft 2024 haben zehntausende Fans Anteile am Stadion gezeichnet. Ein Finanzierungsmodell, das es im deutschen Profifußball so vorher nicht gab.",
        "Gilt als einer der ersten Vereine, die Diskriminierung ausdrücklich in der Stadionordnung verboten haben."
      ],
      "rivalitaeten": [
        {"gegner": "Hamburger SV", "gegnerId": "hamburger-sv", "bezeichnung": "Hamburger Stadtderby"},
        {"gegner": "FC Hansa Rostock", "text": "Stark politisch aufgeladene Rivalität."}
      ],
      "freundschaften": [
        {
          "gegner": "Celtic Glasgow",
          "text": "Bekannte Freundschaft der Fanszenen, gestützt auf ähnliche politische Haltung."
        },
        {
          "gegner": "SV Babelsberg 03",
          "text": "Freundschaft mit der ebenfalls links geprägten Fanszene aus Potsdam."
        }
      ],
      "geprueft": false
    },
    {
      "id": "1-fc-magdeburg",
      "name": "1. FC Magdeburg e.V.",
      "kurzname": "1. FC Magdeburg",
      "kuerzel": "FCM",
      "liga": "de-2",
      "land": "de",
      "farben": ["#005ca9", "#ffffff"],
      "logo": null,
      "gruendung": 1965,
      "adresse": "Friedrich-Ebert-Straße 62, 39114 Magdeburg",
      "web": "https://www.fc-magdeburg.de",
      "wiki": {"de": "1. FC Magdeburg", "en": "1. FC Magdeburg"},
      "stadion": {
        "name": "Avnet Arena",
        "adresse": "Friedrich-Ebert-Straße 62, 39114 Magdeburg",
        "lat": 52.1254,
        "lon": 11.6709,
        "kapazitaet": 30098,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": {"name": "Humanas", "land": "de"},
      "trainer": {"name": "Petrik Sander", "land": "de"},
      "geschichte": "Der 1. FC Magdeburg ist am 22. Dezember 1965 gegründet worden und schnell zur Spitzenmannschaft der DDR aufgestiegen. Er ist dreimal DDR-Meister geworden (1972, 1974, 1975) und hat siebenmal den FDGB-Pokal gewonnen.\n\nDer größte Triumph ist der Europapokal der Pokalsieger 1974 gewesen, als einziger Europapokalsieg eines DDR-Vereins. Nach der Wende ist der Verein jahrelang im Amateurfußball verschwunden. 2018 hat er erstmals in der 2. Liga gespielt, inzwischen hat er sich dort etabliert.",
      "mentalitaet": "Ostdeutsche Industrie- und Arbeiterstadt (Schwermaschinenbau), und der FCM als ihr großer Stolz. Die Fanszene ist eine der größten im Osten, Block U ist für Stimmung und Choreos bekannt.\n\nDie Fans sind leidenschaftlich und reisefreudig. Das Stadion ist bei normalen Spielen familientauglich.",
      "wissenswertes": [
        "Jürgen Sparwasser, der Torschütze beim 1:0 der DDR gegen die BRD bei der WM 1974, hat für den 1. FC Magdeburg gespielt.",
        "Der Europapokalsieg 1974 ist im Finale gegen den AC Mailand gelungen (2:0)."
      ],
      "rivalitaeten": [
        {"gegner": "Hallescher FC", "bezeichnung": "Elbe-Saale-Derby"},
        {"gegner": "Dynamo Dresden", "gegnerId": "dynamo-dresden", "bezeichnung": "Ost-Derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "vfl-wolfsburg",
      "name": "VfL Wolfsburg-Fußball GmbH",
      "kurzname": "VfL Wolfsburg",
      "kuerzel": "WOB",
      "liga": "de-2",
      "land": "de",
      "farben": ["#65b32e", "#ffffff"],
      "logo": null,
      "gruendung": 1945,
      "adresse": "In den Allerwiesen 1, 38446 Wolfsburg",
      "web": "https://www.vfl-wolfsburg.de",
      "wiki": {"de": "VfL Wolfsburg", "en": "VfL Wolfsburg"},
      "stadion": {
        "name": "Volkswagen Arena",
        "adresse": "In den Allerwiesen 1, 38446 Wolfsburg",
        "lat": 52.4326,
        "lon": 10.8038,
        "kapazitaet": 28917,
        "bild": null
      },
      "eigentuemer": {"text": "Volkswagen AG (100 %)", "art": "Werksclub, Ausnahme von der 50+1-Regel", "laender": ["de"]},
      "sponsor": {"name": "Volkswagen", "land": "de"},
      "trainer": {"name": "Tobias Strobl", "land": "de"},
      "geschichte": "Der VfL ist am 12. September 1945 in der noch jungen Stadt gegründet worden, die die Nationalsozialisten 1938 als „Stadt des KdF-Wagens“ für das Volkswagenwerk errichtet hatten. Lange hat er im Amateurfußball gespielt, 1997 ist er erstmals in die Bundesliga aufgestiegen.\n\n2009 hat Felix Magath den VfL sensationell zur Meisterschaft geführt, mit dem Sturmduo Grafite und Džeko. 2015 hat Wolfsburg den DFB-Pokal gewonnen. 2026 ist der VfL nach knapp 30 Jahren Bundesliga über die Relegation gegen Paderborn abgestiegen.",
      "mentalitaet": "Werksclub im Wortsinn: Stadt, Werk und Verein sind kaum voneinander zu trennen, Volkswagen hält den Profifußball zu 100 %. Von Fans anderer Vereine wird der VfL gern als „Retorte“ belächelt, obwohl es ihn seit 1945 gibt.\n\nDie Fanszene ist kleiner als bei vergleichbaren Vereinen, aber treu. Das Publikum ist sehr familienfreundlich.",
      "wissenswertes": [
        "Die Frauenmannschaft des VfL gehört zu den erfolgreichsten Europas und hat 2013 und 2014 die Champions League gewonnen.",
        "Mit dem Abstieg 2026 sind 29 Jahre ununterbrochene Bundesligazugehörigkeit zu Ende gegangen. Zweimal (2017 und 2018) hatte sich der VfL vorher noch in der Relegation gerettet."
      ],
      "rivalitaeten": [
        {
          "gegner": "Eintracht Braunschweig",
          "gegnerId": "eintracht-braunschweig",
          "bezeichnung": "Niedersachsenderby"
        },
        {"gegner": "Hannover 96", "gegnerId": "hannover-96", "bezeichnung": "Niedersachsenderby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "ajax",
      "name": "Amsterdamsche Football Club Ajax",
      "kurzname": "Ajax",
      "kuerzel": "AJA",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#d2122e", "#ffffff"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Johan Cruijff Boulevard 29, 1101 AX Amsterdam",
      "web": "https://www.ajax.nl",
      "wiki": {"nl": "AFC Ajax", "de": "Ajax Amsterdam", "en": "AFC Ajax"},
      "stadion": {
        "name": "Johan Cruijff ArenA",
        "adresse": "Johan Cruijff Boulevard 1, 1101 AX Amsterdam",
        "lat": 52.3144,
        "lon": 4.9415,
        "kapazitaet": 55865,
        "bild": null
      },
      "eigentuemer": {
        "text": "AFC Ajax NV, börsennotiert; Mehrheit der Aktien bei der Vereniging AFC Ajax",
        "art": "Börsennotierte Aktiengesellschaft mit Vereinsmehrheit",
        "laender": ["nl"]
      },
      "sponsor": {"name": "Ziggo", "land": "nl"},
      "trainer": {"name": "Míchel", "land": "es"},
      "geschichte": "Gegründet am 18. März 1900 in Amsterdam und nach dem griechischen Sagenhelden Aias benannt. Unter Rinus Michels und mit Johan Cruijff hat Ajax den „totaalvoetbal“ geprägt und zwischen 1971 und 1973 dreimal hintereinander den Europapokal der Landesmeister gewonnen. 1995 folgte unter Louis van Gaal mit einer extrem jungen Mannschaft der Champions-League-Sieg.\n\nAjax ist niederländischer Rekordmeister. Die Nachwuchsakademie De Toekomst gilt als eine der besten der Welt.",
      "mentalitaet": "Weltoffener Großstadtklub mit internationaler Strahlkraft und hohem Anspruch an attraktiven Offensivfußball. Die aktive Kurve ist die F-Side.\n\nEine Besonderheit, die man kennen muss: Wegen der historisch großen jüdischen Gemeinde Amsterdams galt Ajax früh als „jüdischer Klub“. Teile der Anhängerschaft nennen sich deshalb selbst „Joden“ und zeigen Davidsterne. Gegnerische Fans reagieren darauf immer wieder mit offen antisemitischen Gesängen. Der Verein versucht seit Jahren, die Selbstbezeichnung zurückzudrängen, und engagiert sich zugleich gegen Antisemitismus. Abseits dieser Konfliktlinien ist die Arena gut für Familien geeignet.",
      "wissenswertes": [
        "Das Logo zeigt den Kopf des Aias, gezeichnet aus elf Linien, eine für jeden Spieler.",
        "Die Arena heißt seit 2018 nach Johan Cruijff, der 2016 gestorben ist.",
        "Weil es bei Klassiekers zu schweren Ausschreitungen gekommen ist, finden sie seit 2009 größtenteils ohne Gästefans statt."
      ],
      "rivalitaeten": [
        {
          "gegner": "Feyenoord",
          "gegnerId": "feyenoord",
          "bezeichnung": "De Klassieker",
          "text": "Amsterdam gegen Rotterdam, Hauptstadt gegen Hafenstadt. Die mit Abstand heißeste Rivalität der Niederlande."
        },
        {"gegner": "PSV", "gegnerId": "psv", "bezeichnung": "De Topper"},
        {"gegner": "FC Utrecht", "gegnerId": "fc-utrecht"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "ado-den-haag",
      "name": "ADO Den Haag",
      "kurzname": "ADO Den Haag",
      "kuerzel": "ADO",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#00843f", "#ffd400"],
      "logo": null,
      "gruendung": 1905,
      "adresse": "Haags Kwartier 55, 2491 BM Den Haag",
      "web": "https://www.adodenhaag.nl",
      "wiki": {"nl": "ADO Den Haag", "de": "ADO Den Haag", "en": "ADO Den Haag"},
      "stadion": {
        "name": "Bingoal Stadion",
        "adresse": "Haags Kwartier 55, 2491 BM Den Haag",
        "lat": 52.0627,
        "lon": 4.3826,
        "kapazitaet": 15000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Robin Peter", "land": null},
      "rivalitaeten": [
        {"gegner": "Feyenoord", "gegnerId": "feyenoord"},
        {"gegner": "Ajax", "gegnerId": "ajax"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "az",
      "name": "AZ Alkmaar",
      "kurzname": "AZ",
      "kuerzel": "AZ",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#d0021b", "#ffffff"],
      "logo": null,
      "gruendung": 1967,
      "adresse": "Stadionweg 1, 1812 AZ Alkmaar",
      "web": "https://www.az.nl",
      "wiki": {"nl": "AZ (voetbalclub)", "de": "AZ Alkmaar", "en": "AZ Alkmaar"},
      "stadion": {
        "name": "AFAS Stadion",
        "adresse": "Stadionweg 1, 1812 AZ Alkmaar",
        "lat": 52.6128,
        "lon": 4.7425,
        "kapazitaet": 19500,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Leeroy Echteld", "land": "nl"},
      "rivalitaeten": [{"gegner": "Ajax", "gegnerId": "ajax", "bezeichnung": "Noord-Hollandse derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sc-cambuur",
      "name": "SC Cambuur-Leeuwarden",
      "kurzname": "SC Cambuur",
      "kuerzel": "CAM",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#ffd400", "#0055a5"],
      "logo": null,
      "gruendung": 1964,
      "adresse": "Leeuwarden",
      "web": "https://www.cambuur.nl",
      "wiki": {"nl": "SC Cambuur", "de": "SC Cambuur", "en": "SC Cambuur"},
      "stadion": {
        "name": "Kooi Stadion",
        "adresse": "Leeuwarden",
        "lat": 53.191,
        "lon": 5.834,
        "kapazitaet": 15000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Johan Plat", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "sc Heerenveen", "gegnerId": "sc-heerenveen", "bezeichnung": "Friese derby"},
        {"gegner": "FC Groningen", "gegnerId": "fc-groningen", "bezeichnung": "Noordelijke derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "excelsior",
      "name": "Excelsior Rotterdam",
      "kurzname": "Excelsior",
      "kuerzel": "EXC",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#000000"],
      "logo": null,
      "gruendung": 1902,
      "adresse": "Honingerdijk 110, 3062 NX Rotterdam",
      "web": "https://www.excelsiorrotterdam.nl",
      "wiki": {"nl": "Excelsior Rotterdam", "de": "Excelsior Rotterdam", "en": "Excelsior Rotterdam"},
      "stadion": {
        "name": "Van Donge & De Roo Stadion",
        "adresse": "Honingerdijk 110, 3062 NX Rotterdam",
        "lat": 51.9177,
        "lon": 4.5207,
        "kapazitaet": 4500,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Ruben den Uil", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "Sparta Rotterdam", "gegnerId": "sparta-rotterdam", "bezeichnung": "Rotterdamse derby"},
        {"gegner": "Feyenoord", "gegnerId": "feyenoord", "bezeichnung": "Rotterdamse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "feyenoord",
      "name": "Feyenoord Rotterdam",
      "kurzname": "Feyenoord",
      "kuerzel": "FEY",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1908,
      "adresse": "Van Zandvlietplein 1, 3077 AA Rotterdam",
      "web": "https://www.feyenoord.nl",
      "wiki": {"nl": "Feyenoord", "de": "Feyenoord Rotterdam", "en": "Feyenoord"},
      "stadion": {
        "name": "De Kuip (Stadion Feijenoord)",
        "adresse": "Van Zandvlietplein 1, 3077 AA Rotterdam",
        "lat": 51.8939,
        "lon": 4.5232,
        "kapazitaet": 47500,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Giovanni van Bronckhorst", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "Ajax", "gegnerId": "ajax", "bezeichnung": "De Klassieker"},
        {"gegner": "PSV", "gegnerId": "psv"},
        {"gegner": "Sparta Rotterdam", "gegnerId": "sparta-rotterdam", "bezeichnung": "Rotterdamse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "fortuna-sittard",
      "name": "Fortuna Sittard",
      "kurzname": "Fortuna Sittard",
      "kuerzel": "FOR",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#fcd116", "#00843f"],
      "logo": null,
      "gruendung": 1968,
      "adresse": "Sittard",
      "web": "https://www.fortunasittard.nl",
      "wiki": {"nl": "Fortuna Sittard", "de": "Fortuna Sittard", "en": "Fortuna Sittard"},
      "stadion": {
        "name": "Fortuna Sittard Stadion",
        "adresse": "Sittard",
        "lat": 51.0002,
        "lon": 5.8697,
        "kapazitaet": 12500,
        "bild": null
      },
      "eigentuemer": {
        "text": "Mehrheitlich in Besitz des türkischen Unternehmers Işıtan Gün",
        "art": "Privatinvestor",
        "laender": ["tr"]
      },
      "sponsor": null,
      "trainer": {"name": "Danny Buijs", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "Roda JC Kerkrade", "bezeichnung": "Limburgse derby"},
        {"gegner": "MVV Maastricht", "bezeichnung": "Limburgse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "go-ahead-eagles",
      "name": "Go Ahead Eagles",
      "kurzname": "Go Ahead Eagles",
      "kuerzel": "GAE",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#ffd400"],
      "logo": null,
      "gruendung": 1902,
      "adresse": "Vetkampstraat 101, 7425 AC Deventer",
      "web": "https://www.ga-eagles.nl",
      "wiki": {"nl": "Go Ahead Eagles", "de": "Go Ahead Eagles", "en": "Go Ahead Eagles"},
      "stadion": {
        "name": "De Adelaarshorst",
        "adresse": "Vetkampstraat 101, 7425 AC Deventer",
        "lat": 52.249,
        "lon": 6.1695,
        "kapazitaet": 10400,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Joseph Oosting", "land": "nl"},
      "rivalitaeten": [{"gegner": "PEC Zwolle", "gegnerId": "pec-zwolle", "bezeichnung": "IJsselderby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "fc-groningen",
      "name": "FC Groningen",
      "kurzname": "FC Groningen",
      "kuerzel": "GRO",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#00843f", "#ffffff"],
      "logo": null,
      "gruendung": 1971,
      "adresse": "Boumaboulevard 41, 9723 ZS Groningen",
      "web": "https://www.fcgroningen.nl",
      "wiki": {"nl": "FC Groningen", "de": "FC Groningen", "en": "FC Groningen"},
      "stadion": {
        "name": "Euroborg",
        "adresse": "Boumaboulevard 41, 9723 ZS Groningen",
        "lat": 53.2069,
        "lon": 6.5935,
        "kapazitaet": 22550,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Dick Lukkien", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "sc Heerenveen", "gegnerId": "sc-heerenveen", "bezeichnung": "Derby van het Noorden"},
        {"gegner": "SC Cambuur", "gegnerId": "sc-cambuur", "bezeichnung": "Noordelijke derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sc-heerenveen",
      "name": "Sportclub Heerenveen",
      "kurzname": "sc Heerenveen",
      "kuerzel": "HEE",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#005ca9", "#ffffff"],
      "logo": null,
      "gruendung": 1920,
      "adresse": "Abe Lenstra Boulevard 21, 8448 JA Heerenveen",
      "web": "https://www.sc-heerenveen.nl",
      "wiki": {"nl": "sc Heerenveen", "de": "SC Heerenveen", "en": "SC Heerenveen"},
      "stadion": {
        "name": "Abe Lenstra Stadion",
        "adresse": "Abe Lenstra Boulevard 21, 8448 JA Heerenveen",
        "lat": 52.9583,
        "lon": 5.9369,
        "kapazitaet": 27224,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Robin Veldman", "land": "nl"},
      "wissenswertes": [
        "Das Wappen zeigt die Pompeblêden, die Seerosenblätter aus der friesischen Flagge. Der Verein versteht sich als Klub ganz Frieslands."
      ],
      "rivalitaeten": [
        {"gegner": "SC Cambuur", "gegnerId": "sc-cambuur", "bezeichnung": "Friese derby"},
        {"gegner": "FC Groningen", "gegnerId": "fc-groningen", "bezeichnung": "Derby van het Noorden"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "nec",
      "name": "N.E.C. Nijmegen",
      "kurzname": "NEC",
      "kuerzel": "NEC",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#00843f"],
      "logo": null,
      "gruendung": 1900,
      "adresse": "Stadionplein 1, 6532 AJ Nijmegen",
      "web": "https://www.nec-nijmegen.nl",
      "wiki": {"nl": "N.E.C.", "de": "NEC Nijmegen", "en": "NEC Nijmegen"},
      "stadion": {
        "name": "Goffertstadion",
        "adresse": "Stadionplein 1, 6532 AJ Nijmegen",
        "lat": 51.8231,
        "lon": 5.8455,
        "kapazitaet": 12500,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Dick Schreuder", "land": "nl"},
      "rivalitaeten": [{"gegner": "Vitesse Arnhem", "bezeichnung": "Gelderse derby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "pec-zwolle",
      "name": "PEC Zwolle",
      "kurzname": "PEC Zwolle",
      "kuerzel": "PEC",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#005ca9", "#ffffff"],
      "logo": null,
      "gruendung": 1910,
      "adresse": "Stadionplein 20, 8025 CP Zwolle",
      "web": "https://www.peczwolle.nl",
      "wiki": {"nl": "PEC Zwolle", "de": "PEC Zwolle", "en": "PEC Zwolle"},
      "stadion": {
        "name": "MAC³PARK stadion",
        "adresse": "Stadionplein 20, 8025 CP Zwolle",
        "lat": 52.513,
        "lon": 6.1225,
        "kapazitaet": 14000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Henry van der Vegt", "land": "nl"},
      "rivalitaeten": [{"gegner": "Go Ahead Eagles", "gegnerId": "go-ahead-eagles", "bezeichnung": "IJsselderby"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "psv",
      "name": "Philips Sport Vereniging",
      "kurzname": "PSV",
      "kuerzel": "PSV",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#ed1c24", "#ffffff"],
      "logo": null,
      "gruendung": 1913,
      "adresse": "Frederiklaan 10a, 5616 NH Eindhoven",
      "web": "https://www.psv.nl",
      "wiki": {"nl": "PSV (voetbalclub)", "de": "PSV Eindhoven", "en": "PSV Eindhoven"},
      "stadion": {
        "name": "Philips Stadion",
        "adresse": "Frederiklaan 10a, 5616 NH Eindhoven",
        "lat": 51.4417,
        "lon": 5.4674,
        "kapazitaet": 35000,
        "bild": null
      },
      "eigentuemer": {
        "text": "PSV N.V.; Philips war über Jahrzehnte Träger und Hauptgeldgeber, ist heute aber deutlich weniger eingebunden",
        "art": "Ehemaliger Werksclub",
        "laender": ["nl"]
      },
      "sponsor": null,
      "trainer": {"name": "Peter Bosz", "land": "nl"},
      "geschichte": "Gegründet 1913 als Betriebssportverein des Elektrokonzerns Philips, daher der Name Philips Sport Vereniging. Mit dem Wachstum von Philips ist auch Eindhoven groß geworden, und PSV wurde zum Klub der „Lichtstad“.\n\nDie größten Erfolge: UEFA-Pokal 1978 und 1988 unter Guus Hiddink das Triple mit dem Europapokal der Landesmeister. Dazu kommen über zwanzig niederländische Meistertitel. Romário, Ronaldo, Ruud van Nistelrooy und Arjen Robben haben bei PSV ihren Durchbruch in Europa geschafft.",
      "mentalitaet": "Ein klassischer Werksclub, ähnlich wie Leverkusen oder Wolfsburg in Deutschland, allerdings mit deutlich längerer und volkstümlicherer Fankultur. Aus der Randstad wird PSV gern als „Boerenclub“ (Bauernklub) verspottet. Viele Fans haben den Spott als Ehrentitel übernommen.\n\nDas Philips Stadion liegt mitten in der Stadt neben dem alten Philips-Arbeiterviertel. Die Stimmung ist eher bodenständig-brabantisch als großstädtisch-aufgeheizt, und das Stadion ist ausgesprochen familienfreundlich.",
      "wissenswertes": [
        "Das Philips Stadion trägt seinen Namen seit 1913, ganz ohne Namensrechte-Deal. Eines der ältesten „Sponsorstadien“ der Welt.",
        "Philips ist Mitte der 2010er als Trikotsponsor ausgestiegen, die Verbindung zum Konzern bleibt aber Teil der Identität."
      ],
      "rivalitaeten": [
        {"gegner": "Ajax", "gegnerId": "ajax", "bezeichnung": "De Topper"},
        {"gegner": "Feyenoord", "gegnerId": "feyenoord"},
        {"gegner": "Willem II", "gegnerId": "willem-ii", "bezeichnung": "Brabantse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "sparta-rotterdam",
      "name": "Sparta Rotterdam",
      "kurzname": "Sparta Rotterdam",
      "kuerzel": "SPA",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1888,
      "adresse": "Spartastraat 7, 3027 ER Rotterdam",
      "web": "https://www.sparta-rotterdam.nl",
      "wiki": {"nl": "Sparta Rotterdam", "de": "Sparta Rotterdam", "en": "Sparta Rotterdam"},
      "stadion": {
        "name": "Het Kasteel",
        "adresse": "Spartastraat 7, 3027 ER Rotterdam",
        "lat": 51.9198,
        "lon": 4.4337,
        "kapazitaet": 11026,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Rogier Meijer", "land": "nl"},
      "wissenswertes": ["Ältester noch bestehender Profiverein der Niederlande (1888)."],
      "rivalitaeten": [
        {"gegner": "Feyenoord", "gegnerId": "feyenoord", "bezeichnung": "Rotterdamse derby"},
        {"gegner": "Excelsior", "gegnerId": "excelsior", "bezeichnung": "Rotterdamse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "telstar",
      "name": "SC Telstar",
      "kurzname": "Telstar",
      "kuerzel": "TEL",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#ffffff", "#0057a8"],
      "logo": null,
      "gruendung": 1963,
      "adresse": "Velsen-Zuid",
      "web": "https://www.sctelstar.nl",
      "wiki": {"nl": "Telstar (voetbalclub)", "de": "Telstar (Fußballverein)", "en": "SC Telstar"},
      "stadion": {
        "name": "BUKO Stadion",
        "adresse": "Velsen-Zuid",
        "lat": 52.4592,
        "lon": 4.6207,
        "kapazitaet": 5000,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Henk Brugge", "land": "nl"},
      "rivalitaeten": [],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "fc-twente",
      "name": "FC Twente",
      "kurzname": "FC Twente",
      "kuerzel": "TWE",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1965,
      "adresse": "Colosseum 65, 7521 PP Enschede",
      "web": "https://www.fctwente.nl",
      "wiki": {"nl": "FC Twente", "de": "FC Twente Enschede", "en": "FC Twente"},
      "stadion": {
        "name": "De Grolsch Veste",
        "adresse": "Colosseum 65, 7521 PP Enschede",
        "lat": 52.2366,
        "lon": 6.8376,
        "kapazitaet": 30205,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "John van den Brom", "land": "nl"},
      "rivalitaeten": [{"gegner": "Heracles Almelo", "bezeichnung": "Twentse derby"}],
      "freundschaften": [
        {
          "gegner": "FC Schalke 04",
          "gegnerId": "fc-schalke-04",
          "text": "Grenzüberschreitende Freundschaft mit den Fans aus Gelsenkirchen."
        }
      ],
      "geprueft": false
    },
    {
      "id": "fc-utrecht",
      "name": "FC Utrecht",
      "kurzname": "FC Utrecht",
      "kuerzel": "UTR",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#ffffff"],
      "logo": null,
      "gruendung": 1970,
      "adresse": "Herculesplein 241, 3584 AA Utrecht",
      "web": "https://www.fcutrecht.nl",
      "wiki": {"nl": "FC Utrecht", "de": "FC Utrecht", "en": "FC Utrecht"},
      "stadion": {
        "name": "Stadion Galgenwaard",
        "adresse": "Herculesplein 241, 3584 AA Utrecht",
        "lat": 52.0784,
        "lon": 5.1459,
        "kapazitaet": 23750,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "Anthony Correia", "land": null},
      "rivalitaeten": [{"gegner": "Ajax", "gegnerId": "ajax"}],
      "freundschaften": [],
      "geprueft": false
    },
    {
      "id": "willem-ii",
      "name": "Willem II Tilburg",
      "kurzname": "Willem II",
      "kuerzel": "WII",
      "liga": "nl-1",
      "land": "nl",
      "farben": ["#e2001a", "#00529f"],
      "logo": null,
      "gruendung": 1896,
      "adresse": "Tilburg",
      "web": "https://www.willem-ii.nl",
      "wiki": {"nl": "Willem II (voetbalclub)", "de": "Willem II Tilburg", "en": "Willem II (football club)"},
      "stadion": {
        "name": "Koning Willem II Stadion",
        "adresse": "Tilburg",
        "lat": 51.541,
        "lon": 5.0657,
        "kapazitaet": 14700,
        "bild": null
      },
      "eigentuemer": null,
      "sponsor": null,
      "trainer": {"name": "John Stegeman", "land": "nl"},
      "rivalitaeten": [
        {"gegner": "NAC Breda", "bezeichnung": "Brabantse derby"},
        {"gegner": "PSV", "gegnerId": "psv", "bezeichnung": "Brabantse derby"}
      ],
      "freundschaften": [],
      "geprueft": false
    }
  ]
}
);
