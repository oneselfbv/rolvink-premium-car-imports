// DE — Homepage-Sektionen. Marktlokalisierung für Deutschland/Österreich:
// Japan-Sourcing als Kernangebot, Kaufagenten-Service auf dem deutschen Markt.
const home = {
  meta: {
    title: 'Auto aus Japan importieren | Rolvink Premium Imports',
    description:
      'Persönliches Sourcing von BMW, Mercedes-Benz, Audi & Porsche aus japanischen Auktionen: grade 4+, wenig km, seltene LHD-Modelle — Import komplett abgewickelt.',
  },
  hero: {
    h1Html: 'Premium-Automobile &amp; Motorräder,<br/>aus Deutschland &amp; <span class="accent">Japan</span>.',
    lead: 'Persönlich gesourct für alle, die das richtige Exemplar suchen — nicht das erstbeste.',
    ctaPrimary: 'Suchauftrag starten',
    ctaPrimaryHref: '#zoekprofiel',
    ctaSecondary: 'oder zuerst den Ablauf ansehen',
    ctaSecondaryHref: '/de/ablauf/',
    focusLabel: 'Unser Fokus',
    brands: [
      { label: 'BMW' },
      { label: 'Mercedes-Benz' },
      { label: 'Audi' },
      { label: 'Porsche' },
    ] as Array<{ label: string; href?: string }>,
    sourceLabel: 'Wir sourcen aus',
    sources: [
      { label: 'Europa' },
      { label: 'Japan' },
    ] as Array<{ label: string; href?: string }>,
  },
  obsession: {
    eyebrow: 'Unsere Obsession',
    heading: 'Fünf Prinzipien.',
    lead: 'Das richtige Auto findet sich nicht von selbst. Es braucht Geduld, Wissen — und die Bereitschaft, „Nein“ zu sagen zu allem, was nur fast gut ist.',
    items: [
      {
        num: '01',
        title: 'Kein Universalhandel',
        body: 'Wir beschränken uns bewusst auf vier deutsche Premium-Marken — BMW, Mercedes-Benz, Audi und Porsche. Davon verstehen wir etwas. Alles darüber hinaus verweisen wir weiter.',
      },
      {
        num: '02',
        title: 'Kein Massenimport',
        body: 'Unser Anspruch sind acht bis zwölf Fahrzeuge pro Jahr. Kein Bestandsdruck, keine Quoten — jeder Auftrag bekommt die Aufmerksamkeit, die er verdient.',
      },
      {
        num: '03',
        title: 'Nur ausgewählte Exemplare',
        body: 'Zustand grade 4 oder besser auf der offiziellen Auktionsskala. Keine bekannte Schadens- oder Reparaturhistorie. Niedrige Laufleistungen. Vollständige Dokumentation. Unter dieser Grenze kommt kein Auto infrage.',
      },
      {
        num: '04',
        title: 'Obsession für Ausstattung und Historie',
        body: 'Wir lesen jedes Auktionssheet Zeichen für Zeichen. Wir vergleichen mit historischen Preisdaten. Wir wissen, welche Ausführung besonders ist — und welche nicht.',
      },
      {
        num: '05',
        title: 'Lieber auf das richtige Exemplar warten',
        body: 'Ein gutes Auto zu finden braucht Zeit. Wir bieten nicht, wenn der Kandidat nicht passt — wir warten auf die nächste Auktion. Und die übernächste.',
      },
    ],
  },
  services: {
    label: 'Unser Service',
    heading: 'Ein Auftrag von A bis Z.',
    intro: 'Drei Disziplinen, ein durchgängiger Ablauf. Den vollständigen Schritt-für-Schritt-Plan finden Sie unter Ablauf.',
    linkLabel: 'Den Ablauf in 8 Schritten ansehen',
    linkHref: '/de/ablauf/',
    cards: [
      {
        num: '01',
        title: 'Sourcing',
        body: 'Gezielte Suche auf japanischen Auktionen und bei deutschen Premium-Händlern, gesteuert durch Ihr exaktes Profil. Wöchentliche Kandidaten mit unserer Einordnung.',
        img: '/images/traject-auction.jpg',
        alt: 'BMW M3 (G80) frontal mit gelben LED-Scheinwerfern — Sourcing von Premium-Ausführungen',
      },
      {
        num: '02',
        title: 'Lieferung',
        body: 'Vollständige Importabwicklung: Zollabfertigung, Einfuhrabgaben und Zulassung — vorab transparent für Ihr Land durchgerechnet. Lieferung bis an die Haustür: Niederlande und grenznahes Deutschland standardmäßig, weiter auf Anfrage.',
        img: '/images/traject-transport.jpg',
        alt: 'Porsche 911 auf Autotransport-Anhänger — Import und Auslieferung',
      },
      {
        num: '03',
        title: 'Nachbetreuung',
        body: 'Optionales Detailing durch ausgewählte Partner. Unterstützung bei etwaiger Garantie-Korrespondenz. Ein direkter Draht — kein Callcenter.',
        img: '/images/traject-handover.jpg',
        alt: 'Hand mit Mercedes-Benz Autoschlüssel bei der Schlüsselübergabe',
      },
    ],
  },
  trust: {
    eyebrow: 'Vertrauen',
    heading: 'Ehrlich, überprüfbar, mit offenen Büchern.',
    intro:
      'Wir sind ein junger Service und zeigen lieber eine ehrliche Leerstelle als erfundene Referenzen. Was wir heute schon offenlegen: genau, wie wir arbeiten und was ein Auftrag kostet — auf den Euro genau.',
    pijlers: [
      'Nur grade 4+, keine Schadenshistorie',
      'Transparente Landed Cost vor jedem Gebot',
      'Wir bieten erst nach Ihrem ausdrücklichen grünen Licht',
      'Persönlich — ein direkter Draht zu Theo in Welsum',
    ],
    caseLabels: [] as string[], // klantverhaal-kaarten verborgen tot er echte referenties zijn,
    caseAriaSuffix: 'folgt in Kürze',
    casePhotoLabel: 'Foto folgt',
    caseBadge: 'In Kürze',
    caseBody:
      'Ein abgeschlossener Auftrag — Fahrzeug, Foto, Durchlaufzeit und was uns unterwegs begegnet ist. Wir veröffentlichen ihn erst mit Zustimmung des Kunden.',
    linkPrimaryLabel: 'Ein vollständig durchgerechnetes Beispiel-Projekt ansehen',
    linkPrimaryHref: '/de/beispiel-import/',
    linkSecondaryLabel: 'Referenzen folgen in Kürze',
    linkSecondaryHref: undefined as string | undefined,
  },
  tiers: {
    eyebrow: 'Unsere Quellen',
    heading: 'Zwei Beschaffungswege, zwei Disziplinen.',
    intro:
      'Beide Wege haben ihre eigenen Stärken. Auf dem deutschen Markt arbeiten wir als unabhängiger Kaufagent auf Ihrer Seite: bundesweite, gezielte Suche, persönliche Besichtigung vor dem Kauf, Verhandlung in Ihrem Interesse. Japan ist die Route für Performance-Ausführungen, Klassiker und Exemplare mit sehr niedriger Laufleistung, die in Europa selten geworden sind. Im Erstgespräch klären wir, welcher Weg zu Ihrer Suche passt.',
    de: {
      tag: 'Deutscher Markt',
      title: 'Ihr Kaufagent — volles Spektrum, schnell verfügbar',
      time: '2 — 4 Wochen Durchlaufzeit',
      descHtml:
        'Der deutsche Premium-Markt bietet das breiteste Angebot an BMW, Mercedes-Benz, Audi und Porsche — vom Daily Driver bis zur Performance-Ausführung. Der Engpass ist nicht das Angebot, sondern die Selektion. <strong>Wir wählen ausschließlich Exemplare mit lückenloser Wartungshistorie</strong> und sauber dokumentierter Herkunft — und stehen bei Besichtigung und Verhandlung auf Ihrer Seite, nicht auf der des Verkäufers.',
      imgAlt: 'Schwarze Mercedes-Benz C-Klasse in Dreiviertel-Frontansicht auf der Straße',
      bullets: [
        { bold: 'Volles Modellspektrum', extra: ' innerhalb unserer 4 Marken — vom Daily Driver bis AMG/M/RS' },
        { bold: 'Lückenlose Wartungshistorie Pflicht', extra: ' — ohne Ausnahme' },
        { bold: '', extra: 'Bewährte Händler und unabhängige Prüfpartner (TÜV, DEKRA, KÜS) im Netzwerk' },
        { bold: '', extra: 'Persönliche Besichtigung vor jedem Gebot' },
        { bold: '', extra: 'Bundesweite Suche — unabhängige Beratung, ohne Provision vom Verkäufer' },
        { bold: '', extra: 'Auf Wunsch Lieferung bis an die Haustür' },
      ],
    },
    jp: {
      tag: 'Aus Japan',
      title: 'Performance, Klassiker, niedrige Laufleistung',
      time: '12 — 14 Wochen Durchlaufzeit',
      descHtml:
        'Japan hat eine einzigartige LHD-Nische: 911 in allen Generationen, AMG- und M-Ausführungen, RS-Modelle sowie Klassiker wie 993, R107 und W124 Cosworth — oft mit sehr niedrigen Laufleistungen dank japanischer Fahrgewohnheiten und der strengen zweijährlichen Shaken-Prüfung. Nicht die Route für einen gewöhnlichen Daily — dafür genügt der heimische Markt.',
      imgAlt: 'Porsche 911 auf einer Ginza-Straße in Tokio',
      bullets: [
        'Starker Fokus auf 911, AMG, M-Performance, RS-Ausführungen und Klassiker',
        'Nach unserer Erfahrung meist deutlich niedrigere Laufleistungen als vergleichbare EU-Angebote',
        'Im größten Teil Japans kein Streusalz — geringeres Rostrisiko',
        'Offizielle Auktionsinspektion (USS, JU, JAA) — grade 4 oder besser',
        'Zugang zu seltenen LHD-Ausführungen, die einst als Neuwagen importiert wurden',
      ],
    },
  },
  grades: {
    eyebrow: 'Japanische Auktionsskala',
    heading: 'Wir akzeptieren nur grade 4 oder besser.',
    bodyHtml:
      'Jedes Auto auf einer japanischen Auktion wird unabhängig begutachtet. Die Skala reicht von 1 bis 5, mit grade 6 oder S für (nahezu) Neuzustand und Buchstaben-Codes (R, RA) für Reparaturhistorie. Wir sourcen ausschließlich <strong>4, 4.5 oder 5</strong> ohne R/RA-Codes — darunter steigen die Risiken verborgener Mängel stark an.',
    linkLabel: undefined as string | undefined,
    linkHref: undefined as string | undefined,
    imgAlt: 'Nahaufnahme einer Mercedes-AMG Felge mit Carbon-Keramik-Bremssattel',
  },
  signals: {
    eyebrow: 'Marktsignale',
    heading: 'Was wir zuletzt auf den Auktionen sahen.',
    intro:
      'Eine Auswahl der linksgelenkten Kandidaten, die wir in den vergangenen Wochen auf japanischen Auktionen verfolgt haben — mit unserer indikativen Durchrechnung vom Zuschlagspreis bis zum gelieferten Fahrzeug. So arbeiten wir, Woche für Woche.',
    gradeTitle: 'Zustandsnote auf der japanischen Auktionsskala',
    gradePrefix: 'grade',
    dtHammer: 'Zuschlag ≈',
    dtLanded: 'Landed Cost',
    dtNl: 'Markt-Richtpreis',
    peildatum: 'Mai 2026',
    disclaimerBefore: 'Zahlen indikativ, Stand ',
    disclaimerAfterHtml:
      '. <strong>Dies ist kein aktuelles Angebot</strong> — es ist der Typ Kandidat, den wir für Auftraggeber verfolgen und durchrechnen. Die Landed Cost umfasst Gebühren, Transport sowie Einfuhrabgaben und Zulassung; Einfuhrabgaben und Zulassung rechnen wir vorab transparent für Ihr Land durch.',
    cta: 'Suchen Sie so etwas? Hinterlassen Sie Ihr Suchprofil',
    ctaHref: '#zoekprofiel',
  },
  quote: {
    eyebrow: 'Unsere Disziplin',
    text:
      'Ein Auto ist eine Entscheidung mit langem Atem. Wir nehmen uns die Zeit, das richtige Exemplar zu finden — nicht das erstbeste. Keine Quoten, kein Massenimport, kein Druck auf den Kunden. Stattdessen: Recherche, Geduld und die Bereitschaft, Nein zu sagen zu allem, was nur fast gut ist.',
    name: 'Theo Rolvink',
    title: 'Gründer — langjährige Erfahrung im An- und Verkauf von Automobilen und Motorrädern',
  },
  zoekprofiel: {
    label: 'Keine Eile, aber präzise',
    headingHtml: 'Hinterlassen Sie Ihr <span class="accent">Suchprofil</span>.',
    intro:
      'Noch kein konkretes Exemplar im Blick? Sagen Sie uns, was Sie suchen. Sobald ein passender Kandidat auf einer Auktion auftaucht, melden wir uns — mit Sheet, Fotos und unserer Durchrechnung. Unverbindlich, ohne Verkaufsdruck.',
    usps: [
      'Wir bieten erst nach Ihrem ausdrücklichen grünen Licht',
      'Nur grade 4+ und keine Schadenshistorie',
      'Ein direkter Draht zu Theo — kein Callcenter',
    ],
    honeypotLabel: 'Dieses Feld bitte leer lassen',
    requiredNoteHtml:
      'Hinterlassen Sie mindestens Ihre <strong>E-Mail oder Telefonnummer</strong> — alles Weitere hilft uns, gezielter zu suchen.',
    optional: '(optional)',
    fields: {
      naam: { label: 'Ihr Name', placeholder: 'Vorname' },
      email: { label: 'E-Mail-Adresse', placeholder: 'name@beispiel.de' },
      telefoon: { label: 'Telefon', placeholder: '+49 151 23456789' },
      merk: { label: 'Marke', choose: 'Bitte wählen…', unsure: 'Noch unentschieden' },
      model: { label: 'Modell / Ausführung', placeholder: 'z. B. SL 500, M3, Cayman S' },
      budget: {
        label: 'Budget (fahrbereit geliefert)',
        choose: 'Bitte wählen…',
        options: ['bis € 15.000', '€ 15.000 – 25.000', '€ 25.000 – 40.000', '€ 40.000 – 75.000', '€ 75.000+'],
      },
      bron: { label: 'Beschaffungsmarkt', none: 'Keine Präferenz', options: ['Japan', 'Deutschland / Europa'] },
      termijn: {
        label: 'Zeitrahmen',
        choose: 'Bitte wählen…',
        options: ['So schnell wie möglich', 'Innerhalb von 3 Monaten', 'Dieses Jahr', 'Noch in der Orientierung'],
      },
    },
    submit: 'Suchprofil senden',
    or: 'oder',
    waButton: 'Lieber direkt per WhatsApp',
    noteHtml:
      'Wir antworten in der Regel innerhalb von 24 Stunden. Lieber anrufen oder mailen? <a href="/de/kontakt/">Zum Kontaktformular</a>.',
    js: {
      emailInvalid: 'Bitte prüfen Sie die E-Mail-Adresse — Format name@beispiel.de.',
      contactRequired: 'Bitte hinterlassen Sie eine E-Mail-Adresse oder Telefonnummer.',
      successHtml:
        '<strong>Vielen Dank — Ihr Suchprofil ist eingegangen.</strong><br>Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.',
      errorFallback: 'Das Absenden hat nicht geklappt.',
      errorRetryPrefix: ' Sie können es erneut versuchen oder ',
      errorRetryLink: 'eine WhatsApp-Nachricht senden',
      errorRetrySuffix: '.',
      unknownError: 'Unbekannter Fehler',
      waIntro: 'Hallo Theo, hier ist mein Suchprofil:',
      waLabels: {
        merk: 'Marke',
        model: 'Modell/Ausführung',
        budget: 'Budget',
        bron: 'Beschaffungsmarkt',
        termijn: 'Zeitrahmen',
        naam: 'Name',
        email: 'E-Mail',
        telefoon: 'Telefon',
      },
      waNone: 'keine Präferenz',
    },
  },
  cta: {
    label: 'Der nächste Schritt',
    headingHtml: 'Bereit für Ihren nächsten<br/><span class="accent">Neuzugang</span>?',
    body: 'Zwei Wege zum Start: Hinterlassen Sie oben Ihr Suchprofil, oder vereinbaren Sie zunächst ein unverbindliches Gespräch.',
    primary: 'Suchauftrag starten',
    primaryHref: '#zoekprofiel',
    secondary: 'Lieber erst sprechen? Gespräch vereinbaren →',
    secondaryHref: '/de/kontakt/',
  },
};

export default home;
