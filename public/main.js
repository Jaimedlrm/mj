/* =============================================================
   MARÍA & JAIME — main.js  (multi-page, bilingual)
   ============================================================= */

// ── TRANSLATIONS ────────────────────────────────────────────
const T = {
  es: {
    /* NAV */
    'nav.home':         'Inicio',
    'nav.importante':   'Información',
    'nav.restaurantes': 'Restaurantes',
    'nav.turismo':      'Turismo',
    'nav.rsvp':         'RSVP',
    'nav.regalo':       'Regalo',
    'nav.finde':        'El Finde',

    /* HERO */
    'hero.pre':  'Os invitamos a nuestra boda',
    'hero.date': 'Sábado · 7 de Noviembre de 2026',
    'hero.loc':  'Pamplona, Navarra · España',
    'hero.rsvp': 'Confirmar asistencia',
    'hero.scroll': 'Scroll',

    /* COUNTDOWN */
    'cd.label': 'Cuenta atrás para el gran día',
    'cd.days':  'Días',
    'cd.hours': 'Horas',
    'cd.mins':  'Minutos',
    'cd.secs':  'Segundos',

    /* INVITATION */
    'inv.eyebrow':  'La Invitación',
    'inv.family1':  'Vicente de los Ríos Medina y Leticia Eva Mouvet Cañete',
    'inv.junto':    'junto con',
    'inv.family2':  'Rafael Francisco Cortijo Gorraiz y María Elena Rojo Barrios',
    'inv.text':     'participan el enlace matrimonial de sus hijos y tienen el gusto de invitaros a la ceremonia religiosa que se celebrará, D.m., el sábado 7 de noviembre de 2026, a las doce y media de la mañana, en la Iglesia de San Nicolás de Pamplona, y a la celebración que tendrá lugar a continuación en la Finca El Peregrino de Puente la Reina.',
    'inv.src':      'S.R.C. · Pamplona, 2026',

    /* EVENT BLOCKS */
    'ev.pre.eyebrow':  'Viernes · 6 de Noviembre de 2026',
    'ev.pre.title':    'El Encierro de los Enamorados',
    'ev.pre.desc':     'El día antes de la boda os invitamos a recorrer las legendarias calles del encierro de los San Fermines. Una experiencia única para comenzar la celebración al estilo pamplonés.',
    'ev.pre.when':     '17:00 h',
    'ev.pre.where':    'Casco Antiguo de Pamplona',
    'ev.pre.route':    'Santo Domingo → Plaza de Toros',

    'ev.cer.eyebrow':  'Sábado · 7 de Noviembre de 2026',
    'ev.cer.title':    'La Ceremonia',
    'ev.cer.desc':     'La ceremonia religiosa se celebrará en la Iglesia de San Nicolás, en el corazón del casco histórico de Pamplona. Os pedimos que las puertas estén abiertas desde las 12:00 h.',
    'ev.cer.when':     '12:30 h (puertas 12:00)',
    'ev.cer.where':    'Iglesia de San Nicolás',
    'ev.cer.addr':     'C/ San Miguel 15, Pamplona',

    'ev.cel.eyebrow':  'Sábado · 7 de Noviembre de 2026',
    'ev.cel.title':    'La Celebración',
    'ev.cel.desc':     'Tras la ceremonia, nos trasladaremos en autobús a la Finca El Peregrino, en Puente la Reina, donde celebraremos el almuerzo nupcial con jardines, música y baile hasta medianoche.',
    'ev.cel.when':     '15:30 h (llegada)',
    'ev.cel.where':    'Finca El Peregrino',
    'ev.cel.addr':     'Puente la Reina, Navarra (20 km)',

    /* STORY */
    'story.eyebrow': 'Nuestra Historia',
    'story.title':   'Una historia de <em>amor</em>',
    'story.p1':      'Hay historias que empiezan sin avisar — con una mirada, una risa compartida, o un momento que ninguno de los dos había planeado. La nuestra es así.',
    'story.p2':      'De los días ordinarios que se fueron convirtiendo en algo extraordinario, de Nueva York a Pamplona, de Miami a las playas del atardecer. Cada ciudad, una página más de algo que ninguno de los dos esperaba escribir.',
    'story.p3':      'Ahora, rodeados de las personas que más queremos, estamos listos para empezar el capítulo más bonito. No podemos esperar a celebrarlo con vosotros en el corazón de Navarra.',

    /* WEEKEND STRIP */
    'ws.eyebrow': 'Dos días de celebración',
    'ws.title':   'El <em>Fin de Semana</em>',
    'ws.desc':    'Hemos preparado un fin de semana completo: desde el encierro del viernes hasta la última copa del sábado. Descubre el programa completo.',
    'ws.btn':     'Ver el programa',

    /* FAQ */
    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.title':   'Todo lo que necesitas saber',
    'faq.q1': '¿Es una celebración solo para adultos?',
    'faq.a1': 'Sí, hemos decidido que sea una celebración exclusiva para adultos. Agradecemos vuestra comprensión.',
    'faq.q2': '¿Habrá autobús de regreso a Pamplona?',
    'faq.a2': 'Sí, organizaremos un servicio de autobús gratuito de ida y vuelta entre el centro de Pamplona y la Finca El Peregrino. Los detalles exactos del punto de salida se confirmarán próximamente.',
    'faq.q3': '¿Cuál es el código de vestimenta?',
    'faq.a3': 'Black Tie Opcional — Tenemos en cuenta que el casco antiguo de Pamplona tiene adoquines, así que os recomendamos elegir el calzado con cuidado si pensáis pasear antes de la ceremonia.',
    'faq.q4': '¿Será una ceremonia "unplugged"?',
    'faq.a4': 'Durante el intercambio de votos y alianzas os pediremos que guardéis los móviles para que podáis vivir el momento plenamente. Nuestros fotógrafos capturarán cada instante.',
    'faq.q5': '¿Podéis atender restricciones alimentarias?',
    'faq.a5': 'Por supuesto. Al confirmar asistencia, indicad cualquier alergia o restricción dietética y nos aseguraremos de que haya opciones para todos.',
    'faq.q6': '¿Cuándo hay que confirmar asistencia?',
    'faq.a6': 'Os pedimos que confirmáis antes del 1 de septiembre de 2026. Si no recibimos confirmación, entenderemos que no podréis acompañarnos.',
    'faq.q7': '¿Tenéis lista de bodas?',
    'faq.a7': 'El mejor regalo es vuestra presencia. Si aun así queréis contribuir, tenéis los datos bancarios en la sección "Regalo".',

    /* FOOTER */
    'footer.date': '7 · Noviembre · 2026 · Pamplona, España',
    'footer.note': 'Hecho con amor para las personas que más queremos',
    'footer.contact1.label': 'María — WhatsApp',
    'footer.contact2.label': 'Jaime — WhatsApp',

    /* ── INNER PAGES ── */

    /* IMPORTANTE */
    'imp.eyebrow':  'Información Práctica',
    'imp.title':    'Todo lo que necesitas',
    'imp.sub':      'Pamplona, 7 de Noviembre de 2026',
    'imp.tab1':     'Alojamiento',
    'imp.tab2':     'Peluquerías',
    'imp.tab3':     'Maquillaje',
    'imp.tab4':     'Restaurantes',

    'imp.hotels.intro':   'Hemos seleccionado una serie de hoteles en el centro de Pamplona. Os recomendamos reservar con antelación, ya que el fin de semana del 7 de noviembre puede tener alta demanda.',
    'imp.pelus.intro':    'Si buscáis peluquería para el gran día, aquí tenéis una selección de los salones mejor valorados de Pamplona. Os recomendamos reservar con tiempo.',
    'imp.makeup.intro':   'Algunas recomendaciones de maquillaje profesional en Pamplona y alrededores.',
    'imp.rest.intro':     'Un adelanto de nuestros lugares favoritos. Encontraréis más detalles en la sección Restaurantes.',
    'imp.rest.link':      'Ver todos los restaurantes →',

    /* RESTAURANTES */
    'rest.eyebrow': 'Gastronomía',
    'rest.title':   'Restaurantes',
    'rest.sub':     'Los favoritos de María en Pamplona',
    'rest.intro':   'Pamplona es la ciudad de María, y estos son sus rincones favoritos para pintxos y buena mesa. Una guía pequeña pero muy bien curada.',
    'rest.map.title': 'Mapa de restaurantes',

    /* TURISMO */
    'tur.eyebrow':       'Navarra te espera',
    'tur.title':         'Turismo',
    'tur.sub':           'Pamplona y alrededores',
    'tur.pamplona.title': 'Qué ver en Pamplona',
    'tur.pamplona.intro': 'Pamplona, capital de Navarra, es una ciudad con más de 2.000 años de historia. Aquí tienes nuestros lugares imprescindibles para disfrutar antes o después de la boda.',
    'tur.navarra.title':  'Navarra más allá de Pamplona',
    'tur.navarra.intro':  'Si tenéis unos días, Navarra os sorprenderá. Desde paisajes de cuento hasta desiertos de bardenas — todo a menos de una hora de Pamplona.',

    /* RSVP */
    'rsvp.eyebrow': 'Confirmación de asistencia',
    'rsvp.title':   'RSVP',
    'rsvp.sub':     '7 de Noviembre de 2026 · Pamplona',
    'rsvp.intro':   'Nos encantaría contar con vuestra presencia en uno de los días más especiales de nuestras vidas. Por favor, confirmad vuestra asistencia antes del 1 de septiembre de 2026.',
    'rsvp.btn':     'Confirmar asistencia',
    'rsvp.contact.title': '¿Tienes alguna duda?',
    'rsvp.contact.desc':  'No dudéis en escribirnos por WhatsApp. Estaremos encantados de ayudaros.',

    /* REGALO */
    'reg.eyebrow': 'Lista de Bodas',
    'reg.title':   'El Regalo',
    'reg.sub':     'María & Jaime',
    'reg.intro.1': 'El mejor regalo que nos podéis hacer es vuestra presencia y alegría en este día tan especial.',
    'reg.intro.2': 'Si aun así queréis hacernos un regalo, hemos optado por algo sencillo: una contribución a nuestra cuenta conjunta. Así podremos elegir juntos en qué invertir vuestro cariño — ya sea un viaje, un rincón del hogar, o una experiencia que recordemos toda la vida.',
    'reg.iban.label': 'Número de cuenta',

    /* FINDE */
    'fin.eyebrow':  'El Programa',
    'fin.title':    'El Fin de Semana',
    'fin.sub':      '6 & 7 de Noviembre de 2026 · Pamplona',
    'fin.intro':    'Hemos preparado un fin de semana lleno de momentos especiales. Aquí tienes el programa completo para que puedas organizarte.',
    'fin.fri.label': 'Viernes 6 de Noviembre · Pre-Boda',
    'fin.sat.label': 'Sábado 7 de Noviembre · La Boda',

    /* TIMELINE */
    'tl.fri.1.time': '17:00',
    'tl.fri.1.event': 'Punto de encuentro',
    'tl.fri.1.desc': 'Nos reunimos en la Plaza del Castillo, el corazón de Pamplona.',
    'tl.fri.2.time': '17:30',
    'tl.fri.2.event': 'El Encierro de los Enamorados',
    'tl.fri.2.desc': 'Recorremos juntos el trayecto del famoso encierro: Santo Domingo → Plaza de Toros.',
    'tl.fri.3.time': '19:00',
    'tl.fri.3.event': 'Aperitivos en el casco antiguo',
    'tl.fri.3.desc': 'Vinos y pintxos por los bares del casco viejo pamplonés.',
    'tl.fri.4.time': '21:00',
    'tl.fri.4.event': 'Cena pre-boda',
    'tl.fri.4.desc': 'Cena informal juntos. Lugar por confirmar.',

    'tl.sat.1.time': '12:00',
    'tl.sat.1.event': 'Llegada de invitados',
    'tl.sat.1.desc': 'Las puertas de la iglesia se abren.',
    'tl.sat.1.venue': 'Iglesia de San Nicolás, C/ San Miguel 15',
    'tl.sat.2.time': '12:30',
    'tl.sat.2.event': 'Ceremonia religiosa',
    'tl.sat.2.desc': 'Intercambio de votos y alianzas.',
    'tl.sat.3.time': '13:30',
    'tl.sat.3.event': 'Cóctel',
    'tl.sat.3.desc': 'Cava, canapés y primeras fotos en el exterior de la iglesia.',
    'tl.sat.4.time': '15:00',
    'tl.sat.4.event': 'Traslado en autobús',
    'tl.sat.4.desc': 'Autobús gratuito desde Pamplona a la Finca El Peregrino.',
    'tl.sat.5.time': '15:30',
    'tl.sat.5.event': 'Almuerzo nupcial',
    'tl.sat.5.desc': 'Gran almuerzo en los jardines y salones de la finca.',
    'tl.sat.5.venue': 'Finca El Peregrino, Puente la Reina',
    'tl.sat.6.time': '19:00',
    'tl.sat.6.event': 'Tarta y brindis',
    'tl.sat.6.desc': 'Corte de tarta y palabras de amor.',
    'tl.sat.7.time': '20:00',
    'tl.sat.7.event': 'Baile y fiesta',
    'tl.sat.7.desc': '¡A bailar! La pista es vuestra.',
    'tl.sat.8.time': '00:00',
    'tl.sat.8.event': 'Último baile',
    'tl.sat.8.desc': 'La noche termina, pero el recuerdo dura para siempre.',
  },

  en: {
    /* NAV */
    'nav.home':         'Home',
    'nav.importante':   'Info',
    'nav.restaurantes': 'Restaurants',
    'nav.turismo':      'Tourism',
    'nav.rsvp':         'RSVP',
    'nav.regalo':       'Gift',
    'nav.finde':        'The Weekend',

    /* HERO */
    'hero.pre':  'You are invited to our wedding',
    'hero.date': 'Saturday · November 7, 2026',
    'hero.loc':  'Pamplona, Navarra · Spain',
    'hero.rsvp': 'Confirm attendance',
    'hero.scroll': 'Scroll',

    /* COUNTDOWN */
    'cd.label': 'Countdown to the big day',
    'cd.days':  'Days',
    'cd.hours': 'Hours',
    'cd.mins':  'Minutes',
    'cd.secs':  'Seconds',

    /* INVITATION */
    'inv.eyebrow':  'The Invitation',
    'inv.family1':  'Vicente de los Ríos Medina and Leticia Eva Mouvet Cañete',
    'inv.junto':    'together with',
    'inv.family2':  'Rafael Francisco Cortijo Gorraiz and María Elena Rojo Barrios',
    'inv.text':     'announce the wedding of their children and joyfully invite you to the religious ceremony which will take place, D.v., on Saturday the 7th of November 2026, at twelve-thirty in the morning, at the Church of San Nicolás in Pamplona, and to the celebration that will follow at Finca El Peregrino in Puente la Reina.',
    'inv.src':      'R.S.V.P. · Pamplona, 2026',

    /* EVENT BLOCKS */
    'ev.pre.eyebrow': 'Friday · November 6, 2026',
    'ev.pre.title':   'The Lovers\' Encierro',
    'ev.pre.desc':    'The day before the wedding, we invite you to walk the legendary streets of the San Fermín bull run. A unique experience to kick off the celebration, Pamplona style.',
    'ev.pre.when':    '5:00 PM',
    'ev.pre.where':   'Old Town, Pamplona',
    'ev.pre.route':   'Santo Domingo → Plaza de Toros',

    'ev.cer.eyebrow': 'Saturday · November 7, 2026',
    'ev.cer.title':   'The Ceremony',
    'ev.cer.desc':    'The religious ceremony will take place at the Church of San Nicolás, in the heart of Pamplona\'s historic old town. Doors open from 12:00 noon.',
    'ev.cer.when':    '12:30 PM (doors at 12:00)',
    'ev.cer.where':   'Iglesia de San Nicolás',
    'ev.cer.addr':    'C/ San Miguel 15, Pamplona',

    'ev.cel.eyebrow': 'Saturday · November 7, 2026',
    'ev.cel.title':   'The Celebration',
    'ev.cel.desc':    'After the ceremony, we will travel by bus to Finca El Peregrino in Puente la Reina, where we will celebrate our wedding luncheon with gardens, music, and dancing until midnight.',
    'ev.cel.when':    '3:30 PM (arrival)',
    'ev.cel.where':   'Finca El Peregrino',
    'ev.cel.addr':    'Puente la Reina, Navarra (12 miles)',

    /* STORY */
    'story.eyebrow': 'Our Story',
    'story.title':   'A story of <em>love</em>',
    'story.p1':      'Some stories begin without warning — with a glance, a shared laugh, or a moment neither of you had planned. Ours is like that.',
    'story.p2':      'From ordinary days that turned into something extraordinary, from New York to Pamplona, from Miami to sunset beaches. Each city, another page of something neither of us expected to write.',
    'story.p3':      'Now, surrounded by the people we love most, we are ready to begin the most beautiful chapter. We can\'t wait to celebrate it with you in the heart of Navarra.',

    /* WEEKEND STRIP */
    'ws.eyebrow': 'Two days of celebration',
    'ws.title':   'The <em>Weekend</em>',
    'ws.desc':    'We have planned a full weekend: from Friday\'s encierro to the last drink on Saturday night. Discover the full programme.',
    'ws.btn':     'See the programme',

    /* FAQ */
    'faq.eyebrow': 'Frequently Asked Questions',
    'faq.title':   'Everything you need to know',
    'faq.q1': 'Is this an adults-only celebration?',
    'faq.a1': 'Yes, we have decided to make this an adults-only celebration. We appreciate your understanding.',
    'faq.q2': 'Will there be a return bus to Pamplona?',
    'faq.a2': 'Yes, we will organise a free return bus service between central Pamplona and Finca El Peregrino. Exact pick-up details will be confirmed soon.',
    'faq.q3': 'What is the dress code?',
    'faq.a3': 'Black Tie Optional — Please note that Pamplona\'s old town has cobblestones, so we recommend choosing your footwear carefully if you plan to stroll before the ceremony.',
    'faq.q4': 'Will it be an unplugged ceremony?',
    'faq.a4': 'During the exchange of vows and rings, we ask that you put away your phones so you can fully experience the moment. Our photographers will capture every second.',
    'faq.q5': 'Can you accommodate dietary requirements?',
    'faq.a5': 'Of course. When confirming attendance, please note any allergies or dietary restrictions and we will ensure there are options for everyone.',
    'faq.q6': 'When do I need to RSVP?',
    'faq.a6': 'Please confirm your attendance by 1 September 2026. If we do not hear from you, we will assume you are unable to join us.',
    'faq.q7': 'Do you have a gift registry?',
    'faq.a7': 'Your presence is the greatest gift. If you still wish to give something, our bank details are in the Gift section.',

    /* FOOTER */
    'footer.date': '7 · November · 2026 · Pamplona, Spain',
    'footer.note': 'Made with love for the people we cherish most',
    'footer.contact1.label': 'María — WhatsApp',
    'footer.contact2.label': 'Jaime — WhatsApp',

    /* ── INNER PAGES ── */

    /* IMPORTANTE */
    'imp.eyebrow':  'Practical Information',
    'imp.title':    'Everything you need',
    'imp.sub':      'Pamplona, November 7, 2026',
    'imp.tab1':     'Accommodation',
    'imp.tab2':     'Hair Salons',
    'imp.tab3':     'Makeup',
    'imp.tab4':     'Restaurants',

    'imp.hotels.intro':  'We have selected a number of hotels in central Pamplona. We recommend booking early as the weekend of November 7 can be in high demand.',
    'imp.pelus.intro':   'If you are looking for a hairdresser for the big day, here is a selection of the highest-rated salons in Pamplona. We recommend booking in advance.',
    'imp.makeup.intro':  'Some recommendations for professional makeup artists in Pamplona and the surrounding area.',
    'imp.rest.intro':    'A preview of our favourite spots. Find more details in the Restaurants section.',
    'imp.rest.link':     'See all restaurants →',

    /* RESTAURANTES */
    'rest.eyebrow': 'Gastronomy',
    'rest.title':   'Restaurants',
    'rest.sub':     'María\'s favourites in Pamplona',
    'rest.intro':   'Pamplona is María\'s city, and these are her favourite spots for pintxos and great food. A small but very well curated guide.',
    'rest.map.title': 'Restaurant map',

    /* TURISMO */
    'tur.eyebrow':        'Navarra awaits',
    'tur.title':          'Tourism',
    'tur.sub':            'Pamplona and surroundings',
    'tur.pamplona.title': 'What to see in Pamplona',
    'tur.pamplona.intro': 'Pamplona, the capital of Navarra, is a city with over 2,000 years of history. Here are our must-see places to enjoy before or after the wedding.',
    'tur.navarra.title':  'Navarra beyond Pamplona',
    'tur.navarra.intro':  'If you have a few days, Navarra will surprise you. From fairy-tale landscapes to desert badlands — all within an hour of Pamplona.',

    /* RSVP */
    'rsvp.eyebrow': 'Attendance confirmation',
    'rsvp.title':   'RSVP',
    'rsvp.sub':     'November 7, 2026 · Pamplona',
    'rsvp.intro':   'We would love to have you with us on one of the most special days of our lives. Please confirm your attendance by 1 September 2026.',
    'rsvp.btn':     'Confirm attendance',
    'rsvp.contact.title': 'Have a question?',
    'rsvp.contact.desc':  'Don\'t hesitate to reach out via WhatsApp. We\'ll be happy to help.',

    /* REGALO */
    'reg.eyebrow': 'Wedding Registry',
    'reg.title':   'The Gift',
    'reg.sub':     'María & Jaime',
    'reg.intro.1': 'The greatest gift you can give us is your presence and joy on this special day.',
    'reg.intro.2': 'If you still wish to give us a gift, we have kept it simple: a contribution to our joint account. This way we can choose together how to invest your love — whether it\'s a trip, a corner of our home, or an experience we\'ll remember for life.',
    'reg.iban.label': 'Account number',

    /* FINDE */
    'fin.eyebrow':  'The Programme',
    'fin.title':    'The Weekend',
    'fin.sub':      'November 6 & 7, 2026 · Pamplona',
    'fin.intro':    'We have planned a weekend full of special moments. Here is the full programme so you can plan ahead.',
    'fin.fri.label': 'Friday November 6 · Pre-Wedding',
    'fin.sat.label': 'Saturday November 7 · The Wedding',

    /* TIMELINE */
    'tl.fri.1.time': '5:00 PM',
    'tl.fri.1.event': 'Meeting point',
    'tl.fri.1.desc': 'We meet at Plaza del Castillo, the heart of Pamplona.',
    'tl.fri.2.time': '5:30 PM',
    'tl.fri.2.event': 'The Lovers\' Encierro',
    'tl.fri.2.desc': 'We walk together the famous bull run route: Santo Domingo → Plaza de Toros.',
    'tl.fri.3.time': '7:00 PM',
    'tl.fri.3.event': 'Aperitifs in the old town',
    'tl.fri.3.desc': 'Wines and pintxos at the bars of Pamplona\'s old quarter.',
    'tl.fri.4.time': '9:00 PM',
    'tl.fri.4.event': 'Pre-wedding dinner',
    'tl.fri.4.desc': 'Casual dinner together. Venue to be confirmed.',

    'tl.sat.1.time': '12:00 PM',
    'tl.sat.1.event': 'Guest arrival',
    'tl.sat.1.desc': 'The church doors open.',
    'tl.sat.1.venue': 'Iglesia de San Nicolás, C/ San Miguel 15',
    'tl.sat.2.time': '12:30 PM',
    'tl.sat.2.event': 'Religious ceremony',
    'tl.sat.2.desc': 'Exchange of vows and rings.',
    'tl.sat.3.time': '1:30 PM',
    'tl.sat.3.event': 'Cocktail hour',
    'tl.sat.3.desc': 'Cava, canapés and first photos outside the church.',
    'tl.sat.4.time': '3:00 PM',
    'tl.sat.4.event': 'Bus transfer',
    'tl.sat.4.desc': 'Free bus from Pamplona to Finca El Peregrino.',
    'tl.sat.5.time': '3:30 PM',
    'tl.sat.5.event': 'Wedding luncheon',
    'tl.sat.5.desc': 'Grand luncheon in the gardens and halls of the estate.',
    'tl.sat.5.venue': 'Finca El Peregrino, Puente la Reina',
    'tl.sat.6.time': '7:00 PM',
    'tl.sat.6.event': 'Cake & toasts',
    'tl.sat.6.desc': 'Cake cutting and heartfelt toasts.',
    'tl.sat.7.time': '8:00 PM',
    'tl.sat.7.event': 'Dancing & party',
    'tl.sat.7.desc': 'Time to dance! The floor is yours.',
    'tl.sat.8.time': '12:00 AM',
    'tl.sat.8.event': 'Last dance',
    'tl.sat.8.desc': 'The night ends, but the memory lasts forever.',
  }
};

