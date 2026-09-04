/* Aluminio y Cristalería Jesús Ortiz — interacciones de la página */

(function () {
  'use strict';

  /* Menú móvil ------------------------------------------------------------- */
  var menuBtn = document.querySelector('.menu-btn');

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var abierto = document.body.classList.toggle('menu-abierto');
      menuBtn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar el menú al pulsar un enlace
    document.querySelectorAll('.nav-links a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        document.body.classList.remove('menu-abierto');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Sombra en la barra de navegación al hacer scroll ------------------------ */
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
  }, { passive: true });

  /* FAQ: al abrir una pregunta se cierran las demás -------------------------- */
  var faqs = document.querySelectorAll('.faq-lista details');

  faqs.forEach(function (detalle) {
    detalle.addEventListener('toggle', function () {
      if (detalle.open) {
        faqs.forEach(function (otro) {
          if (otro !== detalle) { otro.open = false; }
        });
      }
    });
  });

  /* Animaciones de aparición al hacer scroll --------------------------------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          io.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* Año actual en el pie de página -------------------------------------------- */
  var anio = document.getElementById('anio');
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
})();
