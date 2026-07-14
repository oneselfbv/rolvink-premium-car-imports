// DE — Kontakt-Seite.
const contact = {
  meta: {
    title: 'Kontakt — Rolvink Premium Imports',
    description:
      'Füllen Sie das Anfrage-Formular aus oder schreiben Sie direkt per WhatsApp oder E-Mail. Unverbindliches Kennenlerngespräch über Ihre Fahrzeugsuche.',
  },
  eyebrow: 'Kontakt',
  h1: 'Ein Gespräch beginnt hier.',
  lead: 'Unverbindliches Erstgespräch darüber, was Sie suchen, wie wir arbeiten und was zeitlich und finanziell realistisch ist. Kein Verkaufsdruck — einfach ein ruhiges Gespräch.',
  successTitle: 'Vielen Dank für Ihre Nachricht.',
  successBody:
    'Wir melden uns innerhalb von 24 Stunden bei Ihnen — meist schneller. Eine Eingangsbestätigung finden Sie in Ihrem Posteingang.',
  formHeading: 'Anfrage-Formular',
  formIntroHtml:
    'Sagen Sie uns, was Sie suchen. Je konkreter, desto präziser können wir antworten. Felder mit <span aria-hidden="true">*</span> sind Pflichtfelder.',
  emailSubject: 'Neue Anfrage — Rolvink Premium Imports',
  fields: {
    naam: 'Ihr Name',
    email: 'E-Mail-Adresse',
    telefoon: 'Telefon (optional)',
    merk: 'Marke',
    merkChoose: 'Marke wählen',
    merkUnsure: 'Noch unentschieden',
    model: 'Modell oder Ausführung (optional)',
    modelPlaceholder: 'Zum Beispiel: E-Klasse W212 350 CDI Avantgarde 4Matic',
    budget: 'Budget (Richtwert)',
    budgetChoose: 'Spanne wählen',
    budgetOptions: [
      { value: 'onder-20k', label: 'Unter €20.000' },
      { value: '20-40k', label: '€20.000 — €40.000' },
      { value: '40-70k', label: '€40.000 — €70.000' },
      { value: '70-100k', label: '€70.000 — €100.000' },
      { value: 'boven-100k', label: 'Über €100.000' },
      { value: 'nog-niet-zeker', label: 'Noch unentschieden' },
    ],
    tijdslijn: 'Wann möchten Sie fahren?',
    tijdslijnChoose: 'Zeithorizont wählen',
    tijdslijnOptions: [
      { value: 'zsm', label: 'So schnell wie möglich' },
      { value: '1-3-mnd', label: 'Innerhalb von 1-3 Monaten' },
      { value: '3-6-mnd', label: 'Innerhalb von 3-6 Monaten' },
      { value: 'geen-haast', label: 'Keine Eile — das richtige Exemplar geht vor' },
    ],
    route: 'Bevorzugte Route',
    routeOptions: [
      { value: 'geen-voorkeur', label: 'Keine Präferenz — beraten Sie mich' },
      { value: 'europa', label: 'Deutscher Markt — Kaufagent, kurze Durchlaufzeit' },
      { value: 'japan', label: 'Japan — niedrige Laufleistung, seltene Ausführungen' },
      { value: 'beide', label: 'Beide Routen offen' },
    ],
    toelichting: 'Ergänzende Anmerkungen (optional)',
    toelichtingPlaceholder:
      'Konkrete Wünsche, Deal-Breaker, frühere Erfahrungen oder Fragen zum Ablauf.',
  },
  privacyHtml:
    'Ich bin mit der Verarbeitung meiner Daten gemäß der <a href="/privacy">Datenschutzerklärung (Niederländisch)</a> einverstanden. <span class="req" aria-hidden="true">*</span>',
  submitLabel: 'Anfrage senden',
  formFooterNote: 'Wir antworten innerhalb von 24 Stunden. Keine automatischen Folge-Mails, keine Marketinglisten.',
  altHeading: 'Lieber direkter Kontakt?',
  whatsapp: {
    heading: 'WhatsApp',
    body: 'Der schnellste Weg. Senden Sie Ihre Frage — ich antworte innerhalb von 24 Stunden.',
    buttonLabel: 'Chat beginnen',
  },
  email: {
    heading: 'E-Mail',
    body: 'Für ausführliche Fragen oder Unterlagen im Anhang.',
    buttonLabel: 'E-Mail an Theo',
  },
  visit: {
    heading: 'Besuch',
    body: 'Nach Vereinbarung in Welsum (Gemeinde Olst-Wijhe, Niederlande). Bitte mindestens 48 Stunden im Voraus anmelden.',
    addressLines: ['Veldweg 15', '8196 KS Welsum', 'Niederlande'],
  },
};

export default contact;
