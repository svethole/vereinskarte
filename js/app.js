/*
 * Vereinskarte – Programmlogik.
 *
 * Ablauf: Saison-Index lesen → Saisondatei per <script> nachladen →
 * Marker (geclustert) setzen → bei Auswahl Seitenleiste befüllen.
 * Der Zustand (Saison, Verein) steht in der Adresszeile (#2026-27/vfb-stuttgart),
 * damit sich Links auf einzelne Vereine merken und teilen lassen.
 */
(function () {
  'use strict';

  const START_ANSICHT = { zentrum: [51.2, 8.5], zoom: 6 };

  // Kartenkacheln von openstreetmap.org. Deren Nutzungsregeln verlangen einen
  // Referer – die Seite muss daher über einen Webserver laufen; beim Öffnen
  // per Doppelklick (file://) antworten die OSM-Server mit „403 Access blocked“.
  const KACHELN = {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    namensnennung: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
  };
  const GELADENE_DATEIEN = new Set();

  const zustand = {
    saison: null,          // aktuell geladene Saison (Objekt)
    ausgeblendeteLigen: new Set(),
    markerNachId: new Map(),
    gewaehlteId: null,
  };

  // ---------- Hilfsfunktionen ----------

  function esc(text) {
    return String(text ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function absaetze(text) {
    if (!text) return '';
    return String(text).split(/\n{2,}/).map(a => `<p>${esc(a.trim())}</p>`).join('');
  }

  const regionNamen = (() => {
    try { return new Intl.DisplayNames(['de'], { type: 'region' }); } catch { return null; }
  })();

  function landName(code) {
    if (!code) return '';
    const eintrag = VK.laender[code];
    if (eintrag && eintrag.name) return eintrag.name;
    if (regionNamen) {
      try { return regionNamen.of(code.split('-')[0].toUpperCase()); } catch { /* unbekannt */ }
    }
    return code.toUpperCase();
  }

  function flagge(code) {
    if (!code) return '';
    return `<img class="flagge" src="vendor/flaggen/${esc(code)}.svg" alt="" title="${esc(landName(code))}" loading="lazy">`;
  }

  function flaggen(codes) {
    return (codes || []).map(flagge).join('');
  }

  function wikiUrl(sprache, titel) {
    return `https://${sprache}.wikipedia.org/wiki/${encodeURIComponent(titel.replace(/ /g, '_'))}`;
  }

  function mapsUrl(stadion) {
    const ziel = [stadion.name, stadion.adresse].filter(Boolean).join(', ');
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ziel)}`;
  }

  function ligaVon(verein) {
    return zustand.saison.ligen.find(l => l.id === verein.liga);
  }

  function vereinVon(id) {
    return zustand.saison.vereine.find(v => v.id === id);
  }

  /** Ersatzwappen aus Vereinsfarben und Kürzel, solange kein Logo vorliegt. */
  function ersatzWappen(verein, klasse) {
    const [f1, f2] = verein.farben && verein.farben.length ? verein.farben : ['#556', '#fff'];
    const kuerzel = verein.kuerzel || verein.kurzname.slice(0, 3);
    return `<span class="ersatzwappen ${klasse || ''}" style="--f1:${esc(f1)};--f2:${esc(f2 || f1)}">` +
      `<span>${esc(kuerzel)}</span></span>`;
  }

  /** Logo als <img> mit Rückfall auf das Ersatzwappen, falls die Datei fehlt. */
  function wappen(verein, klasse) {
    if (!verein.logo) return ersatzWappen(verein, klasse);
    return `<img class="wappen ${klasse || ''}" src="${esc(verein.logo)}" alt="" loading="lazy" ` +
      `data-verein-id="${esc(verein.id)}" data-klasse="${esc(klasse || '')}" onerror="VK.logoFehlt(this)">`;
  }

  VK.logoFehlt = (img) => {
    const verein = zustand.saison && vereinVon(img.dataset.vereinId);
    if (verein) img.outerHTML = ersatzWappen(verein, img.dataset.klasse);
    else img.remove();
  };

  function ligaLogo(liga) {
    if (liga.logo) {
      return `<img class="liga-logo" src="${esc(liga.logo)}" alt="" onerror="this.remove()">`;
    }
    return '';
  }

  // ---------- Karte ----------

  const karte = L.map('karte', { zoomControl: true, worldCopyJump: true })
    .setView(START_ANSICHT.zentrum, START_ANSICHT.zoom);

  L.tileLayer(KACHELN.url, {
    maxZoom: 19,
    attribution: KACHELN.namensnennung,
  }).addTo(karte);

  const cluster = L.markerClusterGroup({
    maxClusterRadius: 44,          // ≈ Pin-Breite: zusammenfassen, sobald sich Pins überlappen
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,    // Klick öffnet stattdessen die Auswahlliste
    spiderfyOnMaxZoom: false,
    iconCreateFunction: clusterIcon,
  });
  karte.addLayer(cluster);

  function pinIcon(verein) {
    return L.divIcon({
      className: 'pin-huelle',
      html: `<div class="pin" style="--f1:${esc((verein.farben || [])[0] || '#556')}">` +
        `<div class="pin-kopf">${wappen(verein, 'pin-wappen')}</div></div>`,
      iconSize: [44, 54],
      iconAnchor: [22, 54],
      popupAnchor: [0, -50],
    });
  }

  function clusterIcon(gruppe) {
    const kinder = gruppe.getAllChildMarkers();
    const vorschau = kinder.slice(0, 3).map(m => wappen(m.options.verein, 'cluster-wappen')).join('');
    return L.divIcon({
      className: 'cluster-huelle',
      html: `<div class="cluster"><div class="cluster-stapel">${vorschau}</div>` +
        `<span class="cluster-zahl">${kinder.length}</span></div>`,
      iconSize: [56, 56],
      iconAnchor: [28, 28],
    });
  }

  cluster.on('clusterclick', (e) => {
    const gruppe = e.layer;
    const vereine = gruppe.getAllChildMarkers()
      .map(m => m.options.verein)
      .sort((a, b) => a.kurzname.localeCompare(b.kurzname, 'de'));

    // Teilen sich alle Vereine einen Standort (z.B. gemeinsames Stadion),
    // bringt Hineinzoomen nichts – dann keinen Zoom-Knopf anbieten.
    const gr = gruppe.getBounds();
    const einOrt = gr.getNorthEast().distanceTo(gr.getSouthWest()) < 50;

    const liste = vereine.map(v => {
      const liga = ligaVon(v);
      return `<li><button type="button" class="auswahl-eintrag" data-id="${esc(v.id)}">` +
        `${wappen(v, 'auswahl-wappen')}<span class="auswahl-text"><strong>${esc(v.kurzname)}</strong>` +
        `<small>${esc(liga ? liga.name : '')}</small></span></button></li>`;
    }).join('');

    const inhalt = document.createElement('div');
    inhalt.className = 'auswahl';
    inhalt.innerHTML = `<div class="auswahl-titel">${vereine.length} Vereine hier</div>` +
      `<ul class="auswahl-liste">${liste}</ul>` +
      (einOrt ? '' : '<button type="button" class="auswahl-zoom">🔍 Hineinzoomen</button>');

    const popup = L.popup({ className: 'auswahl-popup', maxWidth: 300, minWidth: 220, autoPanPadding: [20, 20] })
      .setLatLng(gruppe.getLatLng())
      .setContent(inhalt)
      .openOn(karte);

    inhalt.addEventListener('click', (ev) => {
      const eintrag = ev.target.closest('.auswahl-eintrag');
      if (eintrag) {
        karte.closePopup(popup);
        waehleVerein(eintrag.dataset.id);
        return;
      }
      if (ev.target.closest('.auswahl-zoom')) {
        karte.closePopup(popup);
        gruppe.zoomToBounds({ padding: [60, 60] });
      }
    });
  });

  function setzeMarker() {
    cluster.clearLayers();
    zustand.markerNachId.clear();
    const begriff = document.getElementById('suche').value.trim().toLowerCase();

    const marker = [];
    for (const verein of zustand.saison.vereine) {
      if (zustand.ausgeblendeteLigen.has(verein.liga)) continue;
      if (begriff && !suchtext(verein).includes(begriff)) continue;
      const s = verein.stadion;
      if (!s || typeof s.lat !== 'number' || typeof s.lon !== 'number') continue;

      const m = L.marker([s.lat, s.lon], { icon: pinIcon(verein), verein, title: verein.kurzname, riseOnHover: true });
      m.on('click', () => waehleVerein(verein.id));
      zustand.markerNachId.set(verein.id, m);
      marker.push(m);
    }
    cluster.addLayers(marker);
  }

  function suchtext(v) {
    return [v.name, v.kurzname, v.kuerzel, v.adresse, v.stadion && v.stadion.name, v.stadion && v.stadion.adresse]
      .filter(Boolean).join(' ').toLowerCase();
  }

  // ---------- Kopfzeile: Saison, Ligen, Suche ----------

  function baueSaisonAuswahl() {
    const auswahl = document.getElementById('saison-auswahl');
    auswahl.innerHTML = VK.saisonListe
      .map(s => `<option value="${esc(s.id)}">${esc(s.bezeichnung)}</option>`).join('');
    auswahl.addEventListener('change', () => ladeSaison(auswahl.value, null));
  }

  function baueLigaFilter() {
    const box = document.getElementById('liga-filter');
    box.innerHTML = zustand.saison.ligen.map(l => {
      const anzahl = zustand.saison.vereine.filter(v => v.liga === l.id).length;
      const aus = zustand.ausgeblendeteLigen.has(l.id);
      return `<button type="button" class="liga-chip" data-liga="${esc(l.id)}" aria-pressed="${!aus}">` +
        `${flagge(l.land)}${esc(l.name)} <small>${anzahl}</small></button>`;
    }).join('');
  }

  document.getElementById('liga-filter').addEventListener('click', (e) => {
    const chip = e.target.closest('.liga-chip');
    if (!chip) return;
    const id = chip.dataset.liga;
    if (zustand.ausgeblendeteLigen.has(id)) zustand.ausgeblendeteLigen.delete(id);
    else zustand.ausgeblendeteLigen.add(id);
    chip.setAttribute('aria-pressed', String(!zustand.ausgeblendeteLigen.has(id)));
    setzeMarker();
  });

  document.getElementById('suche').addEventListener('input', () => setzeMarker());
  document.getElementById('suche').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const erster = zustand.markerNachId.keys().next();
    if (!erster.done) waehleVerein(erster.value, true);
  });

  // ---------- Saison laden ----------

  function ladeSaison(id, vereinId) {
    const eintrag = VK.saisonListe.find(s => s.id === id) || VK.saisonListe[0];
    if (!eintrag) {
      zeigeHinweis('Keine Saison in data/saisons.js eingetragen.');
      return;
    }
    document.getElementById('saison-auswahl').value = eintrag.id;

    const weiter = () => {
      zustand.saison = VK.saisonDaten[eintrag.id];
      if (!zustand.saison) {
        zeigeHinweis(`Saisondatei ${eintrag.datei} enthält keine Saison mit der ID „${eintrag.id}“.`);
        return;
      }
      // Ligen, die es in der neuen Saison nicht gibt, aus dem Filter werfen
      const ligaIds = new Set(zustand.saison.ligen.map(l => l.id));
      for (const l of [...zustand.ausgeblendeteLigen]) if (!ligaIds.has(l)) zustand.ausgeblendeteLigen.delete(l);

      baueLigaFilter();
      setzeMarker();
      if (vereinId && vereinVon(vereinId)) waehleVerein(vereinId, true);
      else schliesseSeitenleiste();
    };

    if (VK.saisonDaten[eintrag.id] || GELADENE_DATEIEN.has(eintrag.datei)) { weiter(); return; }

    const skript = document.createElement('script');
    skript.src = eintrag.datei;
    skript.onload = () => { GELADENE_DATEIEN.add(eintrag.datei); weiter(); };
    skript.onerror = () => zeigeHinweis(`Saisondatei ${eintrag.datei} konnte nicht geladen werden.`);
    document.body.appendChild(skript);
  }

  function zeigeHinweis(text) {
    const leiste = document.getElementById('seitenleiste');
    document.getElementById('seitenleiste-inhalt').innerHTML = `<p class="hinweis">⚠️ ${esc(text)}</p>`;
    leiste.hidden = false;
  }

  // ---------- Seitenleiste ----------

  function waehleVerein(id, hinfliegen) {
    const verein = vereinVon(id);
    if (!verein) return;
    zustand.gewaehlteId = id;
    document.getElementById('seitenleiste-inhalt').innerHTML = vereinsSteckbrief(verein);
    const leiste = document.getElementById('seitenleiste');
    leiste.hidden = false;
    leiste.scrollTop = 0;
    document.body.classList.add('seitenleiste-offen');
    karte.invalidateSize();

    document.querySelectorAll('.pin.aktiv').forEach(p => p.classList.remove('aktiv'));
    const marker = zustand.markerNachId.get(id);
    if (marker && hinfliegen && verein.stadion) {
      cluster.zoomToShowLayer(marker, () => markiere(marker));
    } else if (marker) {
      markiere(marker);
    }
    schreibeAdresse();
  }

  function markiere(marker) {
    const el = marker.getElement();
    if (el) el.querySelector('.pin')?.classList.add('aktiv');
  }

  function schliesseSeitenleiste() {
    zustand.gewaehlteId = null;
    document.getElementById('seitenleiste').hidden = true;
    document.body.classList.remove('seitenleiste-offen');
    document.querySelectorAll('.pin.aktiv').forEach(p => p.classList.remove('aktiv'));
    karte.invalidateSize();
    schreibeAdresse();
  }

  document.getElementById('seitenleiste-zu').addEventListener('click', schliesseSeitenleiste);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') schliesseSeitenleiste(); });

  // Klick auf verlinkte Rivalen/Freunde innerhalb der Seitenleiste
  document.getElementById('seitenleiste-inhalt').addEventListener('click', (e) => {
    const link = e.target.closest('[data-verein]');
    if (!link) return;
    e.preventDefault();
    waehleVerein(link.dataset.verein, true);
  });

  const FEHLT = '<span class="fehlt">noch nicht erfasst</span>';

  function abschnitt(titel, inhalt, klasse) {
    return `<section class="abschnitt ${klasse || ''}"><h3>${titel}</h3>${inhalt || FEHLT}</section>`;
  }

  function zeile(beschriftung, wert) {
    return `<div class="zeile"><dt>${beschriftung}</dt><dd>${wert || FEHLT}</dd></div>`;
  }

  function vereinsName(name, id) {
    if (id && vereinVon(id)) return `<a href="#" data-verein="${esc(id)}">${esc(name)}</a>`;
    return esc(name);
  }

  function beziehungsListe(eintraege) {
    if (!eintraege || !eintraege.length) return '';
    return '<ul class="beziehungen">' + eintraege.map(r =>
      `<li><strong>${vereinsName(r.gegner, r.gegnerId)}</strong>` +
      (r.bezeichnung ? ` <span class="etikett">${esc(r.bezeichnung)}</span>` : '') +
      (r.text ? `<br><span class="beschreibung">${esc(r.text)}</span>` : '') + '</li>'
    ).join('') + '</ul>';
  }

  function wikiLinks(verein) {
    const wiki = verein.wiki || {};
    const land = VK.laender[verein.land] || {};
    const sprache = verein.wikiSprache || land.sprache;
    const links = [];

    if (sprache && wiki[sprache]) {
      links.push(`<a href="${wikiUrl(sprache, wiki[sprache])}" target="_blank" rel="noopener">📖 Wikipedia (${esc(sprache)})</a>`);
    } else if (wiki.en) {
      links.push(`<a href="${wikiUrl('en', wiki.en)}" target="_blank" rel="noopener">📖 Wikipedia (en)</a>` +
        (sprache ? ` <small class="fehlt">kein Artikel auf ${esc(sprache)} erfasst</small>` : ''));
    }
    if (wiki.de && sprache !== 'de') {
      links.push(`<a href="${wikiUrl('de', wiki.de)}" target="_blank" rel="noopener">📖 Wikipedia (de)</a>`);
    }
    return links;
  }

  function vereinsSteckbrief(v) {
    const liga = ligaVon(v);
    const s = v.stadion || {};
    const e = v.eigentuemer;
    const stand = zustand.saison.stand;

    const kopf = `<header class="steckbrief-kopf">
        <div class="steckbrief-wappen">${wappen(v, 'gross')}</div>
        <div>
          <h2>${esc(v.kurzname)}</h2>
          ${v.name && v.name !== v.kurzname ? `<div class="langname">${esc(v.name)}</div>` : ''}
          <div class="liga-zeile">${liga ? `${ligaLogo(liga)}${flagge(liga.land)} ${esc(liga.name)}` : ''}</div>
          ${v.geprueft ? '' : '<div class="entwurf" title="Inhalte sind ein Entwurf und noch nicht gegengeprüft">📝 Entwurf, noch ungeprüft</div>'}
        </div>
      </header>`;

    const steckbrief = `<dl class="eckdaten">
        ${zeile('Gegründet', v.gruendung ? esc(v.gruendung) : '')}
        ${zeile('Adresse', esc(v.adresse || ''))}
        ${zeile('Eigentümer', e ? `${flaggen(e.laender)} ${esc(e.text)}${e.art ? `<br><small>${esc(e.art)}</small>` : ''}` : '')}
        ${zeile('Hauptsponsor', v.sponsor ? `${flagge(v.sponsor.land)} ${esc(v.sponsor.name)}` : '')}
        ${zeile('Trainer*in', v.trainer ? `${flagge(v.trainer.land)} ${esc(v.trainer.name)}` : '')}
      </dl>`;

    const stadion = `
        ${s.bild ? `<figure class="stadion-bild"><img src="${esc(s.bild)}" alt="${esc(s.name)}" loading="lazy" onerror="this.parentElement.remove()">` +
          (s.bildNachweis ? `<figcaption>${esc(s.bildNachweis)}</figcaption>` : '') + '</figure>' : ''}
        <p><strong>${esc(s.name || '')}</strong>${s.kapazitaet ? ` · ${Number(s.kapazitaet).toLocaleString('de-DE')} Plätze` : ''}<br>
        ${esc(s.adresse || '')}</p>
        ${s.name ? `<a class="knopf" href="${mapsUrl(s)}" target="_blank" rel="noopener">📍 In Google Maps öffnen</a>` : ''}`;

    const links = [
      v.web ? `<a href="${esc(v.web)}" target="_blank" rel="noopener">🌐 Vereinsseite</a>` : '',
      ...wikiLinks(v),
    ].filter(Boolean);

    return kopf +
      abschnitt('Steckbrief', steckbrief) +
      abschnitt('Stadion', stadion) +
      abschnitt('Geschichte', absaetze(v.geschichte)) +
      abschnitt('Mentalität &amp; Fanszene', absaetze(v.mentalitaet)) +
      abschnitt('Wissenswertes', v.wissenswertes && v.wissenswertes.length
        ? '<ul>' + v.wissenswertes.map(w => `<li>${esc(w)}</li>`).join('') + '</ul>' : '') +
      abschnitt('Derbys &amp; Rivalitäten', beziehungsListe(v.rivalitaeten)) +
      abschnitt('Fanfreundschaften', beziehungsListe(v.freundschaften)) +
      abschnitt('Links', links.length ? `<ul class="linkliste">${links.map(l => `<li>${l}</li>`).join('')}</ul>` : '') +
      (stand ? `<p class="stand">Datenstand: ${esc(new Date(stand).toLocaleDateString('de-DE'))}</p>` : '');
  }

  // ---------- Adresszeile (#saison/verein) ----------

  function schreibeAdresse() {
    if (!zustand.saison) return;
    const ziel = '#' + zustand.saison.id + (zustand.gewaehlteId ? '/' + zustand.gewaehlteId : '');
    if (location.hash !== ziel) history.replaceState(null, '', ziel);
  }

  function leseAdresse() {
    const [saison, verein] = location.hash.replace(/^#/, '').split('/');
    return { saison: saison || null, verein: verein || null };
  }

  window.addEventListener('hashchange', () => {
    const { saison, verein } = leseAdresse();
    if (zustand.saison && saison === zustand.saison.id) {
      if (verein && verein !== zustand.gewaehlteId) waehleVerein(verein, true);
    } else {
      ladeSaison(saison, verein);
    }
  });

  // ---------- Start ----------

  baueSaisonAuswahl();
  const start = leseAdresse();
  ladeSaison(start.saison, start.verein);
})();
