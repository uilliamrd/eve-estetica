(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('navToggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.main-nav a, .header-cta a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    var lastScrollY = window.scrollY;
    var hideThreshold = 120;
    var updateHeaderScrollState = function () {
      var currentScrollY = window.scrollY;
      header.classList.toggle('is-scrolled', currentScrollY > 24);

      if (header.classList.contains('is-open')) {
        header.classList.remove('is-hidden');
      } else if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
        header.classList.add('is-hidden');
      } else if (currentScrollY < lastScrollY) {
        header.classList.remove('is-hidden');
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
    updateHeaderScrollState();
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
