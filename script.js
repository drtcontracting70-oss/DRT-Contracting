// DRT Contracting – simple JS for menu, year, and small niceties
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primary-nav');
if (menuToggle && primaryNav){
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Optional: animate stats on intersection
const yearsEl = document.getElementById('statYears');
if (yearsEl){
  const target = 15;
  let current = 0;
  const step = () => {
    current += 1;
    yearsEl.textContent = current + '+';
    if (current < target) requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)){
      requestAnimationFrame(step);
      obs.disconnect();
    }
  });
  obs.observe(yearsEl);
}
