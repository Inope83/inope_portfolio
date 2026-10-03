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

  // Reveal animations on scroll (single query reused by the stagger below)
  var revealEls = document.querySelectorAll(
    '.project, .service, .skill, .timeline-item'
  );
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.12 });

  // Stagger animations
  revealEls.forEach(function (el, index) {
    observer.observe(el);
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
      if (!window.requestAnimationFrame) {
        el.textContent = target + suffix;
        return;
      }
      var start = null;
      var duration = isMobile ? 800 : 1400;
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

  // Scroll effects: header background + back-to-top visibility.
  // One passive, rAF-throttled handler instead of two scroll listeners, so a
  // scroll frame triggers a single style update rather than two.
  var backTop = document.getElementById('backTop');
  var header = document.querySelector('.header');
  var scrollScheduled = false;

  function updateOnScroll() {
    var y = window.scrollY;
    if (backTop) backTop.classList.toggle('visible', y > 600);
    if (header) header.classList.toggle('scrolled', y > 50);
    scrollScheduled = false;
  }

  if (backTop || header) {
    window.addEventListener('scroll', function () {
      if (scrollScheduled) return;
      scrollScheduled = true;
      window.requestAnimationFrame(updateOnScroll);
    }, { passive: true });
  }

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: isMobile ? 'auto' : 'smooth' });
    });
  }

  // Hero code editor typewriter
  (function () {
    var codeEl = document.getElementById('typedCode');
    if (!codeEl) return;

    var lines = [
      { text: 'const developer = {', cls: 'code-line-k' },
      { text: "  name: 'Inope83',", cls: 'code-line-s' },
      { text: "  role: 'Software Developer',", cls: 'code-line-s' },
      { text: "  country: 'Timor-Leste',", cls: 'code-line-s' },
      { text: "  stack: ['HTML', 'CSS', 'JS', 'Python', 'PHP', 'Django'],", cls: 'code-line-v' },
      { text: '  available: true,', cls: 'code-line-v' },
      { text: '};', cls: 'code-line-k' }
    ];

    function renderDone() {
      var frag = document.createDocumentFragment();
      lines.forEach(function (l, i) {
        if (i) frag.appendChild(document.createTextNode('\n'));
        var span = document.createElement('span');
        span.className = l.cls;
        span.textContent = l.text;
        frag.appendChild(span);
      });
      var cursor = document.createElement('span');
      cursor.className = 'code-cursor';
      frag.appendChild(cursor);
      codeEl.textContent = '';
      codeEl.appendChild(frag);
    }

    // Only prefers-reduced-motion skips the typing. Phones run it too: the
    // per-tick work is a single text-node append, so it stays cheap.
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      renderDone();
      return;
    }

    // Needed by the resize handler at the bottom of this block.
    var mqDesktop = window.matchMedia('(min-width: 961px)');

    // Append characters to a live text node instead of rewriting innerHTML on
    // every tick: the previous version re-parsed the whole block ~250 times,
    // which forced a full re-layout of the panel each frame.
    var span = document.createElement('span');
    span.className = lines[0].cls;
    var cursor = document.createElement('span');
    cursor.className = 'code-cursor';
    codeEl.textContent = '';
    codeEl.appendChild(span);
    codeEl.appendChild(cursor);

    var li = 0, ci = 0;
    var speed = 18;

    function type() {
      var line = lines[li];
      if (ci < line.text.length) {
        var ch = line.text.charAt(ci);
        span.appendChild(document.createTextNode(ch === ' ' ? '\u00A0' : ch));
        ci++;
      } else {
        li++;
        if (li >= lines.length) { renderDone(); return; }
        span.className = lines[li].cls;
        span = document.createTextNode('\n');
        codeEl.insertBefore(span, cursor);
        span = document.createElement('span');
        span.className = lines[li].cls;
        codeEl.insertBefore(span, cursor);
        ci = 0;
      }
      setTimeout(type, speed);
    }

    // Keep the finished panel correct if the window is resized across the
    // desktop breakpoint while the typewriter is mid-run.
    var onChange = function () { renderDone(); };
    if (mqDesktop.addEventListener) {
      mqDesktop.addEventListener('change', onChange, { once: true });
    } else if (mqDesktop.addListener) {
      mqDesktop.addListener(onChange);
    }

    type();
  })();
})();