// Nav dark/light on scroll
const nav = document.querySelector('nav');
const hero = document.querySelector('.hero-section, .page-hero');
if (hero) {
  const obs = new IntersectionObserver(
    ([e]) => nav.classList.toggle('dark-nav', !e.isIntersecting),
    { rootMargin: '-62px 0px 0px 0px' }
  );
  obs.observe(hero);
} else {
  nav.classList.add('dark-nav');
}

// Active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href') || '';
  const path = window.location.pathname;
  if (href === '/' && (path === '/' || path === '/index.html')) {
    a.classList.add('active');
  } else if (href !== '/' && path.startsWith(href)) {
    a.classList.add('active');
  }
});
