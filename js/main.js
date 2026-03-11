/**
 * Brikke Studio — main.js
 * Scroll reveal animations + mobile navigation
 */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks  = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Sticky nav background on scroll ---- */
  const nav = document.querySelector('.nav');

  if (nav) {
    function handleNavScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  /* ---- Scroll-reveal using IntersectionObserver ---- */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---- Smooth active link highlighting ---- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

  if (sections.length > 0 && navAnchors.length > 0) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }
})();
