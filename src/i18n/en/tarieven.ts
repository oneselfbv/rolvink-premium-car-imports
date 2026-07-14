// EN — pricing page.
const tarieven = {
  meta: {
    title: 'Pricing — Car & Motorcycle Sourcing | Rolvink',
    description:
      'Transparent fees: sourcing from Germany from €2.250, Japan €3.250, and the new motorcycle service from €1.250 — with phased payments.',
  },
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Pricing',
  eyebrow: 'Pricing',
  h1Html: 'Transparent pricing <span class="accent">before</span> you sign.',
  lead: 'We charge no kickback on tax savings, no margin on the purchase price and no hidden handling fee. You pay our sourcing fee in phases — so your working capital is not tied up for months while the car crosses the ocean.',
  ctaHref: '/en/contact/',
  de: {
    tag: 'Fastest route',
    heading: 'Sourcing service — Germany',
    price: 'from € 2.250',
    vat: 'incl. VAT',
    leadText:
      'For those who want to be driving within 2 to 4 weeks. We source from established German premium dealers, inspect in person, and handle the complete process through to delivery at your door.',
    imgAlt: 'Black BMW M4 on the road — Germany sourcing service',
    phasesHeading: 'Phased payment',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 750',
        when: 'At the start — retainer',
        body: 'Before we start searching. Credited against the final fee on a successful purchase. Non-refundable if the client cancels after approving a bid.',
      },
      {
        step: 'Phase 2',
        amount: '€ 1.500',
        when: 'At delivery — final payment',
        body: 'At key handover at your address, with all documentation complete — for delivery in the Netherlands including registration, plates and roadworthiness inspection.',
      },
    ],
    inclHeading: 'What our service includes',
    incl: [
      'Intake conversation + profile document with must-haves and deal-breakers',
      'Candidate proposals (3-5 cars within 1-2 weeks)',
      'In-person inspection in Germany before any bid',
      'Dealer negotiation in your interest, transport from Germany, and the import formalities — turnkey for the Netherlands (RDW inspection, BPM filing via the most favourable method, registration); full paperwork and registration guidance for other EU countries',
      'Delivery to your door — the Netherlands and neighbouring countries, further across Europe on request',
    ],
    scope:
      'The purchase price of the car, transport and any registration taxes and inspection costs are paid by you directly, at cost (transparently reported, no margin for us).',
    cta: 'Schedule an intake conversation',
  },
  jp: {
    tag: 'Our specialisation',
    heading: 'Sourcing service — Japan',
    price: '€ 3.250',
    vat: 'incl. VAT',
    leadText:
      'For those seeking a rare LHD specification from Japan — lower mileage, drier climate, Shaken discipline. Allow 10 to 14 weeks from auction to a registered car.',
    imgAlt: 'Porsche 911 in Ginza at night, Tokyo — Japan sourcing service',
    phasesHeading: 'Phased payment — three phases',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 1.250',
        when: 'At the start — retainer',
        body: 'Before we begin the weekly auction screening on USS, JU and JAA. Credited against the final fee on success.',
      },
      {
        step: 'Phase 2',
        amount: 'Purchase + transport',
        when: 'Immediately after hammer-down',
        body: 'You pay the winning auction price (in yen, communicated in advance) plus domestic transport within Japan and RoRo sea freight. You buy the car directly under power of attorney; we act as coordinator, not as reseller.',
      },
      {
        step: 'Phase 3',
        amount: '€ 2.000 + import charges',
        when: 'At delivery — final payment',
        body: 'The remaining sourcing fee of € 2.000 plus import duty, VAT and registration taxes for your destination country — for the Netherlands: 10% import duty, 21% VAT, BPM and RDW costs. Only at key handover.',
      },
    ],
    inclHeading: 'What our Japan service includes',
    incl: [
      'In-depth intake conversation (90 min) — profile, condition threshold, colour preference, must-haves',
      'Weekly JCD/USS/JU/JAA screening with a plain-English auction-sheet translation per candidate',
      'Bid strategy and bidding via our established Japanese export partner',
      'Coordination of domestic transport in Japan, export formalities, RoRo sea freight',
      'Customs clearance in Rotterdam and the import formalities — turnkey for the Netherlands (RDW inspection, BPM filing, registration); full paperwork and registration guidance for other EU countries',
      'Delivery to your door — the Netherlands and neighbouring countries, further across Europe on request',
    ],
    scope:
      'The purchase price (yen), domestic transport in Japan, RoRo, customs charges and registration taxes are paid by you directly. We coordinate every payment transparently — you see every invoice.',
    cta: 'Schedule an intake conversation',
  },
  moto: {
    tag: 'New — Motorcycles',
    heading: 'Sourcing service — Motorcycle',
    price: '€ 1.250',
    vat: 'incl. VAT',
    leadText:
      'For importing a (BMW) motorcycle from Germany. Within the EU, so no import duties or sea freight — usually 1 to 3 weeks. We source on mobile.de and Kleinanzeigen.de, assess the model-specific weak points, and handle everything through to registration-ready delivery.',
    imgAlt: 'Open mountain road at golden hour — motorcycle sourcing service',
    phasesHeading: 'Phased payment',
    phases: [
      {
        step: 'Phase 1',
        amount: '€ 500',
        when: 'At the start — retainer',
        body: 'Before we start searching. Credited against the final fee on a successful purchase.',
      },
      {
        step: 'Phase 2',
        amount: '€ 750',
        when: 'At delivery — final payment',
        body: 'At handover, with all documentation complete — for the Netherlands including Dutch registration.',
      },
    ],
    inclHeading: 'What our motorcycle service includes',
    incl: [
      'Intake + profile: model, model year, specification and budget',
      'Targeted screening of mobile.de and Kleinanzeigen.de',
      'Assessment of the model-specific points of attention (recalls, servo brake, oil pump, etc.)',
      'Negotiation, transport from Germany, and the import formalities — turnkey registration for the Netherlands, full paperwork and guidance for other EU countries',
      'Delivery with the paperwork complete',
    ],
    scopeHtml:
      'The purchase price, transport and any registration taxes and inspection costs are paid by you directly, transparently reported with no margin for us. See the <a href="/en/motorcycles/">motorcycle overview</a>.',
    cta: 'Schedule an intake conversation',
  },
  extra: {
    heading: 'Individual services',
    lead: 'Not every question requires a full sourcing service. For specific parts of the import process you can engage us for individual services.',
    items: [
      {
        title: 'DRZ valuation report (Dutch BPM appraisal)',
        price: '€ 350',
        body: 'A physical valuation by a certified DRZ appraiser, usable as substantiation for the Dutch BPM declaration under the counter-evidence scheme.',
      },
      {
        title: 'Intake conversation',
        price: 'Free',
        body: 'Online via Google Meet, WhatsApp or by phone — up to 60 minutes (Germany route) or 90 minutes (Japan route). No sales pressure, honest advice on whether there is a match.',
      },
    ],
  },
  transparency: {
    heading: 'Our financial ground rules',
    itemsHtml: [
      '<strong>No kickback on tax savings.</strong> Whatever we save you by choosing the most favourable method goes 100% to you. We charge our sourcing fee, nothing more.',
      '<strong>No margin on the purchase price.</strong> You pay the German dealer directly, or via the Japanese auction partner. We report every amount back to you with the invoice.',
      '<strong>No hidden handling costs.</strong> Transport, customs, import duties, VAT and registration taxes are passed through at cost, with the underlying invoices.',
      '<strong>Clear terms up front.</strong> Before the retainer, you sign an engagement agreement that explicitly states the scope, payment phases and cancellation terms.',
    ],
    footerHtml:
      'Want to see how this fee structure works out in practice? A fully calculated W212 case is on the <a href="/en/example-import/">example import page</a>. Unsure whether Japan or Germany is the right route? We advise you honestly in a free intake conversation.',
  },
  pageCta: {
    heading: 'Discuss your search — no obligation.',
    body: 'A free intake conversation (Google Meet, WhatsApp or phone) in which we go through your profile, route and a realistic landed cost. No sales pressure, no commitments.',
    btn: 'Schedule a free intake conversation',
    note: 'Response within 24 hours',
  },
};

export default tarieven;