// ── LANGUAGE ────────────────────────────────────────────────
let currentLang = localStorage.getItem('mj-lang') || 'es';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('mj-lang', lang);
  document.documentElement.lang = lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) {
      if (T[lang][key].includes('<')) {
        el.innerHTML = T[lang][key];
      } else {
        el.textContent = T[lang][key];
      }
    }
  });

  // placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
  });

  // lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── NAV ─────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // solid nav on inner pages (no hero)
  const hasHero = !!document.getElementById('hero');
  if (!hasHero) nav.classList.add('solid');

  // scroll behaviour (only on pages with hero)
  if (hasHero) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // active link
  const path = location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-links a, .m-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (path.endsWith(href) || (href === '/index.html' && path === '/'))) {
      a.classList.add('active');
    }
  });

  // burger
  const burger = document.getElementById('burgerBtn');
  const menu   = document.getElementById('mobile-menu');
  const close  = document.getElementById('menuClose');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.add('open'));
    close?.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('.m-link').forEach(l =>
      l.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  // language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── COUNTDOWN ────────────────────────────────────────────────
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date('2026-11-07T11:30:00Z'); // 12:30 CET = 11:30 UTC
  const dEl = document.getElementById('cd-days');
  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    dEl.textContent = String(d).padStart(2, '0');
    hEl.textContent = String(h).padStart(2, '0');
    mEl.textContent = String(m).padStart(2, '0');
    sEl.textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── HERO ZOOM ────────────────────────────────────────────────
function initHero() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  requestAnimationFrame(() => bg.classList.add('loaded'));
}

