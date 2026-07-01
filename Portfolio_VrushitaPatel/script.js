// scroll reveal
const hiddenEls = document.querySelectorAll('.hidden');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

hiddenEls.forEach(el => revealObs.observe(el));

// mobile menu toggle
const ham = document.getElementById('ham');
const mobileNav = document.getElementById('mobileNav');

ham.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// close mobile menu when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// highlight active nav link on scroll
const sections = document.querySelectorAll('section, div[id]');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#00d4ff' : '';
  });
});
