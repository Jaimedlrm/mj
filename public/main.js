/* =============================================================
   MARÍA & JAIME — main.js
   ============================================================= */

// ══════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════
const translations = {
  es: {
    // nav
    'nav.story':    'Nuestra Historia',
    'nav.events':   'Eventos',
    'nav.ceremony': 'La Ceremonia',
    'nav.reception':'La Finca',
    'nav.travel':   'Cómo Llegar',
    // hero
    'hero.pre':    'Os invitamos a nuestra boda',
    'hero.date':   'Sábado · 7 de Noviembre de 2026',
    'hero.loc':    'Pamplona, Navarra · España',
    'hero.scroll': 'Scroll',
    // countdown
    'cd.label': 'Cuenta atrás para el gran día',
    'cd.days':  'Días',
    'cd.hours': 'Horas',
    'cd.mins':  'Minutos',
    'cd.secs':  'Segundos',
    // invitation
    'inv.eyebrow': 'La Invitación',
    'inv.family1': 'Vicente de los Ríos Medina y Leticia Eva Mouvet Cañete',
    'inv.junto':   'junto con',
    'inv.family2': 'Rafael Francisco Cortijo Gorraiz y María Elena Rojo Barrios',
    'inv.text':    'participan el enlace matrimonial de sus hijos y tienen el gusto de invitaros a la ceremonia religiosa que se celebrará, D.m., el sábado 7 de noviembre de 2026, a las doce y media de la mañana, en la Iglesia de San Nicolás de Pamplona, y a la celebración que tendrá lugar a continuación en la Finca El Peregrino de Puente la Reina.',
    'inv.src':     'S.R.C. · Pamplona, 2026',
    // story
    'story.eyebrow': 'Nuestra Historia',
    'story.title':   'Una historia de <em>amor</em>',
    'story.p1':      'Hay historias que empiezan sin avisar — con una mirada, una risa compartida, o un momento que ninguno de los dos había planeado. La nuestra es así. De los días ordinarios que se fueron convirtiendo en algo extraordinario, de Nueva York a Pamplona, de Miami a las playas del atardecer.',
    'story.p2':      'Ahora, rodeados de las personas que más queremos, estamos listos para empezar el capítulo más bonito. No podemos esperar a celebrarlo con vosotros en el corazón de Navarra.',
    // events
    'events.eyebrow': 'Dos días de celebración',
    'events.title':   'El <em>Fin de Semana</em>',
    'ev1.tag':   'Viernes, 6 de Noviembre de 2026 · Pre-Boda',
    'ev1.title': 'El Encierro de los Enamorados',
    'ev1.desc':  'El día antes de la boda os invitamos a recorrer las legendarias calles del encierro de los San Fermines. Una experiencia única para comenzar la celebración al estilo pamplonés.',
    'ev2.tag':   'Sábado, 7 de Noviembre de 2026 · La Boda',
    'ev2.title': 'El Gran Día',
    'ev2.desc':  'La ceremonia se celebrará en la Iglesia de San Nicolás, en el casco antiguo de Pamplona, seguida de una gran celebración en La Finca El Peregrino, en Puente la Reina.',
    'ev2.stop1': 'Iglesia de San Nicolás',
    'ev2.stop2': 'Cóctel',
    'ev2.stop3': 'La Finca El Peregrino',
    'ev2.stop4': 'Baile hasta el amanecer',
    // ceremony
    'cer.eyebrow':      'La Ceremonia',
    'cer.title':        'Iglesia de <em>San Nicolás</em>',
    'cer.desc':         'Nos daremos el "sí quiero" en la hermosa Iglesia de San Nicolás de Bari, uno de los templos más antiguos e icónicos del casco viejo de Pamplona. Una joya románica del siglo XIII que abrirá sus puertas para nuestra celebración.',
    'cer.addr.label':   'Dirección',
    'cer.addr.val':     'Calle de San Miguel, 15, 31001 Pamplona, Navarra',
    'cer.time.label':   'Hora',
    'cer.time.val':     '12:30 — Las puertas abren a las 12:00',
    'cer.photo.label':  'Ceremonia sin móviles',
    'cer.photo.val':    'Os pedimos que durante el intercambio de votos guardéis el teléfono. ¡El fotógrafo lo capturará todo!',
    'cer.map':          'Ver en Google Maps',
    // reception
    'rec.eyebrow':    'La Celebración',
    'rec.title':      'La Finca <em>El Peregrino</em>',
    'rec.desc':       'Tras la ceremonia, la fiesta continúa en La Finca El Peregrino, una espectacular finca en Puente la Reina, a 20 km de Pamplona, rodeada de la naturaleza navarra. El escenario perfecto para una boda de otoño con cocina de autor y baile hasta el amanecer.',
    'rec.addr.label': 'Dirección',
    'rec.addr.val':   'C. Irunbidea, 47, 31100 Puente la Reina, Navarra',
    'rec.time.label': 'Hora de llegada',
    'rec.time.val':   '15:00 · Autobuses organizados desde Pamplona',
    'rec.env.label':  'Entorno',
    'rec.env.val':    'Finca privada con jardines, salón y terraza exterior',
    'rec.map':        'Ver en Google Maps',
    // schedule
    'sched.eyebrow': 'El Programa',
    'sched.title':   'Dos días <em>perfectos</em>',
    'sched.fri':     'Viernes 6 de Noviembre — Pre-Boda',
    'sched.sat':     'Sábado 7 de Noviembre — La Boda',
    'tl.fri.1.event': 'Punto de encuentro',      'tl.fri.1.desc': 'Plaza del Castillo, Pamplona',
    'tl.fri.2.event': 'El Encierro de los Enamorados', 'tl.fri.2.desc': 'Recorrido por las calles de los San Fermines',
    'tl.fri.3.event': 'Aperitivos en el casco viejo', 'tl.fri.3.desc': 'Pintxos y vino en los bares del centro histórico',
    'tl.fri.4.event': 'Cena de Pre-Boda',        'tl.fri.4.desc': 'Restaurante por confirmar · ¡Seguid atentos!',
    'tl.sat.1.event': 'Llegada de los invitados','tl.sat.1.desc': 'Iglesia de San Nicolás, Pamplona',
    'tl.sat.2.event': 'Ceremonia',               'tl.sat.2.desc': 'Intercambio de votos y anillos',
    'tl.sat.3.event': 'Cóctel',                  'tl.sat.3.desc': 'Cava y canapés · Pamplona',
    'tl.sat.4.event': 'Traslado a La Finca El Peregrino', 'tl.sat.4.desc': 'Autobuses organizados · Puente la Reina',
    'tl.sat.5.event': 'Almuerzo nupcial',        'tl.sat.5.desc': 'Gran Salón · La Finca El Peregrino',
    'tl.sat.6.event': 'Tarta y brindis',         'tl.sat.6.desc': 'Discursos y champagne',
    'tl.sat.7.event': 'Baile y fiesta',          'tl.sat.7.desc': 'Primer baile · Música hasta el amanecer',
    'tl.sat.8.event': 'Último baile',            'tl.sat.8.desc': 'Una noche que nunca olvidaremos',
    // travel
    'travel.eyebrow':     'Cómo Llegar',
    'travel.title':       'Viaje &amp; <em>Alojamiento</em>',
    'travel.intro':       'Pamplona está muy bien comunicada con el resto de España y Europa. La Finca El Peregrino se encuentra en Puente la Reina, a tan sólo 20 km.',
    'travel.air.title':   'En Avión',
    'travel.air.text':    'El aeropuerto más cercano es Pamplona (PNA), a 7 km del centro. También puedes llegar a Bilbao (BIO) o Madrid (MAD) y continuar en tren o coche de alquiler.',
    'travel.train.title': 'En Tren',
    'travel.train.text':  'Renfe conecta Pamplona con Madrid, Zaragoza y San Sebastián. La estación de Pamplona-Iruña está en el centro, a 10 minutos andando del casco viejo.',
    'travel.bus.title':   'Autobús de la Boda',
    'travel.bus.text':    'Se pondrá a disposición de los invitados un servicio de autobús de ida y vuelta entre Pamplona y La Finca El Peregrino (Puente la Reina). Se ruega confirmación de utilización en el RSVP.',
    'travel.hotel.title': 'Dónde Dormir',
    'travel.hotel.text':  'Recomendamos el casco antiguo de Pamplona. Algunas opciones: Gran Hotel La Perla, Hotel NH Collection y Palacio Guendulain. ¡Reservad con antelación!',
    // faq
    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.title':   '¿Tienes <em>dudas</em>?',
    'faq.q1': '¿La boda es para adultos o también para niños?',
    'faq.a1': 'Aunque adoramos a vuestros peques, hemos decidido que sea una celebración solo para adultos para que todos podáis disfrutar al máximo de la noche. Os pedimos que organicéis a alguien para cuidarlos ese día.',
    'faq.q2': '¿Hay servicio de autobús?',
    'faq.a2': 'Sí. Se pondrá a disposición de los invitados un servicio de autobús de ida y vuelta entre Pamplona y La Finca El Peregrino (Puente la Reina). Os pedimos que confirmad vuestra asistencia y si utilizaréis el autobús en el formulario de RSVP.',
    'faq.q3': '¿Hay código de vestimenta?',
    'faq.a3': 'El código de vestimenta es Black Tie Opcional — elegante y formal es bienvenido. Tened en cuenta que el casco viejo de Pamplona tiene adoquines. Por favor, evitad el blanco, el marfil y el crema por respeto a la novia.',
    'faq.q4': '¿Puedo hacer fotos durante la ceremonia?',
    'faq.a4': 'La ceremonia será "unplugged" — os pedimos que guardéis el móvil y la cámara mientras intercambiamos los votos. ¡En el cóctel y la fiesta, a disparar!',
    'faq.q5': '¿Hay opciones para vegetarianos o alergias?',
    'faq.a5': 'Por supuesto. Por favor indicadlo en vuestro RSVP y nos aseguraremos de que tengáis opciones adaptadas.',
    'faq.q6': '¿Hasta cuándo puedo confirmar asistencia?',
    'faq.a6': 'Os pedimos que confirmáis antes del 1 de septiembre de 2026 para poder cerrar números con el caterer y la finca.',
    'faq.q7': '¿Tenéis lista de boda?',
    'faq.a7': 'Nuestro mayor regalo es vuestra presencia. Pero si queréis podéis ayudarnos a empezar nuestra historia:<br /><br /><strong>ES59 1583 0001 1591 0591 4514</strong>',
    // rsvp
    'rsvp.eyebrow':     'Confirma tu Asistencia',
    'rsvp.sub':         'Confirma antes del 1 de septiembre de 2026.\nNo podemos esperar a celebrarlo contigo.',
    'rsvp.fname':       'Nombre',        'rsvp.fname.ph':   'María',
    'rsvp.lname':       'Apellido',      'rsvp.lname.ph':   'García',
    'rsvp.email':       'Email',         'rsvp.email.ph':   'tu@correo.com',
    'rsvp.attending':   '¿Asistirás?',   'rsvp.attending.ph': 'Selecciona una opción…',
    'rsvp.yes':         '¡Con mucho gusto, allí estaré!',
    'rsvp.no':          'Lo siento, no podré asistir',
    'rsvp.guests':      'Número de personas (incluido tú)',
    'rsvp.preboda':     '¿Vendrás a la Pre-Boda del viernes?',
    'rsvp.preboda.yes': 'Sí, ¡apuntado!',
    'rsvp.preboda.no':  'No podré, llegaré el sábado',
    'rsvp.bus':         '¿Utilizarás el autobús de la boda?',
    'rsvp.bus.yes':     'Sí, utilizaré el autobús',
    'rsvp.bus.no':      'No, vendré por mi cuenta',
    'rsvp.dietary':     'Alergias o requisitos alimentarios',
    'rsvp.dietary.ph':  'Vegetariano, sin gluten, alergias…',
    'rsvp.submit':      'Confirmar asistencia',
    'rsvp.thanks':      '¡Gracias! No podemos esperar a celebrarlo contigo. ✦',
    // footer
    'footer.date': '7 · Noviembre · 2026 · Pamplona, España',
    'footer.note': 'Hecho con amor para las personas que más queremos.',
  },

  en: {
    // nav
    'nav.story':    'Our Story',
    'nav.events':   'Events',
    'nav.ceremony': 'The Ceremony',
    'nav.reception':'The Venue',
    'nav.travel':   'Getting There',
    // hero
    'hero.pre':    'You are invited to our wedding',
    'hero.date':   'Saturday · November 7th, 2026',
    'hero.loc':    'Pamplona, Navarre · Spain',
    'hero.scroll': 'Scroll',
    // countdown
    'cd.label': 'Counting down to the big day',
    'cd.days':  'Days',
    'cd.hours': 'Hours',
    'cd.mins':  'Minutes',
    'cd.secs':  'Seconds',
    // invitation
    'inv.eyebrow': 'The Invitation',
    'inv.family1': 'Vicente de los Ríos Medina and Leticia Eva Mouvet Cañete',
    'inv.junto':   'together with',
    'inv.family2': 'Rafael Francisco Cortijo Gorraiz and María Elena Rojo Barrios',
    'inv.text':    'announce the wedding of their children and joyfully invite you to the religious ceremony to be held, D.V., on Saturday, November 7th, 2026, at half past twelve in the morning, at the Church of San Nicolás in Pamplona, and to the celebration that will follow at Finca El Peregrino in Puente la Reina.',
    'inv.src':     'R.S.V.P. · Pamplona, 2026',
    // story
    'story.eyebrow': 'Our Story',
    'story.title':   'A love story worth <em>celebrating</em>',
    'story.p1':      'Some stories begin quietly — with a glance, a shared laugh, or a moment neither of you planned. Ours is that kind of story. Ordinary days that turned into something extraordinary, from New York to Pamplona, from Miami to sunsets on the beach.',
    'story.p2':      'Now, surrounded by the people we love most, we are ready to begin the most beautiful chapter yet. We cannot wait to celebrate with you in the heart of Navarre.',
    // events
    'events.eyebrow': 'Two days of celebration',
    'events.title':   'The <em>Weekend</em>',
    'ev1.tag':   'Friday, November 6th, 2026 · Pre-Wedding',
    'ev1.title': 'The Lovers\' Running of the Bulls',
    'ev1.desc':  'The day before the wedding, we invite you to walk the legendary route of the San Fermín Running of the Bulls. A unique experience to kick off the celebration in true Pamplona style.',
    'ev2.tag':   'Saturday, November 7th, 2026 · The Wedding',
    'ev2.title': 'The Big Day',
    'ev2.desc':  'The ceremony will be held at the historic Church of San Nicolás, in the old town of Pamplona, followed by a grand celebration at Finca El Peregrino in Puente la Reina.',
    'ev2.stop1': 'Church of San Nicolás',
    'ev2.stop2': 'Cocktail Hour',
    'ev2.stop3': 'Finca El Peregrino',
    'ev2.stop4': 'Dancing till dawn',
    // ceremony
    'cer.eyebrow':      'The Ceremony',
    'cer.title':        'Church of <em>San Nicolás</em>',
    'cer.desc':         'We will exchange our vows in the beautiful Church of San Nicolás de Bari, one of the oldest and most iconic temples in the old town of Pamplona. A Romanesque gem from the 13th century that will open its doors for our celebration.',
    'cer.addr.label':   'Address',
    'cer.addr.val':     'Calle de San Miguel, 15, 31001 Pamplona, Navarre',
    'cer.time.label':   'Time',
    'cer.time.val':     '12:30 — Doors open at 12:00',
    'cer.photo.label':  'Unplugged ceremony',
    'cer.photo.val':    'We kindly ask you to put away your phone while we exchange our vows. Our photographer will capture every moment!',
    'cer.map':          'View on Google Maps',
    // reception
    'rec.eyebrow':    'The Reception',
    'rec.title':      'Finca <em>El Peregrino</em>',
    'rec.desc':       'After the ceremony, the party continues at Finca El Peregrino, a spectacular estate in Puente la Reina, 20 km from Pamplona, surrounded by the Navarrese countryside. The perfect setting for an autumn wedding with fine dining and dancing until dawn.',
    'rec.addr.label': 'Address',
    'rec.addr.val':   'C. Irunbidea, 47, 31100 Puente la Reina, Navarre',
    'rec.time.label': 'Arrival time',
    'rec.time.val':   '15:00 · Buses organised from Pamplona',
    'rec.env.label':  'Setting',
    'rec.env.val':    'Private estate with gardens, grand hall and outdoor terrace',
    'rec.map':        'View on Google Maps',
    // schedule
    'sched.eyebrow': 'The Programme',
    'sched.title':   'Two <em>perfect</em> days',
    'sched.fri':     'Friday, November 6th — Pre-Wedding',
    'sched.sat':     'Saturday, November 7th — The Wedding',
    'tl.fri.1.event': 'Meeting point',           'tl.fri.1.desc': 'Plaza del Castillo, Pamplona',
    'tl.fri.2.event': 'The Lovers\' Encierro',   'tl.fri.2.desc': 'Walk the legendary San Fermín route',
    'tl.fri.3.event': 'Aperitifs in the old town','tl.fri.3.desc': 'Pintxos and wine in the historic centre',
    'tl.fri.4.event': 'Pre-Wedding Dinner',      'tl.fri.4.desc': 'Restaurant TBC — stay tuned!',
    'tl.sat.1.event': 'Guests arrive',           'tl.sat.1.desc': 'Church of San Nicolás, Pamplona',
    'tl.sat.2.event': 'Ceremony',                'tl.sat.2.desc': 'Exchange of vows and rings',
    'tl.sat.3.event': 'Cocktail hour',           'tl.sat.3.desc': 'Cava and canapés · Pamplona',
    'tl.sat.4.event': 'Transfer to Finca El Peregrino', 'tl.sat.4.desc': 'Organised buses · Puente la Reina',
    'tl.sat.5.event': 'Wedding luncheon',        'tl.sat.5.desc': 'Grand Hall · Finca El Peregrino',
    'tl.sat.6.event': 'Cake & toasts',           'tl.sat.6.desc': 'Speeches and champagne',
    'tl.sat.7.event': 'Dancing & celebration',   'tl.sat.7.desc': 'First dance · Music till dawn',
    'tl.sat.8.event': 'Last dance',              'tl.sat.8.desc': 'A night we will never forget',
    // travel
    'travel.eyebrow':     'Getting There',
    'travel.title':       'Travel &amp; <em>Accommodation</em>',
    'travel.intro':       'Pamplona is very well connected to the rest of Spain and Europe. Finca El Peregrino is in Puente la Reina, just 20 km away.',
    'travel.air.title':   'By Plane',
    'travel.air.text':    'The closest airport is Pamplona (PNA), 7 km from the city centre. You can also fly to Bilbao (BIO) or Madrid (MAD) and continue by train or rental car.',
    'travel.train.title': 'By Train',
    'travel.train.text':  'Renfe connects Pamplona with Madrid, Zaragoza and San Sebastián. Pamplona-Iruña station is in the city centre, a 10-minute walk from the old town.',
    'travel.bus.title':   'Wedding Bus',
    'travel.bus.text':    'A return bus service will be provided for guests between Pamplona and Finca El Peregrino (Puente la Reina). Please confirm your use of the bus in your RSVP.',
    'travel.hotel.title': 'Where to Stay',
    'travel.hotel.text':  'We recommend staying in Pamplona\'s old town. Some options: Gran Hotel La Perla, Hotel NH Collection, and Palacio Guendulain. Book in advance!',
    // faq
    'faq.eyebrow': 'Frequently Asked Questions',
    'faq.title':   'Any <em>questions</em>?',
    'faq.q1': 'Is the wedding adults-only?',
    'faq.a1': 'Although we adore your little ones, we have decided this will be an adults-only celebration so everyone can enjoy the evening to the fullest. We kindly ask you to arrange childcare for the day.',
    'faq.q2': 'Is there a bus service?',
    'faq.a2': 'Yes. A return bus service will be available for guests between Pamplona and Finca El Peregrino (Puente la Reina). Please confirm in your RSVP whether you will be using it.',
    'faq.q3': 'Is there a dress code?',
    'faq.a3': 'The dress code is Black Tie Optional — formal attire is welcome and encouraged. Note that Pamplona\'s old town has cobblestones. Please avoid white, ivory, or cream out of respect for the bride.',
    'faq.q4': 'Can I take photos during the ceremony?',
    'faq.a4': 'We are having an unplugged ceremony — please put your phone away during the vows. Our photographers will capture everything. During the cocktail and reception, snap away!',
    'faq.q5': 'Are there vegetarian / allergy options?',
    'faq.a5': 'Absolutely. Please indicate any dietary requirements in your RSVP and we will make sure you are catered for.',
    'faq.q6': 'When is the RSVP deadline?',
    'faq.a6': 'Please RSVP by September 1st, 2026 so we can confirm numbers with the caterer and the venue.',
    'faq.q7': 'Do you have a gift registry?',
    'faq.a7': 'Your presence is our greatest gift. But if you\'d like to contribute to our story:<br /><br /><strong>ES59 1583 0001 1591 0591 4514</strong>',
    // rsvp
    'rsvp.eyebrow':     'Confirm Your Attendance',
    'rsvp.sub':         'Please reply by September 1st, 2026.\nWe cannot wait to celebrate with you.',
    'rsvp.fname':       'First Name',    'rsvp.fname.ph':   'María',
    'rsvp.lname':       'Last Name',     'rsvp.lname.ph':   'García',
    'rsvp.email':       'Email',         'rsvp.email.ph':   'you@email.com',
    'rsvp.attending':   'Will you attend?', 'rsvp.attending.ph': 'Please select…',
    'rsvp.yes':         'Joyfully accepts',
    'rsvp.no':          'Regretfully declines',
    'rsvp.guests':      'Number of guests (including yourself)',
    'rsvp.preboda':     'Will you join the Pre-Wedding on Friday?',
    'rsvp.preboda.yes': 'Yes, count me in!',
    'rsvp.preboda.no':  'No, I\'ll arrive on Saturday',
    'rsvp.bus':         'Will you use the wedding bus?',
    'rsvp.bus.yes':     'Yes, I\'ll take the bus',
    'rsvp.bus.no':      'No, I\'ll make my own way',
    'rsvp.dietary':     'Dietary requirements or allergies',
    'rsvp.dietary.ph':  'Vegetarian, gluten-free, allergies…',
    'rsvp.submit':      'Confirm attendance',
    'rsvp.thanks':      'Thank you — we cannot wait to celebrate with you! ✦',
    // footer
    'footer.date': '7 · November · 2026 · Pamplona, Spain',
    'footer.note': 'Made with love for the people we love most.',
  },
};

