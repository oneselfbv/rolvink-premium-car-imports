// NL — contact-pagina. Exacte strings uit de oorspronkelijke pagina.
const contact = {
  meta: {
    title: 'Contact — Rolvink Premium Imports',
    description:
      'Vul het intake-formulier in of stuur direct een WhatsApp / e-mail. Vrijblijvend kennismakingsgesprek over uw zoekopdracht.',
  },
  eyebrow: 'Contact',
  h1: 'Een gesprek begint hier.',
  lead: 'Vrijblijvend intake-gesprek over wat u zoekt, hoe wij werken, en wat realistisch is qua tijd en kosten. Geen verkoopdruk — gewoon een rustig gesprek.',
  successTitle: 'Bedankt voor uw bericht.',
  successBody:
    'Wij nemen binnen 24 uur contact met u op — meestal sneller. Zie ook uw inbox voor een ontvangstbevestiging.',
  formHeading: 'Intake-formulier',
  formIntroHtml:
    'Vertel ons wat u zoekt. Hoe concreter, hoe scherper we kunnen reageren. Velden met <span aria-hidden="true">*</span> zijn verplicht.',
  emailSubject: 'Nieuwe intake — Rolvink Premium Imports',
  fields: {
    naam: 'Uw naam',
    email: 'E-mailadres',
    telefoon: 'Telefoon (optioneel)',
    merk: 'Merk',
    merkChoose: 'Kies een merk',
    merkUnsure: 'Nog niet zeker',
    model: 'Model of uitvoering (optioneel)',
    modelPlaceholder: 'Bijvoorbeeld: E-Klasse W212 350 CDI Avantgarde 4Matic',
    budget: 'Budget (richtindicatie)',
    budgetChoose: 'Kies een bandbreedte',
    budgetOptions: [
      { value: 'onder-20k', label: 'Onder €20.000' },
      { value: '20-40k', label: '€20.000 — €40.000' },
      { value: '40-70k', label: '€40.000 — €70.000' },
      { value: '70-100k', label: '€70.000 — €100.000' },
      { value: 'boven-100k', label: 'Boven €100.000' },
      { value: 'nog-niet-zeker', label: 'Nog niet zeker' },
    ],
    tijdslijn: 'Wanneer wilt u rijden?',
    tijdslijnChoose: 'Kies een tijdshorizon',
    tijdslijnOptions: [
      { value: 'zsm', label: 'Zo snel mogelijk' },
      { value: '1-3-mnd', label: 'Binnen 1-3 maanden' },
      { value: '3-6-mnd', label: 'Binnen 3-6 maanden' },
      { value: 'geen-haast', label: 'Geen haast — juiste exemplaar gaat voor' },
    ],
    route: 'Voorkeur route',
    routeOptions: [
      { value: 'geen-voorkeur', label: 'Geen voorkeur — adviseert u' },
      { value: 'europa', label: 'Europa (Duitsland) — snellere doorlooptijd' },
      { value: 'japan', label: 'Japan — lagere km, zeldzame uitvoeringen' },
      { value: 'beide', label: 'Beide routes open' },
    ],
    toelichting: 'Aanvullende toelichting (optioneel)',
    toelichtingPlaceholder:
      'Specifieke wensen, deal-breakers, eerdere ervaringen, of vragen over de werkwijze.',
  },
  privacyHtml:
    'Ik ga akkoord met de verwerking van mijn gegevens conform de <a href="/privacy">privacyverklaring</a>. <span class="req" aria-hidden="true">*</span>',
  submitLabel: 'Verstuur intake',
  formFooterNote: 'Wij reageren binnen 24 uur. Geen automatische vervolgmails of marketinglijsten.',
  altHeading: 'Liever direct contact?',
  whatsapp: {
    heading: 'WhatsApp',
    body: 'Snelste manier om in contact te komen. Stuur uw vraag, ik reageer binnen 24 uur.',
    buttonLabel: 'Begin gesprek',
  },
  email: {
    heading: 'E-mail',
    body: 'Voor uitgebreide vragen of bijgevoegde documenten.',
    buttonLabel: 'E-mail Theo',
  },
  visit: {
    heading: 'Bezoek',
    body: 'Op afspraak in Welsum (gemeente Olst-Wijhe). Reserveer minimaal 48 uur vooruit.',
    addressLines: ['Veldweg 15', '8196 KS Welsum', 'Nederland'],
  },
};

export default contact;
export type ContactDict = typeof contact;
