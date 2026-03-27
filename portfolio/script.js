(function () {
  'use strict';

  // Set current year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Close menu when clicking on a link
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Reveal animations on scroll
  var revealEls = document.querySelectorAll('.project, .skill-card, .service-card, .timeline-item, .testimonial');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
  revealEls.forEach(function (el) { observer.observe(el); });

  // Stagger animations
  document.querySelectorAll('.project').forEach(function (project, index) {
    project.style.transitionDelay = (index * 0.08) + 's';
  });
  document.querySelectorAll('.skill-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.service-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.timeline-item').forEach(function (item, i) {
    item.style.transitionDelay = (i * 0.12) + 's';
  });
  document.querySelectorAll('.testimonial').forEach(function (t, i) {
    t.style.transitionDelay = (i * 0.1) + 's';
  });

  // Back to top button
  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 600);
    });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header background change on scroll
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.background = window.scrollY > 50 ? 'rgba(15, 15, 15, 0.95)' : 'rgba(15, 15, 15, 0.8)';
    });
  }
})();
