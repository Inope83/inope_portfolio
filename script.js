(function () {
  'use strict';

  // Set current year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var isMobile = window.matchMedia('(max-width: 960px)').matches;

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  var backdrop = document.querySelector('.menu-backdrop');

  function setMenu(open) {
    if (!nav || !menuToggle) return;
    nav.classList.toggle('open', open);
    menuToggle.classList.toggle('active', open);
    document.body.classList.toggle('menu-open', open);
    if (backdrop) backdrop.classList.toggle('visible', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
  }

  // Close on backdrop tap
  if (backdrop) {
    backdrop.addEventListener('click', function () {
      setMenu(false);
    });
  }

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  // Close menu if viewport grows past mobile width
  window.addEventListener('resize', function () {
    if (!window.matchMedia('(max-width: 960px)').matches) setMenu(false);
  });

  // Reveal animations on scroll
  var revealEls = document.querySelectorAll(
    '.project, .skill-card, .service-card, .timeline-item'
  );
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.12 });
  revealEls.forEach(function (el) { observer.observe(el); });

  // Stagger animations
  document.querySelectorAll('.project, .skill-card, .service-card, .timeline-item')
    .forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.08) + 's';
    });

  // Stat counter animation
  var statEls = document.querySelectorAll('.stat-num');
  var statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      statObserver.unobserve(el);
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var suffix = target >= 100 ? '%' : '+';
      if (isMobile || !window.requestAnimationFrame) {
        el.textContent = target + suffix;
        return;
      }
      var start = null;
      var duration = 1400;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  statEls.forEach(function (el) { statObserver.observe(el); });

  // Active nav link on scroll
  var sections = document.querySelectorAll('section[id]');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  if (sections.length && navLinks.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  // Back to top button
  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 600);
    });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: isMobile ? 'auto' : 'smooth' });
    });
  }

  // Header background change on scroll
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
})();