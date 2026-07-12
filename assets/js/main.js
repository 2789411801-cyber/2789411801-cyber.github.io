/* Main site behavior */

(function() {
  // --- Theme persistence ---
  const theme = localStorage.getItem('lake_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lake_theme', next);
    });
  }

  // --- Admin mode: Ctrl+Shift+A ---
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      var adminMeta = document.querySelector('meta[name="admin-url"]');
      window.location.href = adminMeta ? adminMeta.content : '/admin/';
    }
  });

  // --- Scroll up button ---
  const scrollUp = document.getElementById('scroll-up');
  if (scrollUp) {
    window.addEventListener('scroll', function() {
      scrollUp.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
  }

  // --- Sticky nav shadow ---
  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Scroll reveal ---
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.article-card, .sidebar-card').forEach(function(el) {
    observer.observe(el);
  });
})();
