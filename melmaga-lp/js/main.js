(() => {
  // ============================================
  // Hamburger Menu
  // ============================================
  const header = document.querySelector('.l-header');
  const hamburger = document.querySelector('.l-header__hamburger');
  const mobileMenu = document.querySelector('.l-header__mobile-menu');
  const closeBtn = document.querySelector('.l-header__mobile-close');

  function openMenu() {
    header.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    header.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && mobileMenu && closeBtn) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    document.querySelectorAll('.l-header__mobile-nav-item').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
    document.querySelectorAll('.l-header__mobile-actions a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ============================================
  // FAQ Accordion
  // ============================================
  document.querySelectorAll('.c-faq__q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) {
        if (expanded) {
          answer.setAttribute('hidden', '');
        } else {
          answer.removeAttribute('hidden');
        }
      }
    });
  });

  // ============================================
  // Smooth scroll offset for sticky header
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ============================================
  // Intersection Observer for fade-in
  // ============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.p-pain__item, .p-why__card, .p-service__card, .p-roadmap__item, ' +
    '.p-voice__card, .p-reason__card, .p-bonus__item, .p-kpi__item'
  ).forEach((el) => {
    el.classList.add('js-fade');
    observer.observe(el);
  });
})();
