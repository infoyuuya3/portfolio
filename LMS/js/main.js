(() => {
  // ハンバーガーメニュー
  const header = document.querySelector('.l-header');
  const hamburger = document.querySelector('.l-header__hamburger');
  const mobileMenu = document.querySelector('.l-header__mobile-menu');
  const closeBtn = document.querySelector('.l-header__mobile-close');
  const mobileLinks = document.querySelectorAll('.l-header__mobile-nav-item');

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

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  // FAQ アコーディオン
  document.querySelectorAll('.c-faq-item__question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.c-faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.c-faq-item.is-open').forEach((el) => {
        el.classList.remove('is-open');
        const q = el.querySelector('.c-faq-item__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // スクロール時のヘッダー陰影
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 1px 8px rgba(20, 30, 50, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 簡易フェードイン
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.u-fade-in').forEach((el) => io.observe(el));
})();
