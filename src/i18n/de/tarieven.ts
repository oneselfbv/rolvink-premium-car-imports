// DE — Preise-Seite. Gebühren identisch zur NL-Version (€2.250 / €3.250 /
// €1.250, gleiche Phasen); Abgaben/Zulassung je Zielland formuliert.
const tarieven = {
  meta: {
    title: 'Preise — Sourcing für Autos & Motorräder | Rolvink',
    description:
      'Transparente Preise: Sourcing Deutschland-Route ab €2.250, Japan €3.250, Motorrad €1.250 — mit gestaffelten Zahlungen und ohne versteckte Margen.',
  },
  breadcrumbHome: 'Startseite',
  breadcrumbCurrent: 'Preise',
  eyebrow: 'Preise',
  h1Html: 'Transparente Preise, <span class="accent">bevor</span> Sie unterschreiben.',
  lead: 'Wir berechnen keine Provision vom Verkäufer, keine Marge auf den Kaufpreis und keine versteckte Handling-Fee. Unsere Sourcing-Fee zahlen Sie in Phasen — damit Ihr Kapital nicht monatelang auf dem Ozean stillsteht.',
  ctaHref: '/de/kontakt/',
  de: {
    tag: 'Schnellste Route',
    heading: 'Sourcing-Auftrag Deutschland',
    price: 'ab € 2.250',
    vat: 'inkl. MwSt.',
    leadText:
      'Für alle, die innerhalb von 2 bis 4 Wochen im Auto sitzen möchten. Wir suchen bundesweit bei etablierten Premium-Händlern, besichtigen persönlich vor Ort, verhandeln als Kaufagent auf Ihrer Seite und übernehmen den gesamten Ablauf bis zur Übergabe.',
    imgAlt: 'Schwarzer BMW M4 in Fahrt — Sourcing-Auftrag Deutschland',
    phasesHeading: 'Gestaffelte Zahlung',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 750',
        when: 'Zum Start — Retainer',
        body: 'Bevor wir mit der Suche beginnen. Wird bei erfolgreichem Kauf mit der Schlussrate verrechnet. Nicht erstattungsfähig bei Stornierung durch den Auftraggeber nach Gebots-Freigabe.',
      },
      {
        step: 'Phase 2',
        amount: '€ 1.500',
        when: 'Bei Übergabe — Restzahlung',
        body: 'Bei der Schlüsselübergabe an Ihrer Adresse, mit vollständigen Papieren und kompletter Dokumentation. Lieferung bis an die Haustür — Niederlande und grenznahes Deutschland standardmäßig, weiter auf Anfrage.',
      },
    ],
    inclHeading: 'Was der Auftrag umfasst',
    incl: [
      'Erstgespräch + Profildokument mit Must-haves und Deal-Breakern',
      'Kandidatenvorschläge (3-5 Fahrzeuge innerhalb von 1-2 Wochen)',
      'Persönliche Besichtigung vor Ort vor jedem Gebot',
      'Händler-Verhandlung in Ihrem Interesse, Transportorganisation und Begleitung der Zulassungsformalitäten',
      'Lieferung bis an die Haustür',
    ],
    scope:
      'Kaufpreis des Fahrzeugs, Transport und Zulassungskosten zahlen Sie selbst direkt (transparent berichtet, keine Marge bei uns).',
    cta: 'Erstgespräch vereinbaren',
  },
  jp: {
    tag: 'Unsere Spezialität',
    heading: 'Sourcing-Auftrag Japan',
    price: '€ 3.250',
    vat: 'inkl. MwSt.',
    leadText:
      'Für alle, die eine seltene LHD-Ausführung aus Japan suchen — niedrigere Laufleistung, trockeneres Klima, Shaken-Disziplin. Rechnen Sie mit 10 bis 14 Wochen von der Auktion bis zum zugelassenen Fahrzeug.',
    imgAlt: 'Porsche 911 im nächtlichen Ginza, Tokio — Sourcing-Auftrag Japan',
    phasesHeading: 'Gestaffelte Zahlung — drei Phasen',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 1.250',
        when: 'Zum Start — Retainer',
        body: 'Bevor wir mit dem gezielten Auktions-Screening auf USS, JU und JAA beginnen. Wird bei Erfolg mit der Schlussrate verrechnet.',
      },
      {
        step: 'Phase 2',
        amount: 'Kauf + Transport',
        when: 'Direkt nach dem Zuschlag',
        body: 'Sie zahlen den erzielten Auktionspreis (in Yen, vorab kommuniziert) plus Inlandstransport in Japan und RoRo-Seefracht. Sie kaufen das Fahrzeug direkt per Vollmacht; wir stehen als Koordinator dazwischen, nicht als Wiederverkäufer.',
      },
      {
        step: 'Phase 3',
        amount: '€ 2.000 + Einfuhrabgaben',
        when: 'Bei Übergabe — Restzahlung',
        body: 'Restliche Sourcing-Fee € 2.000 plus Einfuhrabgaben und Zulassungskosten — für Deutschland: 10% Zoll und 19% Einfuhrumsatzsteuer. Einfuhrabgaben und Zulassung rechnen wir vorab transparent für Ihr Land durch. Fällig erst bei der Schlüsselübergabe.',
      },
    ],
    inclHeading: 'Was der Japan-Auftrag umfasst',
    incl: [
      'Ausführliches Erstgespräch (90 Min.) — Profil, Zustandsgrenze, Farbpräferenz, Must-haves',
      'Gezieltes JCD/USS/JU/JAA-Screening mit deutschsprachiger Sheet-Übersetzung je Kandidat',
      'Gebotsstrategie und Bieten über unseren etablierten japanischen Export-Partner',
      'Koordination Inlandstransport Japan, Exportformalitäten, RoRo-Seefracht',
      'Zollabwicklung im Ankunftshafen, Einfuhrabgaben und Zulassung — vorab für Ihr Land durchgerechnet',
      'Lieferung bis an die Haustür — Niederlande und grenznahes Deutschland standardmäßig, weiter auf Anfrage',
    ],
    scope:
      'Kaufpreis (Yen), Inlandstransport Japan, RoRo, Einfuhrabgaben und Zulassungskosten zahlen Sie selbst. Wir koordinieren jede Zahlung transparent — Sie sehen jede Rechnung.',
    cta: 'Erstgespräch vereinbaren',
  },
  moto: {
    tag: 'Neu — Motorräder',
    heading: 'Sourcing-Auftrag Motorrad',
    price: '€ 1.250',
    vat: 'inkl. MwSt.',
    leadText:
      'Für die gezielte Suche nach einem (BMW-)Motorrad auf dem deutschen Markt. Wir screenen mobile.de und Kleinanzeigen.de, begutachten die modellspezifischen Schwachstellen, verhandeln auf Ihrer Seite und organisieren auf Wunsch den Transport — in der Regel in 1 bis 3 Wochen erledigt.',
    imgAlt: 'Offene Bergstraße zur goldenen Stunde — Sourcing-Auftrag Motorräder',
    phasesHeading: 'Gestaffelte Zahlung',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 500',
        when: 'Zum Start — Retainer',
        body: 'Bevor wir mit der Suche beginnen. Wird bei erfolgreichem Kauf mit der Schlussrate verrechnet.',
      },
      {
        step: 'Phase 2',
        amount: '€ 750',
        when: 'Bei Übergabe — Restzahlung',
        body: 'Bei der Übergabe mit vollständigen Papieren und kompletter Dokumentation.',
      },
    ],
    inclHeading: 'Was der Motorrad-Auftrag umfasst',
    incl: [
      'Erstgespräch + Profil: Modell, Baujahr, Ausführung und Budget',
      'Gezielte Suche auf mobile.de und Kleinanzeigen.de',
      'Begutachtung der modellspezifischen Prüfpunkte (Rückrufe, Servobremse, Ölpumpe etc.)',
      'Verhandlung in Ihrem Interesse, Prüfung der Papiere, auf Wunsch versicherter Transport',
      'Übergabe mit vollständigen Papieren und transparenter Endabrechnung',
    ],
    scopeHtml:
      'Kaufpreis und Transport zahlen Sie selbst — transparent berichtet, ohne Marge bei uns. Mehr dazu auf der <a href="/de/motorraeder/">Motorrad-Seite</a>.',
    cta: 'Erstgespräch vereinbaren',
  },
  extra: {
    heading: 'Einzelleistungen',
    lead: 'Nicht jede Frage erfordert einen vollständigen Sourcing-Auftrag. Einzelne Bausteine des Prozesses können Sie auch separat buchen.',
    items: [
      {
        title: 'Unabhängige Besichtigung & Begutachtung',
        price: '€ 350',
        body: 'Persönliche Besichtigung und Begutachtung eines von Ihnen gefundenen Fahrzeugs — Zustand, Historie, modellspezifische Schwachstellen — mit ehrlichem Kurzbericht vor Ihrer Kaufentscheidung.',
      },
      {
        title: 'Erstgespräch',
        price: 'Kostenlos',
        body: 'Online per Google Meet, WhatsApp oder Telefon — maximal 60 Minuten (Deutschland-Route) bzw. 90 Minuten (Japan-Route). Kein Verkaufsdruck, ehrliche Einschätzung, ob es passt.',
      },
    ],
  },
  transparency: {
    heading: 'Unsere finanziellen Spielregeln',
    itemsHtml: [
      '<strong>Keine Provision vom Verkäufer.</strong> Wir werden ausschließlich von Ihnen bezahlt und stehen deshalb ausschließlich auf Ihrer Seite — bei Auswahl, Begutachtung und Verhandlung.',
      '<strong>Keine Marge auf den Kaufpreis.</strong> Sie zahlen direkt an den deutschen Händler oder über den japanischen Auktionspartner. Jeden Betrag koppeln wir mit Rechnung zurück.',
      '<strong>Keine versteckten Handling-Kosten.</strong> Transport, Zoll, Einfuhrabgaben und Zulassung werden zum Selbstkostenpreis weitergereicht — mit den zugrunde liegenden Rechnungen.',
      '<strong>Klare Konditionen vorab.</strong> Vor dem Retainer unterzeichnen Sie eine Auftragsvereinbarung, in der Umfang, Zahlungsphasen und Stornierungsregelung ausdrücklich festgehalten sind.',
    ],
    footerHtml:
      'Sie möchten sehen, wie diese Preisstruktur in der Praxis aussieht? Ein vollständig durchgerechneter W212-Fall steht unter <a href="/de/beispiel-import/">Beispiel-Import</a>. Ob Japan- oder Deutschland-Route besser zu Ihrer Suche passt, klären wir im kostenlosen Erstgespräch.',
  },
  pageCta: {
    heading: 'Besprechen Sie Ihre Suche — unverbindlich.',
    body: 'Ein kostenloses Erstgespräch (Google Meet, WhatsApp oder Telefon), in dem wir Ihr Profil, die passende Route und eine realistische Landed Cost durchgehen. Kein Verkaufsdruck, keine Verpflichtungen.',
    btn: 'Unverbindliches Erstgespräch vereinbaren',
    note: 'Antwort innerhalb von 24 Stunden',
  },
};

export default tarieven;
