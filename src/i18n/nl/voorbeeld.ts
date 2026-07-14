// NL — voorbeeld-traject-pagina. Exacte strings uit de oorspronkelijke pagina.
const voorbeeld = {
  meta: {
    title: 'Voorbeeld-traject: wat kost een auto-import? | Rolvink',
    description:
      'Een compleet sourcing-traject doorgerekend: aankoop, transport, BPM, RDW en onze fee — transparant uitgesplitst voor een concrete W212-case.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Voorbeeld-traject',
  eyebrow: 'Voorbeeld-traject',
  h1Html: 'Wat kost een <span class="accent">import-traject</span>?',
  lead: 'Eén concrete case, volledig doorgerekend. Van hammerprijs op de Japanse veiling tot aflevering aan uw oprit in Welsum. Alle posten, geen verborgen marges.',
  heroImgAlt: 'Representatief beeld van een Mercedes-Benz E-Klasse (W212)',
  heroCaption: 'Representatief beeld — de voorbeeldcase betreft een Mercedes E 300 4MATIC (W212).',
  disclaimerHtml:
    '<strong>Wat dit is — en wat het niet is.</strong> Onderstaande berekening is een <em>voorbeeldcase</em> met een fictief gekozen voertuig om de structuur van een typisch traject inzichtelijk te maken. Werkelijke bedragen variëren per individuele auto, wisselkoers, BPM-methode, RDW-doorlooptijd en eventuele extra werkzaamheden. Bedragen zijn afgerond op tientallen euro\'s. Voor uw eigen zoekopdracht maken wij een onderbouwde landed-cost-prognose vóór bod — dit is geen tarievenlijst.',
  vehicle: {
    heading: 'Het voertuig in deze case',
    specs: [
      { dt: 'Merk & model', dd: 'Mercedes-Benz E300 4MATIC Avantgarde (W212)' },
      { dt: 'Bouwjaar', dd: '2014' },
      { dt: 'Motor', dd: '3.5L V6 benzine, 252 pk' },
      { dt: 'Kilometerstand', dd: '48.000 km (laag)' },
      { dt: 'Conditie', dd: 'JCD-grade 4 (goed)' },
      { dt: 'Herkomst', dd: 'Japanse veiling — LHD-uitvoering' },
      { dt: 'Hammerprijs', dd: '¥1.040.000 (~€6.150 bij koers 169 ¥/€)' },
    ],
  },
  table: {
    heading: 'De volledige opbouw',
    colCategory: 'Categorie',
    colItem: 'Post',
    colAmount: 'Bedrag',
    sections: [
      {
        header: '1. Aankoop in Japan',
        rows: [
          { item: 'Hammerprijs veiling', amount: '€ 6.150' },
          { item: 'Auction-huis fees + commission', amount: '€ 480' },
          { item: 'Binnenlands transport JP + exportkeuring', amount: '€ 720' },
        ],
      },
      {
        header: '2. Zeevracht en aankomst',
        rows: [
          { item: 'RoRo Yokohama → Rotterdam (incl. transit-verzekering)', amount: '€ 1.000' },
          { item: 'Douane-expediteur + papierwerk NL', amount: '€ 400' },
        ],
        subtotal: { item: 'CIF-waarde (basis voor douane)', amount: '€ 8.750' },
      },
      {
        header: '3. Belastingen',
        rows: [
          { item: 'Invoerrechten 10% over CIF (HS 8703)', amount: '€ 875' },
          { item: 'BTW 21% over (CIF + invoerrechten)', amount: '€ 2.021' },
          { item: 'BPM via koerslijst-methode (V6, 2014, leeftijdsafschrijving ~85%)', amount: '€ 1.150' },
        ],
      },
      {
        header: '4. NL-formaliteiten en voorbereiding',
        rows: [
          { item: 'RDW-keuring + identificatie + kentekenkosten', amount: '€ 450' },
          { item: 'EU-compliance aanpassingen (kentekenverlichting, mistlicht achter)', amount: '€ 280' },
          { item: 'Reconditionering + poetsbeurt', amount: '€ 320' },
        ],
      },
      {
        header: '5. Onze service-fee',
        rows: [
          { item: 'Sourcing-fee (intake, zoekopdracht, biedstrategie, agent in Japan)', amount: '€ 1.250' },
          { item: 'Operationele fee (3% over CIF, transport en NL-traject)', amount: '€ 460' },
        ],
      },
    ],
    total: { item: 'Totale landed cost — all-in', amount: '€ 15.556' },
    noteHtml:
      '<em>Alle bedragen indicatief, gebaseerd op koers en tarieven mei 2026. BPM via koerslijst-methode (zie ook onze <a href="/kennisbank/bpm-importauto-2026">BPM-gids</a>); forfait zou €1.400 zijn, DRZ-taxatie ~€1.250. Wij rekenen alle drie methoden door en kiezen de gunstigste.</em>',
  },
  explain: {
    heading: 'Toelichting per categorie',
    blocks: [
      {
        heading: '1. Aankoop in Japan — €7.350',
        bodyHtml:
          'Hammerprijs is de prijs die op de veiling-klok valt. Daarbovenop komen <strong>auction-huis fees</strong> (typisch 4-8% van hammer), <strong>commission</strong> van onze Japanse agent, en <strong>binnenlands transport</strong> van de veilinglocatie naar de exporthaven (vaak Yokohama of Kobe) inclusief exportkeuring en de-registratie van het Japanse kenteken.',
      },
      {
        heading: '2. Zeevracht en aankomst — €1.400',
        bodyHtml:
          '<strong>RoRo</strong> (Roll-on Roll-off) is de standaard methode voor auto-transport over zee — de auto wordt op eigen wielen het schip op- en afgereden. Duurt gemiddeld 5-6 weken Yokohama naar Rotterdam, soms uitlopend tot 7-8 weken bij seizoenseffect. Transit-verzekering zit standaard in onze tarief. <strong>Douane-expediteur</strong> handelt de inklaring in Rotterdam af.',
      },
      {
        heading: '3. Belastingen — €4.046',
        bodyHtml:
          '<strong>Invoerrechten</strong> 10% over CIF-waarde (HS-code 8703 voor personenauto\'s). <strong>BTW</strong> 21% over CIF + invoerrechten — let op: dit geldt voor "nieuwe" import; voor gebruikte auto\'s uit Duitsland zou dit nul zijn omdat de Duitse BTW al is voldaan. Voor Japan altijd verschuldigd. <strong>BPM</strong> via koerslijst, DRZ-taxatie of forfait — wij kiezen de gunstigste methode. Voor deze W212 is koerslijst het voordeligst (€1.150).',
      },
      {
        heading: '4. NL-formaliteiten en voorbereiding — €1.050',
        bodyHtml:
          'De auto gaat door de RDW-keuring inclusief identificatie en APK. <strong>EU-compliance aanpassingen</strong> kunnen nodig zijn voor Japanse imports — bijvoorbeeld een tweede mistlicht achter, of een aanpassing aan kentekenverlichting. De <strong>reconditionering</strong> bevat een professionele poetsbeurt en eventuele kleine cosmetische correcties.',
      },
      {
        heading: '5. Onze service-fee — €1.710',
        bodyHtml:
          'De <strong>sourcing-fee</strong> dekt het complete voortraject: intake-gesprek, profiel-uitwerking, wekelijkse veiling-screening, vertaling van auction sheets, advies over biedstrategie, en bod-coördinatie met onze Japanse agent. De <strong>operationele fee</strong> (3% over CIF + transport + NL-werkzaamheden) dekt de afhandeling van transport, inklaring, RDW-coördinatie en aflevering. Geen verborgen percentages bovenop hammerprijs, geen marge op brandstofkosten.',
      },
    ],
  },
  variants: {
    heading: 'Wanneer wijken werkelijke cijfers af?',
    itemsHtml: [
      '<strong>Andere wisselkoers</strong> — een ±5% beweging op de yen-euro koers verandert de hammerprijs-omrekening direct. Wij hanteren conservatieve bid-grenzen die ±3% afdekken; bij grotere bewegingen wachten we op stabilisatie.',
      '<strong>Hogere of lagere hammerprijs</strong> — de basis verandert. Alle proportionele kosten (BTW, fees) verschuiven mee.',
      '<strong>Zwaardere BPM</strong> — voor V8-uitvoeringen of jongere auto\'s met hoge CO₂ kan BPM €2.000-€4.000 hoger uitkomen. Zie onze <a href="/kennisbank/bpm-importauto-2026">BPM-gids 2026</a> voor de drie methoden en wanneer welke voordelig is.',
      '<strong>Duitsland-route i.p.v. Japan</strong> — geen RoRo (€1.000 weg), wel persoonlijke bezichtiging (€280-€450 inclusief reisdag). Geen invoerrechten en geen extra Nederlandse BTW omdat het EU-binnenmarkt is. Andere kostenstructuur, vergelijkbare totaalwaarde.',
      '<strong>Klassieker boven 25 of 40 jaar</strong> — verlaagd BPM-regime of volledige vrijstelling. Voor klassiekers zijn bovendien verlaagde invoerrechten van toepassing onder bepaalde voorwaarden (HS-code 9705). Kan duizenden euro\'s schelen.',
      '<strong>Aanvullende werkzaamheden</strong> — keramische coating, lederrenovatie, specifieke modificaties zijn optioneel en lopen apart via geselecteerde detailing-partners. Geen marge op onze fee.',
    ],
  },
  promise: {
    heading: 'Onze belofte rond transparantie',
    paragraphsHtml: [
      'Vóór elk bod ontvangt u een onderbouwde landed-cost-prognose voor uw specifieke kandidaatauto — met dezelfde structuur als hierboven. Onze service-fee staat van begin tot eind vast op het bedrag dat in uw opdrachtbevestiging is afgesproken; geen percentages die later opduiken. Wisselkoersrisico, BPM-uitkomst en RDW-doorlooptijd communiceren wij eerlijk als variabel — en u krijgt voor elke variabel een conservatieve bandbreedte aangereikt.',
      'Dat is wat wij bedoelen met <em>transparantie zonder verborgen marges</em>: niet "u krijgt geen rekening", maar "u krijgt elke rekening op tafel". De volledige tarievenstructuur (Duitsland-route, Japan-route, losse diensten) staat op de <a href="/tarieven">tarieven-pagina</a>.',
    ],
  },
  pageCta: {
    heading: 'Landed cost voor úw zoekopdracht?',
    body: 'Vertel ons wat u zoekt — wij maken een onderbouwde prognose met dezelfde structuur als deze voorbeeldcase.',
    btn: 'Plan intake-gesprek',
    note: 'Binnen 24 uur reactie · Geen verkoopdruk',
  },
  ctaHref: '/contact',
};

export default voorbeeld;
export type VoorbeeldDict = typeof voorbeeld;
