/* ============================================================
   Dr. Chunhua "Leo" Liao — Academic Website
   main.js  |  Vanilla JS — no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ─── YEAR ─────────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ─── HEADER SCROLL SHADOW ──────────────────────────────── */
  const header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── MOBILE NAV TOGGLE ─────────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ─── ACTIVE NAV HIGHLIGHT ──────────────────────────────── */
  const sections = ['hero', 'about', 'research', 'publications', 'software', 'contact'];
  const navAnchors = {};
  navLinks.querySelectorAll('a[href^="#"]').forEach(a => {
    const id = a.getAttribute('href').slice(1);
    navAnchors[id] = a;
  });

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });
    Object.entries(navAnchors).forEach(([id, a]) => {
      a.classList.toggle('active', id === current);
    });
  }

  /* ─── SCROLL-REVEAL (IntersectionObserver) ──────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Mark elements for reveal
  document.querySelectorAll(
    '.research-card, .about-card, .pub-item, .software-card, .contact-card'
  ).forEach((el, i) => {
    el.classList.add('reveal');
    if (!el.dataset.delay) el.dataset.delay = String(i * 80);
    revealObserver.observe(el);
  });

  // Fallback: reveal all after 2s in case IntersectionObserver doesn't fire
  // (helps with crawlers, print, static previews)
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 2000);

  /* ─── SMOOTH SCROLL POLYFILL (fallback for older Safari) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 64;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── TYPING EFFECT for hero label ─────────────────────── */
  const heroLabel = document.querySelector('.hero-label');
  if (heroLabel) {
    const original = heroLabel.textContent.trim();
    heroLabel.textContent = '';
    heroLabel.style.borderRight = '2px solid var(--accent)';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < original.length) {
        heroLabel.textContent += original[i++];
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          heroLabel.style.borderRight = 'none';
        }, 500);
      }
    }, 45);
  }

  /* ─── COUNTER ANIMATION for stats ──────────────────────── */
  function animateCounter(el, end, duration, suffix) {
    const start = 0;
    const startTime = performance.now();

    // handle non-numeric
    if (isNaN(end)) {
      el.textContent = el.dataset.target;
      return;
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * eased);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(el => {
          const raw = el.textContent.trim();
          const num = parseInt(raw.replace(/[^0-9]/g, ''), 10);
          const suffix = raw.includes('+') ? '+' : '';
          if (!isNaN(num)) animateCounter(el, num, 1500, suffix);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) statsObserver.observe(statsEl);

  /* ─── PARALLAX on hero (subtle) ─────────────────────────── */
  const heroSection = document.getElementById('hero');
  function heroParallax() {
    if (!heroSection || window.scrollY > window.innerHeight) return;
    const offset = window.scrollY * 0.15;
    heroSection.style.backgroundPositionY = `${offset}px`;
  }
  window.addEventListener('scroll', heroParallax, { passive: true });

  /* ─── INIT ───────────────────────────────────────────────── */
  updateActiveNav();

})();
