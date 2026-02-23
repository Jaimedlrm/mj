/* =============================================================
   JAIME & MARÍA — main.js
   ============================================================= */

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
  const links  = menu.querySelectorAll('.m-link');

  burger.addEventListener('click', () => menu.classList.add('open'));
  close.addEventListener('click',  () => menu.classList.remove('open'));
  links.forEach(l => l.addEventListener('click', () => menu.classList.remove('open')));
})();

// ══════════════════════════════════════
// HERO  —  zoom-out on load
// ══════════════════════════════════════
(function initHero() {
  const bg = document.getElementById('heroBg');
  requestAnimationFrame(() => {
    setTimeout(() => bg.classList.add('zoomed'), 100);
  });
})();

// ══════════════════════════════════════
// COUNTDOWN  —  to 7 Nov 2026 12:00 CET
// ══════════════════════════════════════
(function initCountdown() {
  const target = new Date('2026-11-07T12:00:00+01:00').getTime();
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
      els.d.textContent = els.h.textContent = els.m.textContent = els.s.textContent = '00';
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
// SCROLL REVEAL  (IntersectionObserver)
// ══════════════════════════════════════
(function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// ══════════════════════════════════════
// GALLERY  —  drag to scroll + lightbox
// ══════════════════════════════════════
(function initGallery() {
  const strip = document.getElementById('galleryStrip');
  if (!strip) return;

  // Drag-to-scroll
  let isDown = false, startX, scrollLeft;

  strip.addEventListener('mousedown', e => {
    isDown = true;
    strip.style.cursor = 'grabbing';
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });
  strip.addEventListener('mouseleave', () => { isDown = false; strip.style.cursor = 'grab'; });
  strip.addEventListener('mouseup',    () => { isDown = false; strip.style.cursor = 'grab'; });
  strip.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - strip.offsetLeft;
    const walk = (x - startX) * 1.4;
    strip.scrollLeft = scrollLeft - walk;
  });

  // Touch scroll (native, just ensure snapping)
  strip.addEventListener('touchstart', () => {}, { passive: true });

  // Lightbox
  const images = Array.from(strip.querySelectorAll('img.clickable'));
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  let current = 0;

  function openLb(idx) {
    current = idx;
    lbImg.src = images[idx].src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function showNext() { openLb((current + 1) % images.length); }
  function showPrev() { openLb((current - 1 + images.length) % images.length); }

  images.forEach((img, idx) => {
    img.addEventListener('click', () => openLb(idx));
  });

  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbNext').addEventListener('click', showNext);
  document.getElementById('lbPrev').addEventListener('click', showPrev);
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
    btn.textContent = 'Enviando…';

    const data = {
      firstName: form.firstName.value.trim(),
      lastName:  form.lastName.value.trim(),
      email:     form.email.value.trim(),
      attending: form.attending.value,
      guests:    form.guests.value,
      preboda:   form.preboda.value,
      dietary:   form.dietary.value.trim(),
    };

    try {
      const res = await fetch('/api/rsvp', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });

      if (res.ok) {
        form.style.display = 'none';
        msg.style.display  = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch (_) {
      btn.disabled = false;
      btn.textContent = 'Confirmar asistencia';
      alert('Algo salió mal. Por favor, inténtalo de nuevo o escríbenos directamente.');
    }
  });
})();
