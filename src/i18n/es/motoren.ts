// ES — página de motos.
const motoren = {
  meta: {
    title: 'Importar motos BMW de Alemania — Rolvink',
    description:
      'Sourcing personal de motos BMW en Alemania: de la R 1250 GS a las airhead clásicas. Búsqueda, evaluación, transporte e importación. Desde €1.250.',
  },
  breadcrumbHome: 'Inicio',
  breadcrumbCurrent: 'Motos',
  eyebrow: 'Nuevo — Motos',
  h1Html: 'Importar motos BMW de <span class="accent">Alemania</span>.',
  heroLead:
    'Un servicio personal de sourcing de motos BMW — de una R 1250 GS reciente a una airhead clásica. Encontramos la moto adecuada en Alemania, evaluamos los puntos débiles específicos de cada modelo y gestionamos toda la importación. Con 35 años de pasión por BMW como base.',
  heroBtn: 'Planifique una conversación',
  heroLink: 'Proceso desde €1.250 — vea las tarifas →',
  heroLinkHref: '/es/tarifas/',
  ctaHref: '/es/contacto/',
  introHeading: '¿Por qué una moto BMW de Alemania?',
  introParagraphsHtml: [
    'Alemania tiene el mayor mercado de motos de segunda mano de Europa. Un día cualquiera hay más de 14.000 motos BMW a la venta — un múltiplo de la oferta de la mayoría de los mercados nacionales. Eso significa más opciones de versión, color y nivel de equipamiento, y en los modelos recientes una ventaja de precio de varios miles de euros frente a un ejemplar comparable en el mercado local.',
    'Y a diferencia de la importación desde Japón, Alemania está dentro de la UE: sin aranceles, sin flete marítimo, sin aduana. El proceso completo suele estar resuelto en 1 a 3 semanas, con todos los costes reportados con transparencia por adelantado. Así la importación se mantiene clara y el precio final, previsible.',
    'No somos un comerciante con stock que quiere venderle algo. Buscamos y compramos <strong>exclusivamente por su encargo concreto</strong>, evaluamos cada ejemplar de forma crítica en los puntos débiles conocidos de ese modelo y estamos de su lado en la negociación. Conocemos BMW desde hace 35 años — y ese conocimiento lo empleamos para encontrar la moto adecuada, no la primera que aparece.',
  ],
  usps: [
    { title: 'Gran oferta', body: 'Más de 14.000 motos BMW en el mercado alemán — elección precisa de versión y color.' },
    { title: 'De su lado', body: 'Sin stock propio ni margen sobre el precio de compra: buscamos, evaluamos y negociamos exclusivamente en su interés.' },
    { title: 'Rápido y dentro de la UE', body: 'Sin aranceles, sin flete marítimo. Plazo habitual de 1 a 3 semanas.' },
  ],
  stepsHeading: 'Así trabajamos',
  stepsIntro:
    'De la primera conversación a la entrega. Con transparencia, a su ritmo, y con el transporte y las formalidades gestionados íntegramente por nosotros.',
  stappen: [
    { num: '01', title: 'Conversación inicial', body: 'Sin compromiso — online, por WhatsApp o en Welsum. Definimos sus deseos, presupuesto y plazos, y determinamos qué modelo y año le encajan. Sin presión comercial; si tenemos dudas, se lo decimos con honestidad.' },
    { num: '02', title: 'Perfil y búsqueda dirigida', body: 'Fijamos su encargo de búsqueda — modelo, versión, año, kilometraje, color, imprescindibles — y filtramos con esos criterios mobile.de y Kleinanzeigen.de. Solo empezamos de forma activa tras su acuerdo.' },
    { num: '03', title: 'Candidatos y evaluación', body: 'Recibe candidatos adecuados con fotos, nuestro análisis y los puntos de atención específicos del modelo (recalls, servofreno, bomba de aceite). No proponemos nada sin revisar los puntos débiles de ese tipo — ninguna acción sin su luz verde.' },
    { num: '04', title: 'Negociación y compra', body: 'Tras su aprobación negociamos en su nombre, preferiblemente con inspección presencial antes de la compra. Compramos de forma deliberada a particulares o a comerciantes en régimen de margen para optimizar el IVA aplicable. El precio final se reporta siempre con transparencia.' },
    { num: '05', title: 'Transporte', body: 'Gestionamos el transporte completo desde Alemania hasta Welsum — asegurado, con remolque o furgón cerrado. Dentro de la UE, así que sin flete marítimo ni aduana; normalmente de 2 a 5 días en camino. Usted no tiene que organizar nada.' },
    { num: '06', title: 'Trámites y matriculación', body: 'Tras la llegada preparamos el expediente de importación completo. Para una entrega en los Países Bajos gestionamos además la inspección técnica y la matriculación, llave en mano — normalmente todo queda resuelto en 1 a 3 semanas. Para España u otros países le entregamos la moto con la documentación completa y le guiamos en la matriculación e ITV de su país.' },
    { num: '07', title: 'Entrega', body: 'En cuanto todo está listo, entregamos la moto lista para disfrutar — revisada, con todos los papeles completos y una liquidación final honesta. Entrega a domicilio en los Países Bajos y alrededores de serie; resto de Europa bajo petición.' },
  ],
  inclHeading: 'Qué gestionamos por usted',
  inclusief: [
    'Filtrado semanal y dirigido en mobile.de y Kleinanzeigen.de',
    'Evaluación del estado, el historial y los puntos débiles específicos del modelo antes de pujar',
    'Negociación en su interés — preferiblemente con inspección presencial',
    'Transporte completamente asegurado desde Alemania',
    'Despacho de importación, documentación completa y acompañamiento en la matriculación',
    'Precio final honesto por adelantado, liquidación transparente',
  ],
  inclNoteHtml:
    'El precio de compra, el transporte y los costes de trámites los paga usted directamente — reportados con transparencia, sin margen para nosotros. El proceso de sourcing cuesta <strong>€1.250</strong> (por fases: €500 al inicio + €750 a la entrega). Consulte las <a href="/es/tarifas/">tarifas</a>.',
  modellenHeading: 'Elija su modelo',
  cardLinkLabel: null as string | null,
  modellen: [
    { img: '/images/moto-r1300gs.jpg', title: 'R 1300 GS', tag: 'Adventure · 2023+', desc: 'La GS más reciente con bóxer ShiftCam de 1300. La mayor ventaja de precio.' },
    { img: '/images/moto-r1250gs.jpg', title: 'R 1250 GS', tag: 'Adventure · 2019-2024', desc: 'El modelo de gran volumen. Bóxer ShiftCam, hasta ~€5.000 de ventaja desde Alemania.' },
    { img: '/images/moto-r1150gs.jpg', title: 'R 1150 GS', tag: 'Clásica · 1999-2005', desc: 'La clásica oilhead. Atención al servofreno del Integral ABS.' },
    { img: '/images/moto-rninet.jpg', title: 'R nineT', tag: 'Modern classic', desc: 'El último bóxer refrigerado por aire y aceite. Icono de la customización.' },
    { img: '/images/moto-s1000.jpg', title: 'S 1000 RR / XR / R', tag: 'Deportiva', desc: 'La familia superbike de cuatro cilindros: RR, la adventure-sport XR y la roadster R.' },
    { img: '/images/moto-k1600.jpg', title: 'K 1600 GT / GTL', tag: 'Turismo de lujo', desc: 'El seis cilindros aterciopelado. Un nicho con compradores fieles y valor estable.' },
    { img: '/images/moto-f850gs.jpg', title: 'F 750 / 850 / 900 GS', tag: 'Segmento medio', desc: 'La GS accesible con motor bicilíndrico. Más ligera y asequible.' },
    { img: '/images/moto-airhead.jpg', title: 'R 80 / R 100 airhead', tag: 'Coleccionista', desc: 'Las clásicas refrigeradas por aire. La R 80 G/S inventó el género adventure.' },
  ] as Array<{ href?: string; img: string; title: string; tag: string; desc: string; alt?: string }>,
  gidsenHeading: null as string | null,
  gidsenLinkLabel: 'Leer más →',
  gidsen: null as Array<{ href: string; title: string; desc: string }> | null,
  pageCta: {
    heading: '¿Tiene una moto BMW en mente?',
    body: 'Díganos modelo, año, versión y presupuesto — filtramos el mercado alemán, evaluamos el estado y gestionamos toda la importación con un precio final honesto por adelantado. Proceso de sourcing de moto: €1.250 (por fases).',
    btn: 'Planifique una conversación',
    note: 'Respuesta en 24 horas · Sin presión comercial',
  },
  howTo: {
    name: 'Importar una moto BMW de Alemania — cómo trabajamos',
    description:
      'El proceso completo de sourcing de motos de Rolvink Premium Imports, de la primera conversación a la entrega.',
  },
};

export default motoren;