// ══════════════════════════════════════
// LANGUAGE  (ES / EN)
// ══════════════════════════════════════
let currentLang = 'es';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML (for elements with <em> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // sync all toggle buttons (nav + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

// ══════════════════════════════════════
// NAV  —  transparent → opaque on scroll
// ══════════════════════════════════════
(function initNav() {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ══════════════════════════════════════
// MOBILE MENU
// ══════════════════════════════════════
(function initMobileMenu() {
  const menu   = document.getElementById('mobile-menu');
  const burger = document.getElementById('burgerBtn');
  const close  = document.getElementById('menuClose');

  burger.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click',  () => menu.classList.remove('open'));
  menu.querySelectorAll('.m-link').forEach(l =>
    l.addEventListener('click', () => menu.classList.remove('open'))
  );
})();

// ══════════════════════════════════════
// HERO  —  zoom-out on load
// ══════════════════════════════════════
(function initHero() {
  const bg = document.getElementById('heroBg');
  requestAnimationFrame(() => setTimeout(() => bg.classList.add('zoomed'), 100));
})();

// ══════════════════════════════════════
// COUNTDOWN  —  to 7 Nov 2026 12:30 CET
// ══════════════════════════════════════
(function initCountdown() {
  const target = new Date('2026-11-07T12:30:00+01:00').getTime();
  const els = {
    d: document.getElementById('cd-d'),
    h: document.getElementById('cd-h'),
    m: document.getElementById('cd-m'),
    s: document.getElementById('cd-s'),
  };
  function pad(n) { return String(n).padStart(2, '0'); }
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(els).forEach(e => e.textContent = '00');
      return;
    }
    els.d.textContent = pad(Math.floor(diff / 86400000));
    els.h.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    els.m.textContent = pad(Math.floor((diff % 3600000)  / 60000));
    els.s.textContent = pad(Math.floor((diff % 60000)    / 1000));
  }
  tick();
  setInterval(tick, 1000);
})();

// ══════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════
(function initReveal() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// ══════════════════════════════════════
// GALLERY  —  drag scroll + lightbox
// ══════════════════════════════════════
(function initGallery() {
  const strip = document.getElementById('galleryStrip');
  if (!strip) return;

  let isDown = false, startX, scrollLeft;
  strip.addEventListener('mousedown', e => {
    isDown = true; strip.style.cursor = 'grabbing';
    startX = e.pageX - strip.offsetLeft; scrollLeft = strip.scrollLeft;
  });
  strip.addEventListener('mouseleave', () => { isDown = false; strip.style.cursor = 'grab'; });
  strip.addEventListener('mouseup',    () => { isDown = false; strip.style.cursor = 'grab'; });
  strip.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    strip.scrollLeft = scrollLeft - (e.pageX - strip.offsetLeft - startX) * 1.4;
  });

  const images   = Array.from(strip.querySelectorAll('img.clickable'));
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  let current    = 0;

  function openLb(idx)  { current = idx; lbImg.src = images[idx].src; lightbox.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeLb()    { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  function showNext()   { openLb((current + 1) % images.length); }
  function showPrev()   { openLb((current - 1 + images.length) % images.length); }

  images.forEach((img, idx) => img.addEventListener('click', () => openLb(idx)));
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbNext').addEventListener('click',  showNext);
  document.getElementById('lbPrev').addEventListener('click',  showPrev);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLb();
    if (e.key === 'ArrowRight')  showNext();
    if (e.key === 'ArrowLeft')   showPrev();
  });
})();

// ══════════════════════════════════════
// FAQ  —  accordion
// ══════════════════════════════════════
(function initFaq() {
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// ══════════════════════════════════════
// RSVP  —  POST to /api/rsvp
// ══════════════════════════════════════
(function initRsvp() {
  const form = document.getElementById('rsvpForm');
  const btn  = document.getElementById('rsvpBtn');
  const msg  = document.getElementById('rsvpMsg');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';

    const data = {
      firstName: form.firstName.value.trim(),
      lastName:  form.lastName.value.trim(),
      email:     form.email.value.trim(),
      attending: form.attending.value,
      guests:    form.guests.value,
      preboda:   form.preboda.value,
      bus:       form.bus.value,
      dietary:   form.dietary.value.trim(),
      lang:      currentLang,
    };

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.style.display = 'none';
        msg.style.display  = 'block';
      } else {
        throw new Error();
      }
    } catch (_) {
      btn.disabled = false;
      btn.textContent = translations[currentLang]['rsvp.submit'];
      alert(currentLang === 'es'
        ? 'Algo salió mal. Por favor, inténtalo de nuevo.'
        : 'Something went wrong. Please try again.');
    }
  });
})();

// ── Init ──
initLang();
