// NL — tarieven-pagina. Exacte strings uit de oorspronkelijke pagina.
const tarieven = {
  meta: {
    title: "Tarieven — sourcing auto's & motoren | Rolvink",
    description:
      'Transparante tarieven: sourcing Duitsland vanaf €2.250, Japan €3.250, en het nieuwe motor-traject vanaf €1.250 — met gefaseerde betalingen.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Tarieven',
  eyebrow: 'Tarieven',
  h1Html: 'Transparante prijzen <span class="accent">vóór</span> u tekent.',
  lead: 'Wij rekenen geen kickback over BPM-besparing, geen marge op de aanschafprijs en geen verborgen handling-fee. U betaalt onze sourcing-fee in fasen — zodat uw werkkapitaal niet maandenlang stilstaat op de oceaan.',
  ctaHref: '/contact',
  de: {
    tag: 'Snelste route',
    heading: 'Sourcing-traject Duitsland',
    price: 'vanaf € 2.250',
    vat: 'incl. btw',
    leadText:
      'Voor wie binnen 2 tot 4 weken in de auto wil rijden. Wij sourcen bij erkende Duitse premium-dealers, bezichtigen ter plaatse en regelen het volledige traject tot aflevering aan huis.',
    imgAlt: 'Zwarte BMW M4 onderweg — sourcing-traject Duitsland',
    phasesHeading: 'Gefaseerde betaling',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 750',
        when: 'Bij start — retainer',
        body: 'Vóór wij gaan zoeken. Verrekenbaar met de eindfee bij succesvolle aankoop. Niet-restitueerbaar bij annulering door opdrachtgever na bod-akkoord.',
      },
      {
        step: 'Fase 2',
        amount: '€ 1.500',
        when: 'Bij aflevering — restbetaling',
        body: 'Bij sleuteloverdracht op uw adres in Nederland, met kenteken, APK en alle documentatie compleet.',
      },
    ],
    inclHeading: 'Wat ons traject inhoudt',
    incl: [
      'Intake-gesprek + profiel-document met must-haves en deal-breakers',
      "Kandidaatvoorstellen (3-5 auto's binnen 1-2 weken)",
      'Bezichtiging ter plaatse in Duitsland vóór bod',
      'Dealer-onderhandeling op uw belang, transport DE→NL, RDW-keuring, BPM-aangifte via voordeligste methode, kentekening',
      'Aflevering aan huis in NL',
    ],
    scope:
      'Aanschafprijs van de auto, BPM, transport en RDW-kosten betaalt u zelf rechtstreeks (transparant gerapporteerd, geen marge bij ons).',
    cta: 'Plan intake-gesprek',
  },
  jp: {
    tag: 'Onze specialisatie',
    heading: 'Sourcing-traject Japan',
    price: '€ 3.250',
    vat: 'incl. btw',
    leadText:
      'Voor wie een zeldzame LHD-uitvoering uit Japan zoekt — lagere kilometers, droger klimaat, Shaken-discipline. Reken op 10 tot 14 weken vanaf veiling tot Nederlandse kentekenplaat.',
    imgAlt: 'Porsche 911 in nachtelijk Ginza, Tokio — sourcing-traject Japan',
    phasesHeading: 'Gefaseerde betaling — drie fases',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 1.250',
        when: 'Bij start — retainer',
        body: 'Vóór wij beginnen met de gerichte veiling-screening op USS, JU en JAA. Verrekenbaar met eindfee bij succes.',
      },
      {
        step: 'Fase 2',
        amount: 'Aanschaf + transport',
        when: 'Direct na hammer-down',
        body: 'U betaalt de gewonnen auctie-prijs (in yen, gecommuniceerd vooraf) plus binnen-Japan-transport en RoRo-zeevracht. U koopt de auto direct via volmacht; wij staan ertussen als coördinator, niet als wederverkoper.',
      },
      {
        step: 'Fase 3',
        amount: '€ 2.000 + invoer',
        when: 'Bij aflevering — restbetaling',
        body: 'Restant sourcing-fee € 2.000 plus 10% invoerrechten, 21% BTW, BPM en RDW-kosten. Pas bij sleuteloverdracht in Nederland.',
      },
    ],
    inclHeading: 'Wat ons Japan-traject inhoudt',
    incl: [
      'Uitgebreid intake-gesprek (90 min) — profiel, conditie-grens, kleurvoorkeur, must-haves',
      'Gerichte JCD/USS/JU/JAA-screening met Nederlandstalige sheet-vertaling per kandidaat',
      'Bod-strategie en bieden via onze gevestigde Japanse export-partner',
      'Coördinatie binnenlands transport Japan, exportformaliteiten, RoRo-zeevracht',
      'Douane-afhandeling Rotterdam, RDW-keuring, BPM-aangifte, kentekening',
      'Aflevering aan huis in NL',
    ],
    scope:
      'Aanschafprijs (yen), binnenlands transport Japan, RoRo, douane-heffingen, BPM en RDW betaalt u zelf. Wij coördineren elke betaling transparant — u ziet elke factuur.',
    cta: 'Plan intake-gesprek',
  },
  moto: {
    tag: 'Nieuw — Motoren',
    heading: 'Sourcing-traject Motor',
    price: '€ 1.250',
    vat: 'incl. btw',
    leadText:
      'Voor de import van een (BMW-)motor uit Duitsland. Binnen de EU, dus geen invoerrechten of zeevracht — doorgaans 1 tot 3 weken. Wij sourcen op mobile.de en Kleinanzeigen.de, beoordelen de modelspecifieke zwakke punten, en regelen alles tot Nederlands kenteken.',
    imgAlt: 'Open bergweg bij gouden uur — sourcing-traject motoren',
    phasesHeading: 'Gefaseerde betaling',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 500',
        when: 'Bij start — retainer',
        body: 'Vóór wij gaan zoeken. Verrekenbaar met de eindfee bij succesvolle aankoop.',
      },
      {
        step: 'Fase 2',
        amount: '€ 750',
        when: 'Bij aflevering — restbetaling',
        body: 'Bij overdracht met Nederlands kenteken en alle documentatie compleet.',
      },
    ],
    inclHeading: 'Wat ons motor-traject inhoudt',
    incl: [
      'Intake + profiel: model, bouwjaar, uitvoering en budget',
      'Gerichte screening op mobile.de en Kleinanzeigen.de',
      'Beoordeling van de modelspecifieke aandachtspunten (recalls, servorem, oliepomp, etc.)',
      'Onderhandeling, transport DE→NL, RDW-keuring, motor-BPM-aangifte en kentekening',
      'Aflevering met Nederlands kenteken',
    ],
    scopeHtml:
      'Aanschafprijs, transport, motor-BPM en RDW betaalt u zelf, transparant gerapporteerd zonder marge bij ons. Zie de <a href="/kennisbank/motor-bpm-importeren">motor-BPM-pagina</a> en het <a href="/motoren">motoren-overzicht</a>.',
    cta: 'Plan intake-gesprek',
  },
  extra: {
    heading: 'Losse diensten',
    lead: 'Niet elke vraag vereist een volledig sourcing-traject. Voor specifieke onderdelen van het importproces kunt u losse diensten afnemen.',
    items: [
      {
        title: 'DRZ-taxatierapport voor tegenbewijsregeling',
        price: '€ 350',
        body: 'Fysieke taxatie door een erkende DRZ-taxateur, te gebruiken als onderbouwing voor de BPM-aangifte volgens de tegenbewijsregeling.',
      },
      {
        title: 'Intake-gesprek',
        price: 'Gratis',
        body: 'Online via Google Meet, WhatsApp of telefonisch — maximaal 60 minuten (Duitsland-route) of 90 minuten (Japan-route). Geen verkoopdruk, eerlijk advies of er een match is.',
      },
    ],
  },
  transparency: {
    heading: 'Onze financiële spelregels',
    itemsHtml: [
      '<strong>Geen kickback op BPM-besparing.</strong> Wat wij voor u besparen via de gunstigste methode komt 100% bij u terecht. Wij rekenen onze sourcing-fee, niets meer.',
      '<strong>Geen marge op de aanschafprijs.</strong> U betaalt rechtstreeks aan de Duitse dealer of via de Japanse veiling-partner. Wij koppelen elk bedrag terug met factuur.',
      '<strong>Geen verborgen handling-kosten.</strong> Transport, douane, BPM, RDW worden tegen kostprijs doorberekend, met onderliggende facturen.',
      '<strong>Heldere voorwaarden vooraf.</strong> Vóór de retainer ondertekent u een opdrachtovereenkomst waarin de scope, betalingsfasen en annuleringsregeling expliciet staan vermeld.',
    ],
    footerHtml:
      'Wilt u zien hoe deze tarievenstructuur uitpakt in de praktijk? Een volledig doorgerekende W212-case staat op <a href="/voorbeeld-traject">/voorbeeld-traject</a>. Twijfelt u tussen Japan en Duitsland? Gebruik de <a href="/route-advies">route-advies-tool</a>. Een indicatieve BPM-berekening krijgt u via de <a href="/bpm-calculator">BPM-tool</a>.',
  },
  pageCta: {
    heading: 'Bespreek uw zoekopdracht — vrijblijvend.',
    body: 'Een gratis intake-gesprek (Google Meet, WhatsApp of telefoon) waarin we uw profiel, route en realistische landed-cost doornemen. Geen verkoopdruk, geen verplichtingen.',
    btn: 'Plan vrijblijvend intake-gesprek',
    note: 'Binnen 24 uur reactie',
  },
};

export default tarieven;
export type TarievenDict = typeof tarieven;
