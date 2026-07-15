// EN — example-import page.
const voorbeeld = {
  meta: {
    title: 'Example Import: What Does It Cost? | Rolvink',
    description:
      'A complete sourcing project fully costed: purchase, transport, taxes and our fee — transparently itemised for a concrete W212 case delivered in the Netherlands.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Example import',
  eyebrow: 'Example import',
  h1Html: 'What does an <span class="accent">import project</span> cost?',
  lead: 'One concrete case, fully calculated. From hammer price at the Japanese auction to delivery on the driveway. Every line item, no hidden margins.',
  heroImgAlt: 'Representative image of a Mercedes-Benz E-Class (W212)',
  heroCaption: 'Representative image — the example case concerns a Mercedes E 300 4MATIC (W212).',
  disclaimerHtml:
    '<strong>What this is — and what it is not.</strong> The calculation below is an <em>example case</em> with a fictitiously chosen vehicle, to make the structure of a typical project transparent. It is calculated for <strong>delivery and registration in the Netherlands</strong>, including Dutch BPM registration tax. For other EU destinations the tax lines differ — we calculate them for your country before any bid. Actual amounts vary per individual car, exchange rate, tax method, inspection lead time and any additional work. Amounts are rounded to tens of euros. For your own search we prepare a substantiated landed-cost forecast before bidding — this is not a price list.',
  vehicle: {
    heading: 'The vehicle in this case',
    specs: [
      { dt: 'Brand & model', dd: 'Mercedes-Benz E300 4MATIC Avantgarde (W212)' },
      { dt: 'Model year', dd: '2014' },
      { dt: 'Engine', dd: '3.5L V6 petrol, 252 hp' },
      { dt: 'Mileage', dd: '48.000 km (low)' },
      { dt: 'Condition', dd: 'JCD-grade 4 (good)' },
      { dt: 'Origin', dd: 'Japanese auction — LHD specification' },
      { dt: 'Hammer price', dd: '¥1.040.000 (~€6.150 at a rate of 169 ¥/€)' },
    ],
  },
  table: {
    heading: 'The full breakdown',
    colCategory: 'Category',
    colItem: 'Item',
    colAmount: 'Amount',
    sections: [
      {
        header: '1. Purchase in Japan',
        rows: [
          { item: 'Auction hammer price', amount: '€ 6.150' },
          { item: 'Auction house fees + commission', amount: '€ 480' },
          { item: 'Domestic transport in Japan + export inspection', amount: '€ 720' },
        ],
      },
      {
        header: '2. Sea freight and arrival',
        rows: [
          { item: 'RoRo Yokohama → Rotterdam (incl. transit insurance)', amount: '€ 1.000' },
          { item: 'Customs broker + paperwork', amount: '€ 400' },
        ],
        subtotal: { item: 'CIF value (basis for customs)', amount: '€ 8.750' },
      },
      {
        header: '3. Taxes (Dutch delivery)',
        rows: [
          { item: 'Import duty 10% on CIF (HS 8703)', amount: '€ 875' },
          { item: 'VAT 21% on (CIF + import duty)', amount: '€ 2.021' },
          { item: 'Dutch BPM via trade-list method (V6, 2014, age depreciation ~85%)', amount: '€ 1.150' },
        ],
      },
      {
        header: '4. Dutch formalities and preparation',
        rows: [
          { item: 'RDW inspection + identification + registration costs', amount: '€ 450' },
          { item: 'EU-compliance adjustments (plate lighting, rear fog light)', amount: '€ 280' },
          { item: 'Reconditioning + full detail', amount: '€ 320' },
        ],
      },
      {
        header: '5. Our service fee',
        rows: [
          { item: 'Sourcing fee (intake, search, bid strategy, agent in Japan)', amount: '€ 1.250' },
          { item: 'Operational fee (3% on CIF, transport and local handling)', amount: '€ 460' },
        ],
      },
    ],
    total: { item: 'Total landed cost — all-in', amount: '€ 15.556' },
    noteHtml:
      '<em>All amounts indicative, based on exchange rates and tariffs of May 2026. Dutch BPM via the trade-list method; the flat-rate method would be €1.400, a DRZ valuation ~€1.250. We calculate all three methods and choose the most favourable. For other EU destinations, category 3 is replaced by the taxes of your own country — calculated before any bid.</em>',
  },
  explain: {
    heading: 'Explanation per category',
    blocks: [
      {
        heading: '1. Purchase in Japan — €7.350',
        bodyHtml:
          'The hammer price is the price at which the auction clock stops. On top of that come <strong>auction house fees</strong> (typically 4-8% of hammer), the <strong>commission</strong> of our Japanese agent, and <strong>domestic transport</strong> from the auction site to the export port (usually Yokohama or Kobe), including export inspection and de-registration of the Japanese plates.',
      },
      {
        heading: '2. Sea freight and arrival — €1.400',
        bodyHtml:
          '<strong>RoRo</strong> (Roll-on Roll-off) is the standard method for shipping cars — the car is driven on and off the vessel on its own wheels. It takes on average 5-6 weeks from Yokohama to Rotterdam, occasionally stretching to 7-8 weeks with seasonal effects. Transit insurance is included in our rate as standard. The <strong>customs broker</strong> handles clearance in Rotterdam.',
      },
      {
        heading: '3. Taxes — €4.046',
        bodyHtml:
          '<strong>Import duty</strong> of 10% on the CIF value (HS code 8703 for passenger cars) applies on entry into the EU. <strong>VAT</strong> of 21% on CIF + import duty is the Dutch rate in this example — note: this applies to imports from outside the EU; for a used car from Germany it would be zero, as German VAT has already been paid. For Japan it is always due. <strong>BPM</strong> is the Dutch registration tax, calculated via trade list, DRZ valuation or flat rate — we choose the most favourable method. For this W212, the trade list is the cheapest (€1.150). For registration in another EU country, these lines are replaced by your local rates — we calculate them for your destination before bidding.',
      },
      {
        heading: '4. Dutch formalities and preparation — €1.050',
        bodyHtml:
          'For Dutch delivery, the car goes through the RDW inspection, including identification and the periodic roadworthiness test. <strong>EU-compliance adjustments</strong> can be needed for Japanese imports — for instance a rear fog light or an adjustment to the plate lighting. The <strong>reconditioning</strong> covers a professional detail and any minor cosmetic corrections.',
      },
      {
        heading: '5. Our service fee — €1.710',
        bodyHtml:
          'The <strong>sourcing fee</strong> covers the complete search phase: intake conversation, profile development, targeted auction screening, auction-sheet translation, bid strategy advice, and bid coordination with our Japanese agent. The <strong>operational fee</strong> (3% on CIF + transport + local handling) covers transport handling, customs clearance, inspection coordination and delivery. No hidden percentages on top of the hammer price, no margin on incidentals.',
      },
    ],
  },
  variants: {
    heading: 'When do actual figures differ?',
    itemsHtml: [
      '<strong>A different exchange rate</strong> — a ±5% move in the yen-euro rate directly changes the hammer-price conversion. We use conservative bid limits that cover ±3%; with larger moves we wait for stabilisation.',
      '<strong>A higher or lower hammer price</strong> — the base changes. All proportional costs (VAT, fees) shift with it.',
      '<strong>Heavier registration tax</strong> — for V8 specifications or younger cars with high CO₂, the Dutch BPM can come out €2.000-€4.000 higher. We calculate the applicable methods per vehicle and choose the most favourable.',
      '<strong>Germany route instead of Japan</strong> — no RoRo (€1.000 saved), but an in-person inspection (€280-€450 including a travel day). No import duties and no additional VAT, as it is the EU single market. A different cost structure, comparable overall value.',
      '<strong>A classic over 25 or 40 years old</strong> — reduced registration-tax regimes or full exemption may apply. Classics can also qualify for reduced import duty under certain conditions (HS code 9705). This can save thousands of euros.',
      '<strong>Additional work</strong> — ceramic coating, leather restoration or specific modifications are optional and run separately via selected detailing partners. No margin on our fee.',
    ],
  },
  promise: {
    heading: 'Our promise on transparency',
    paragraphsHtml: [
      'Before every bid you receive a substantiated landed-cost forecast for your specific candidate car — with the same structure as above, calculated for your delivery country. Our service fee is fixed from start to finish at the amount agreed in your engagement confirmation; no percentages that surface later. Exchange-rate risk, tax outcomes and inspection lead times are honestly communicated as variable — and for each variable you receive a conservative range.',
      'That is what we mean by <em>transparency without hidden margins</em>: not "you get no bill", but "you get every bill on the table". The full fee structure (Germany route, Japan route, individual services) is on the <a href="/en/pricing/">pricing page</a>.',
    ],
  },
  pageCta: {
    heading: 'Landed cost for your search?',
    body: 'Tell us what you are looking for — we prepare a substantiated forecast with the same structure as this example case, for your destination country.',
    btn: 'Schedule an intake conversation',
    note: 'Response within 24 hours · No sales pressure',
  },
  ctaHref: '/en/contact/',
};

export default voorbeeld;
