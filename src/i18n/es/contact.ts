// ES — página de contacto.
const contact = {
  meta: {
    title: 'Contacto — Rolvink Premium Imports',
    description:
      'Rellene el formulario o envíe directamente un WhatsApp o un correo. Conversación inicial sin compromiso sobre su búsqueda.',
  },
  eyebrow: 'Contacto',
  h1: 'Una conversación empieza aquí.',
  lead: 'Conversación inicial sin compromiso sobre lo que usted busca, cómo trabajamos y qué es realista en tiempo y costes. Sin presión comercial — simplemente una conversación tranquila.',
  successTitle: 'Gracias por su mensaje.',
  successBody:
    'Nos pondremos en contacto con usted en un plazo de 24 horas — normalmente antes. Revise también su bandeja de entrada: recibirá una confirmación de recepción.',
  formHeading: 'Formulario de contacto',
  formIntroHtml:
    'Cuéntenos qué busca. Cuanto más concreto sea, con más precisión podremos responderle. Los campos con <span aria-hidden="true">*</span> son obligatorios.',
  emailSubject: 'Nueva solicitud — Rolvink Premium Imports',
  fields: {
    naam: 'Su nombre',
    email: 'Correo electrónico',
    telefoon: 'Teléfono (opcional)',
    merk: 'Marca',
    merkChoose: 'Elija una marca',
    merkUnsure: 'Aún no lo sé',
    model: 'Modelo o versión (opcional)',
    modelPlaceholder: 'Por ejemplo: Clase E W212 350 CDI Avantgarde 4Matic',
    budget: 'Presupuesto (indicación orientativa)',
    budgetChoose: 'Elija un rango',
    budgetOptions: [
      { value: 'onder-20k', label: 'Menos de €20.000' },
      { value: '20-40k', label: '€20.000 — €40.000' },
      { value: '40-70k', label: '€40.000 — €70.000' },
      { value: '70-100k', label: '€70.000 — €100.000' },
      { value: 'boven-100k', label: 'Más de €100.000' },
      { value: 'nog-niet-zeker', label: 'Aún no lo sé' },
    ],
    tijdslijn: '¿Cuándo quiere estar conduciendo?',
    tijdslijnChoose: 'Elija un horizonte temporal',
    tijdslijnOptions: [
      { value: 'zsm', label: 'Lo antes posible' },
      { value: '1-3-mnd', label: 'En 1-3 meses' },
      { value: '3-6-mnd', label: 'En 3-6 meses' },
      { value: 'geen-haast', label: 'Sin prisa — el ejemplar adecuado es lo primero' },
    ],
    route: 'Preferencia de ruta',
    routeOptions: [
      { value: 'geen-voorkeur', label: 'Sin preferencia — aconséjenme' },
      { value: 'europa', label: 'Europa (Alemania) — plazos más cortos' },
      { value: 'japan', label: 'Japón — menos km, versiones raras' },
      { value: 'beide', label: 'Ambas rutas abiertas' },
    ],
    toelichting: 'Comentarios adicionales (opcional)',
    toelichtingPlaceholder:
      'Deseos específicos, descartes, experiencias previas o preguntas sobre nuestra forma de trabajar.',
  },
  privacyHtml:
    'Acepto el tratamiento de mis datos conforme a la <a href="/privacy">política de privacidad (en neerlandés)</a>. <span class="req" aria-hidden="true">*</span>',
  submitLabel: 'Enviar solicitud',
  formFooterNote: 'Respondemos en 24 horas. Sin correos de seguimiento automáticos ni listas de marketing.',
  altHeading: '¿Prefiere el contacto directo?',
  whatsapp: {
    heading: 'WhatsApp',
    body: 'La forma más rápida de contactar. Envíe su pregunta; respondo en 24 horas.',
    buttonLabel: 'Iniciar conversación',
  },
  email: {
    heading: 'Correo electrónico',
    body: 'Para preguntas extensas o documentos adjuntos.',
    buttonLabel: 'Escribir a Theo',
  },
  visit: {
    heading: 'Visita',
    body: 'Con cita previa en Welsum (municipio de Olst-Wijhe, Países Bajos). Reserve con al menos 48 horas de antelación.',
    addressLines: ['Veldweg 15', '8196 KS Welsum', 'Países Bajos'],
  },
};

export default contact;
