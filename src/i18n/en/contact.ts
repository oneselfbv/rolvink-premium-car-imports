// EN — contact page.
const contact = {
  meta: {
    title: 'Contact — Rolvink Premium Imports',
    description:
      'Fill in the intake form or send a WhatsApp / email directly. A no-obligation introductory conversation about your search.',
  },
  eyebrow: 'Contact',
  h1: 'A conversation starts here.',
  lead: 'A no-obligation intake conversation about what you are looking for, how we work, and what is realistic in terms of time and cost. No sales pressure — just a calm conversation.',
  successTitle: 'Thank you for your message.',
  successBody:
    'We will contact you within 24 hours — usually sooner. Also check your inbox for a confirmation of receipt.',
  formHeading: 'Intake form',
  formIntroHtml:
    'Tell us what you are looking for. The more specific, the sharper we can respond. Fields marked <span aria-hidden="true">*</span> are required.',
  emailSubject: 'New intake — Rolvink Premium Imports',
  fields: {
    naam: 'Your name',
    email: 'Email address',
    telefoon: 'Phone (optional)',
    merk: 'Brand',
    merkChoose: 'Choose a brand',
    merkUnsure: 'Not sure yet',
    model: 'Model or specification (optional)',
    modelPlaceholder: 'For example: E-Class W212 350 CDI Avantgarde 4Matic',
    budget: 'Budget (rough indication)',
    budgetChoose: 'Choose a range',
    budgetOptions: [
      { value: 'onder-20k', label: 'Under €20.000' },
      { value: '20-40k', label: '€20.000 — €40.000' },
      { value: '40-70k', label: '€40.000 — €70.000' },
      { value: '70-100k', label: '€70.000 — €100.000' },
      { value: 'boven-100k', label: 'Above €100.000' },
      { value: 'nog-niet-zeker', label: 'Not sure yet' },
    ],
    tijdslijn: 'When would you like to be driving?',
    tijdslijnChoose: 'Choose a time horizon',
    tijdslijnOptions: [
      { value: 'zsm', label: 'As soon as possible' },
      { value: '1-3-mnd', label: 'Within 1-3 months' },
      { value: '3-6-mnd', label: 'Within 3-6 months' },
      { value: 'geen-haast', label: 'No rush — the right example comes first' },
    ],
    route: 'Route preference',
    routeOptions: [
      { value: 'geen-voorkeur', label: 'No preference — please advise' },
      { value: 'europa', label: 'Europe (Germany) — faster turnaround' },
      { value: 'japan', label: 'Japan — lower mileage, rare specifications' },
      { value: 'beide', label: 'Open to both routes' },
    ],
    toelichting: 'Additional notes (optional)',
    toelichtingPlaceholder:
      'Specific wishes, deal-breakers, previous experiences, or questions about how we work.',
  },
  privacyHtml:
    'I agree to the processing of my data in accordance with the <a href="/privacy">privacy statement (in Dutch)</a>. <span class="req" aria-hidden="true">*</span>',
  submitLabel: 'Send intake',
  formFooterNote: 'We respond within 24 hours. No automated follow-up emails or marketing lists.',
  altHeading: 'Prefer direct contact?',
  whatsapp: {
    heading: 'WhatsApp',
    body: 'The fastest way to get in touch. Send your question, I respond within 24 hours.',
    buttonLabel: 'Start a chat',
  },
  email: {
    heading: 'Email',
    body: 'For detailed questions or attached documents.',
    buttonLabel: 'Email Theo',
  },
  visit: {
    heading: 'Visit',
    body: 'By appointment in Welsum (municipality of Olst-Wijhe). Please book at least 48 hours ahead.',
    addressLines: ['Veldweg 15', '8196 KS Welsum', 'The Netherlands'],
  },
};

export default contact;
