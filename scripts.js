document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const navList = document.querySelector('.header__nav-list');

  if (burger && navList) {
    const toggleMenu = function() {
      navList.classList.toggle('header__nav-list--active');
      burger.classList.toggle('header__burger--active');
      const isExpanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !isExpanded);
    };

    burger.addEventListener('click', toggleMenu);

    burger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Zamknij menu po kliknięciu w link
    const navLinks = document.querySelectorAll('.header__nav-item a');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navList.classList.remove('header__nav-list--active');
        burger.classList.remove('header__burger--active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Zamknij menu po kliknięciu poza nim
    document.addEventListener('click', function(event) {
      if (navList.classList.contains('header__nav-list--active') && !navList.contains(event.target) && !burger.contains(event.target)) {
        navList.classList.remove('header__nav-list--active');
        burger.classList.remove('header__burger--active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.error('Nie znaleziono elementu burger lub navList.');
  }
});

console.log('Skrypt załadowany');