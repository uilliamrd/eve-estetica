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
    var setScrolledState = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', setScrolledState, { passive: true });
    setScrolledState();
  }

  var watermark = document.getElementById('heroWatermark');
  var heroSection = document.querySelector('.hero');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (watermark && heroSection && !reduceMotion) {
    var ticking = false;
    var updateParallax = function () {
      var rect = heroSection.getBoundingClientRect();
      var offset = rect.top * -0.08;
      watermark.style.transform = 'translate3d(0, calc(-50% + ' + offset + 'px), 0)';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
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