// ── GALLERY DRAG ─────────────────────────────────────────────
function initGallery() {
  const gallery = document.querySelector('.story-gallery');
  if (!gallery) return;
  let isDown = false, startX = 0, scrollLeft = 0;
  gallery.addEventListener('mousedown', e => {
    isDown = true; gallery.classList.add('dragging');
    startX = e.pageX - gallery.offsetLeft; scrollLeft = gallery.scrollLeft;
  });
  document.addEventListener('mouseup',   () => { isDown = false; gallery.classList.remove('dragging'); });
  gallery.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    gallery.scrollLeft = scrollLeft - (e.pageX - gallery.offsetLeft - startX);
  });
  // lightbox on click
  const imgs = [...gallery.querySelectorAll('img')];
  imgs.forEach((img, i) => img.addEventListener('click', () => openLightbox(i)));
}

// ── LIGHTBOX ─────────────────────────────────────────────────
function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img   = lb.querySelector('img');
  const imgs  = [...document.querySelectorAll('.story-gallery img')];
  let current = 0;

  function openLightbox(i) {
    current = i;
    img.src = imgs[i].src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
  function prev() { current = (current - 1 + imgs.length) % imgs.length; img.src = imgs[current].src; }
  function next() { current = (current + 1) % imgs.length; img.src = imgs[current].src; }

  window.openLightbox = openLightbox;
  lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lb-prev').addEventListener('click', prev);
  lb.querySelector('.lb-next').addEventListener('click', next);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
}

// ── FAQ ──────────────────────────────────────────────────────
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── TABS (inner pages) ───────────────────────────────────────
function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-section').forEach(s => {
        s.classList.toggle('active', s.id === target);
      });
    });
  });
}

// ── IBAN COPY ────────────────────────────────────────────────
function initIbanCopy() {
  const btn = document.querySelector('.iban-copy');
  if (!btn) return;
  const feedback = document.querySelector('.iban-copied');
  btn.addEventListener('click', () => {
    const iban = document.querySelector('.iban-code')?.textContent?.trim();
    if (!iban) return;
    navigator.clipboard.writeText(iban).then(() => {
      if (feedback) {
        feedback.textContent = currentLang === 'es' ? '¡Copiado!' : 'Copied!';
        setTimeout(() => { feedback.textContent = ''; }, 3000);
      }
    });
  });
}

// ── BOOT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  applyTranslations(currentLang);
  initCountdown();
  initHero();
  initGallery();
  initLightbox();
  initFaq();
  initTabs();
  initIbanCopy();
});
