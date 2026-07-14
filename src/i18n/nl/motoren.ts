// NL — motoren-pagina. Exacte strings uit de oorspronkelijke pagina.
const motoren = {
  meta: {
    title: 'BMW-motoren importeren uit Duitsland — Rolvink Premium Imports',
    description:
      'Persoonlijke sourcing van BMW-motoren uit Duitsland: van R 1250 GS tot klassieke airhead. Wij regelen sourcing, beoordeling, transport, RDW en motor-BPM tot NL-kenteken. Traject vanaf €1.250.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Motoren',
  eyebrow: 'Nieuw — Motoren',
  h1Html: 'BMW-motoren importeren uit <span class="accent">Duitsland</span>.',
  heroLead:
    'Een persoonlijke sourcing-service voor BMW-motoren — van een frisse R 1250 GS tot een klassieke airhead. Wij vinden de juiste motor in Duitsland, beoordelen de modelspecifieke zwakke punten, en regelen de hele import tot Nederlands kenteken. Met 35 jaar BMW-passie als basis.',
  heroBtn: 'Plan intake-gesprek',
  heroLink: 'Traject vanaf €1.250 — bekijk tarieven →',
  heroLinkHref: '/tarieven',
  ctaHref: '/contact',
  introHeading: 'Waarom een BMW-motor uit Duitsland?',
  introParagraphsHtml: [
    'Duitsland heeft de grootste tweedehands-motormarkt van Europa. Op een doorsnee dag staan er meer dan 14.000 BMW-motoren te koop — een veelvoud van het Nederlandse aanbod. Dat betekent meer keuze in uitvoering, kleur en optieniveau, en op recente modellen een prijsvoordeel dat oploopt tot circa €5.000 ten opzichte van een vergelijkbare Nederlandse occasion.',
    "En anders dan bij import uit Japan ligt Duitsland binnen de EU: geen invoerrechten, geen zeevracht, geen douane. Een motor staat doorgaans binnen 1 tot 3 weken op Nederlands kenteken. De BPM op motoren is bovendien veel lager en simpeler dan op auto's — bij oudere modellen vaak slechts een paar honderd euro. Zo blijft de import overzichtelijk en de eindprijs voorspelbaar.",
    'Wij zijn geen handelaar met voorraad die je iets wil verkopen. Wij zoeken en kopen <strong>uitsluitend op jouw concrete opdracht</strong>, beoordelen elk exemplaar kritisch op de bekende zwakke punten van dat model, en staan aan jouw kant bij de onderhandeling. BMW kennen we al 35 jaar — die kennis zetten we in om de juiste motor te vinden, niet de eerste de beste.',
  ],
  usps: [
    { title: 'Groot aanbod', body: '14.000+ BMW-motoren op de Duitse markt — gerichte keuze in uitvoering en kleur.' },
    { title: 'Lage motor-BPM', body: 'Veel lager en simpeler dan auto-BPM — bij oudere motoren vaak een paar honderd euro.' },
    { title: 'Snel & binnen de EU', body: 'Geen invoerrechten, geen zeevracht. Doorlooptijd doorgaans 1-3 weken.' },
  ],
  stepsHeading: 'Zo werken we',
  stepsIntro:
    'Van eerste gesprek tot aflevering met Nederlands kenteken. Transparant, op jouw tempo, en met het transport en de formaliteiten volledig door ons geregeld.',
  stappen: [
    { num: '01', title: 'Intake-gesprek', body: 'Vrijblijvend — online, via WhatsApp of in Welsum. We brengen je wensen, budget en tijdslijn in kaart en bepalen welk model en bouwjaar bij je passen. Geen verkoopdruk; bij twijfel zeggen we het eerlijk.' },
    { num: '02', title: 'Profiel & gerichte zoektocht', body: 'We leggen je zoekopdracht vast — model, uitvoering, bouwjaar, kilometerstand, kleur, must-haves — en screenen daarop mobile.de en Kleinanzeigen.de. Pas na jouw akkoord starten we actief.' },
    { num: '03', title: 'Kandidaten + beoordeling', body: "Je krijgt passende kandidaten met foto's, onze duiding en de modelspecifieke aandachtspunten (recalls, servorem, oliepomp). We bieden niets aan zonder de zwakke punten van dat type te checken — geen actie zonder jouw groen licht." },
    { num: '04', title: 'Onderhandeling & aankoop', body: 'Na jouw goedkeuring onderhandelen we namens jou, bij voorkeur met bezichtiging vóór koop. We kopen bewust bij particulier of margehandelaar zodat de btw-margeregeling kan gelden. De eindprijs blijft transparant gerapporteerd.' },
    { num: '05', title: 'Transport naar Nederland', body: 'Wij halen je motor zelf op in Duitsland — verzekerd, op onze eigen motortrailer met plek voor twee motoren, dus ritten kunnen slim gecombineerd worden. Binnen de EU, dus geen zeevracht en geen douane; doorgaans 2 tot 5 dagen onderweg. Jij hoeft niets te organiseren.' },
    { num: '06', title: 'RDW, motor-BPM & kenteken', body: 'Na aankomst verzorgen we de RDW-keuring, de (lage) motor-BPM-aangifte via de gunstigste methode, eventuele EU-compliance-aanpassingen en de kentekenregistratie. Doorgaans is het geheel binnen 1 tot 3 weken rond.' },
    { num: '07', title: 'Aflevering', body: 'Zodra het Nederlandse kenteken er is, leveren we de motor rijklaar af — gekeurd, met alle papieren compleet en een eerlijke eindafrekening. Op een door jou gekozen locatie.' },
  ],
  inclHeading: 'Wat wij voor je regelen',
  inclusief: [
    'Wekelijkse, gerichte screening op mobile.de en Kleinanzeigen.de',
    'Beoordeling van staat, historie en modelspecifieke zwakke punten vóór bod',
    'Onderhandeling op jouw belang — bij voorkeur met bezichtiging',
    'Eigen verzekerd transport op onze motortrailer — twee motoren per rit mogelijk',
    'RDW-keuring, motor-BPM-aangifte en Nederlandse kentekening',
    'Eerlijke rijklaar-prijs vooraf, transparante eindafrekening',
  ],
  inclNoteHtml:
    'De aanschafprijs, het transport, de motor-BPM en de RDW-kosten betaal je zelf — transparant gerapporteerd, zonder marge bij ons. Het sourcing-traject kost <strong>€1.250</strong> (gefaseerd: €500 retainer + €750 bij aflevering). Zie de <a href="/tarieven">tarieven</a>.',
  modellenHeading: 'Kies je model',
  cardLinkLabel: 'Bekijk koopgids →' as string | null,
  modellen: [
    { href: '/kennisbank/bmw-r1300gs-koopgids', img: '/images/moto-r1300gs.jpg', title: 'R 1300 GS', tag: 'Adventure · 2023+', desc: 'De nieuwste GS met 1300 ShiftCam-boxer. Grootste euro-voordeel.' },
    { href: '/kennisbank/bmw-r1250gs-koopgids', img: '/images/moto-r1250gs.jpg', title: 'R 1250 GS', tag: 'Adventure · 2019-2024', desc: 'Het volumemodel. ShiftCam-boxer, ~€5.000 voordeel uit Duitsland.' },
    { href: '/kennisbank/bmw-r1150gs-koopgids', img: '/images/moto-r1150gs.jpg', title: 'R 1150 GS', tag: 'Klassiek · 1999-2005', desc: 'De oilhead-klassieker. Let op de Integral ABS servorem.' },
    { href: '/kennisbank/bmw-rninet-koopgids', img: '/images/moto-rninet.jpg', title: 'R nineT', tag: 'Modern classic', desc: 'De laatste lucht/oliegekoelde boxer. Customizing-icoon.' },
    { href: '/kennisbank/bmw-s1000-koopgids', img: '/images/moto-s1000.jpg', title: 'S 1000 RR / XR / R', tag: 'Sport', desc: 'De viercilinder superbike-familie: RR, adventure-sport XR en roadster R.' },
    { href: '/kennisbank/bmw-k1600-koopgids', img: '/images/moto-k1600.jpg', title: 'K 1600 GT / GTL', tag: 'Luxe tourer', desc: 'De fluwelen zescilinder. Niche met trouwe kopers en mooie marge.' },
    { href: '/kennisbank/bmw-f850gs-f750gs-koopgids', img: '/images/moto-f850gs.jpg', title: 'F 750 / 850 / 900 GS', tag: 'Middensegment', desc: 'De toegankelijke GS met tweecilinder. Lichter en betaalbaarder.' },
    { href: '/kennisbank/bmw-r80-r100-airhead-koopgids', img: '/images/moto-airhead.jpg', title: 'R 80 / R 100 airhead', tag: 'Collector', desc: 'De luchtgekoelde klassiekers. R 80 G/S vond het adventure-genre uit.' },
  ] as Array<{ href?: string; img: string; title: string; tag: string; desc: string; alt?: string }>,
  gidsenHeading: 'Importeren, kosten & techniek' as string | null,
  gidsenLinkLabel: 'Lees verder →',
  gidsen: [
    { href: '/kennisbank/bmw-motor-importeren-duitsland', title: 'Importeren uit Duitsland', desc: 'Prijzen per model, het proces en waarom Duitsland de bron is.' },
    { href: '/kennisbank/bmw-motoren-prijspeiling-2026', title: 'Prijspeiling DE vs NL', desc: 'Live prijsvergelijking per modelfamilie (juni 2026).' },
    { href: '/kennisbank/motor-bpm-importeren', title: 'Motor-BPM', desc: 'Waarom motor-BPM veel lager is dan auto-BPM.' },
    { href: '/kennisbank/bmw-boxermotoren-gids', title: 'Boxermotoren techniekgids', desc: 'Van airhead tot ShiftCam, met zwakke punten per generatie.' },
    { href: '/kennisbank/bmw-k-serie-motoren-gids', title: 'K-serie techniekgids', desc: 'Van flying brick tot de zescilinder K 1600.' },
    { href: '/kennisbank/faq-motor-importeren', title: 'FAQ motoren', desc: 'De meest gestelde vragen, kort beantwoord.' },
  ] as Array<{ href: string; title: string; desc: string }> | null,
  pageCta: {
    heading: 'Een BMW-motor op het oog?',
    body: 'Vertel ons model, bouwjaar, uitvoering en budget — wij screenen de Duitse markt, beoordelen de staat, en regelen de hele import met een eerlijke rijklaar-prijs vooraf. Sourcing-traject motor: €1.250 (gefaseerd).',
    btn: 'Plan intake-gesprek',
    note: 'Binnen 24 uur reactie · Geen verkoopdruk',
  },
  howTo: {
    name: 'BMW-motor importeren uit Duitsland — werkwijze',
    description:
      'Het complete motor-sourcingtraject van Rolvink Premium Imports, van intake tot aflevering met Nederlands kenteken.',
  },
};

export default motoren;
export type MotorenDict = typeof motoren;
