// ES — página de tarifas.
const tarieven = {
  meta: {
    title: 'Tarifas — sourcing de coches y motos | Rolvink',
    description:
      'Tarifas transparentes: sourcing en Alemania desde €2.250, Japón €3.250 y el nuevo proceso para motos desde €1.250 — con pagos por fases.',
  },
  breadcrumbHome: 'Inicio',
  breadcrumbCurrent: 'Tarifas',
  eyebrow: 'Tarifas',
  h1Html: 'Precios transparentes <span class="accent">antes</span> de firmar.',
  lead: 'No cobramos comisiones sobre el ahorro fiscal, ni margen sobre el precio de compra, ni gastos de gestión ocultos. Nuestra fee de sourcing se paga por fases — para que su capital no quede meses parado en el océano.',
  ctaHref: '/es/contacto/',
  de: {
    tag: 'La ruta más rápida',
    heading: 'Proceso de sourcing Alemania',
    price: 'desde € 2.250',
    vat: 'IVA incl.',
    leadText:
      'Para quien quiere estar al volante en 2 a 4 semanas. Buscamos en concesionarios premium alemanes reconocidos, inspeccionamos in situ y gestionamos el proceso completo hasta la entrega a domicilio.',
    imgAlt: 'BMW M4 negro en carretera — proceso de sourcing Alemania',
    phasesHeading: 'Pago por fases',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 750',
        when: 'Al inicio — retainer',
        body: 'Antes de empezar a buscar. Deducible de la fee final si la compra se concreta. No reembolsable si el cliente cancela después de aprobar una puja.',
      },
      {
        step: 'Fase 2',
        amount: '€ 1.500',
        when: 'A la entrega — pago final',
        body: 'En el momento de la entrega de llaves en su domicilio, con toda la documentación completa.',
      },
    ],
    inclHeading: 'Qué incluye nuestro proceso',
    incl: [
      'Conversación inicial + documento de perfil con imprescindibles y descartes',
      'Propuestas de candidatos (3-5 coches en 1-2 semanas)',
      'Inspección presencial en Alemania antes de pujar',
      'Negociación con el concesionario en su interés, transporte desde Alemania, despacho de importación y trámites de matriculación (llave en mano en los Países Bajos; para España, orientación en la matriculación e ITV)',
      'Entrega a domicilio en los Países Bajos y alrededores de serie; resto de Europa bajo petición',
    ],
    scope:
      'El precio de compra del coche, los impuestos, el transporte y las tasas de matriculación los paga usted directamente (reportados con transparencia, sin margen para nosotros).',
    cta: 'Planifique una conversación',
  },
  jp: {
    tag: 'Nuestra especialidad',
    heading: 'Proceso de sourcing Japón',
    price: '€ 3.250',
    vat: 'IVA incl.',
    leadText:
      'Para quien busca una versión LHD rara procedente de Japón — menos kilómetros, clima más seco, disciplina Shaken. Cuente con 10 a 14 semanas desde la subasta hasta la matrícula.',
    imgAlt: 'Porsche 911 en el Ginza nocturno, Tokio — proceso de sourcing Japón',
    phasesHeading: 'Pago por fases — tres fases',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 1.250',
        when: 'Al inicio — retainer',
        body: 'Antes de comenzar el filtrado dirigido de subastas en USS, JU y JAA. Deducible de la fee final si la compra se concreta.',
      },
      {
        step: 'Fase 2',
        amount: 'Compra + transporte',
        when: 'Justo después del martillo',
        body: 'Usted paga el precio de subasta adjudicado (en yenes, comunicado por adelantado) más el transporte interior en Japón y el flete marítimo RoRo. Compra el coche directamente mediante poder de representación; nosotros actuamos como coordinador, no como revendedor.',
      },
      {
        step: 'Fase 3',
        amount: '€ 2.000 + importación',
        when: 'A la entrega — pago final',
        body: 'Resto de la fee de sourcing, € 2.000, más el 10% de aranceles, el 21% de IVA de importación y los costes de inspección y matriculación. Solo en el momento de la entrega de llaves.',
      },
    ],
    inclHeading: 'Qué incluye nuestro proceso Japón',
    incl: [
      'Conversación inicial ampliada (90 min) — perfil, umbral de estado, preferencia de color, imprescindibles',
      'Filtrado dirigido en JCD/USS/JU/JAA con traducción e interpretación de la hoja de subasta de cada candidato',
      'Estrategia de puja y pujas a través de nuestro socio exportador japonés establecido',
      'Coordinación del transporte interior en Japón, formalidades de exportación y flete marítimo RoRo',
      'Despacho de aduanas en Róterdam y trámites de importación y matriculación (llave en mano en los Países Bajos; para España, orientación en la matriculación e ITV)',
      'Entrega a domicilio en los Países Bajos y alrededores de serie; resto de Europa bajo petición',
    ],
    scope:
      'El precio de compra (en yenes), el transporte interior en Japón, el RoRo, los gravámenes aduaneros y los impuestos y tasas de matriculación los paga usted directamente. Coordinamos cada pago con transparencia — usted ve cada factura.',
    cta: 'Planifique una conversación',
  },
  moto: {
    tag: 'Nuevo — Motos',
    heading: 'Proceso de sourcing Moto',
    price: '€ 1.250',
    vat: 'IVA incl.',
    leadText:
      'Para la importación de una moto (BMW) desde Alemania. Dentro de la UE, así que sin aranceles ni flete marítimo — normalmente de 1 a 3 semanas. Buscamos en mobile.de y Kleinanzeigen.de, evaluamos los puntos débiles específicos del modelo y lo gestionamos todo hasta la entrega.',
    imgAlt: 'Carretera de montaña abierta a la hora dorada — proceso de sourcing de motos',
    phasesHeading: 'Pago por fases',
    phases: [
      {
        step: 'Fase 1',
        amount: '€ 500',
        when: 'Al inicio — retainer',
        body: 'Antes de empezar a buscar. Deducible de la fee final si la compra se concreta.',
      },
      {
        step: 'Fase 2',
        amount: '€ 750',
        when: 'A la entrega — pago final',
        body: 'En el momento de la entrega, con toda la documentación completa.',
      },
    ],
    inclHeading: 'Qué incluye nuestro proceso de moto',
    incl: [
      'Conversación inicial + perfil: modelo, año, versión y presupuesto',
      'Filtrado dirigido en mobile.de y Kleinanzeigen.de',
      'Evaluación de los puntos de atención específicos del modelo (recalls, servofreno, bomba de aceite, etc.)',
      'Negociación, transporte desde Alemania, despacho de importación y trámites de matriculación',
      'Entrega con la documentación completa',
    ],
    scopeHtml:
      'El precio de compra, el transporte y los costes de trámites los paga usted directamente, reportados con transparencia y sin margen para nosotros. Vea también la <a href="/es/motos/">página de motos</a>.',
    cta: 'Planifique una conversación',
  },
  extra: {
    heading: 'Servicios sueltos',
    lead: 'No toda consulta requiere un proceso de sourcing completo. Para partes concretas del proceso de importaci\u00f3n puede contratar servicios sueltos. \u00bfVive fuera de los Pa\u00edses Bajos? Nos ocupamos de la inspecci\u00f3n y del asesoramiento, pero no de la matriculaci\u00f3n en su pa\u00eds \u2014 los dos servicios siguientes s\u00ed est\u00e1n a su disposici\u00f3n, a la misma tarifa.',
    items: [
      {
        title: 'Revisi\u00f3n de anuncio a distancia',
        price: '\u20ac 95',
        body: 'Evaluamos un anuncio concreto: fotos, documentaci\u00f3n, kilometraje, los puntos d\u00e9biles propios de ese modelo y si el precio pedido se sostiene frente a nuestros datos de mercado alem\u00e1n y neerland\u00e9s. Incluye las preguntas que conviene hacerle al vendedor. En dos d\u00edas laborables. Descontable de la inspecci\u00f3n in situ.',
      },
      {
        title: 'Inspecci\u00f3n in situ en Alemania',
        price: '\u20ac 495',
        body: 'Vamos hasta all\u00ed, revisamos la moto, la arrancamos y la rodamos si es posible. Recibe un informe con fotos y nuestras conclusiones, m\u00e1s asesoramiento sobre qu\u00e9 ofrecer. Incluido dentro de 250 km de Welsum; m\u00e1s all\u00e1, \u20ac 0,35 por kil\u00f3metro, presupuestado de antemano y solo con su visto bueno. Es una valoraci\u00f3n visual y funcional, no una garant\u00eda t\u00e9cnica frente a defectos ocultos. La tarifa se aplica tambi\u00e9n si nuestro veredicto es negativo \u2014 as\u00ed sigue siendo independiente. Descontable de un proceso de sourcing completo.',
      },
      {
        title: 'Informe de tasación oficial (matriculación en los Países Bajos)',
        price: '€ 350',
        body: 'Tasación física por un tasador homologado, utilizable como base para la declaración fiscal en una matriculación neerlandesa.',
      },
      {
        title: 'Conversación inicial',
        price: 'Gratis',
        body: 'Online por Google Meet, WhatsApp o teléfono — máximo 60 minutos (ruta Alemania) o 90 minutos (ruta Japón). Sin presión comercial; consejo honesto sobre si hay encaje.',
      },
    ],
  },
  transparency: {
    heading: 'Nuestras reglas de juego financieras',
    itemsHtml: [
      '<strong>Sin comisiones sobre el ahorro fiscal.</strong> Lo que ahorramos para usted eligiendo el método fiscal más favorable le corresponde al 100%. Cobramos nuestra fee de sourcing, nada más.',
      '<strong>Sin margen sobre el precio de compra.</strong> Usted paga directamente al concesionario alemán o a través del socio de subastas japonés. Le reportamos cada importe con su factura.',
      '<strong>Sin gastos de gestión ocultos.</strong> Transporte, aduana, impuestos y tasas de matriculación se repercuten a precio de coste, con las facturas subyacentes.',
      '<strong>Condiciones claras por adelantado.</strong> Antes del retainer, usted firma un contrato de encargo en el que constan de forma explícita el alcance, las fases de pago y la regulación de cancelación.',
    ],
    footerHtml:
      '¿Quiere ver cómo se traduce esta estructura de tarifas en la práctica? Encontrará un caso W212 calculado al completo en el <a href="/es/ejemplo-importacion/">ejemplo de importación</a>. ¿Duda entre Japón y Alemania? Lo analizamos juntos en la conversación inicial, sin compromiso.',
  },
  pageCta: {
    heading: 'Hable con nosotros de su búsqueda — sin compromiso.',
    body: 'Una conversación inicial gratuita (Google Meet, WhatsApp o teléfono) en la que repasamos su perfil, la ruta y un coste final realista. Sin presión comercial, sin obligaciones.',
    btn: 'Planifique una conversación sin compromiso',
    note: 'Respuesta en 24 horas',
  },
};

export default tarieven;
