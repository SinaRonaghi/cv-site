const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -6% 0px',
  }
);

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 60, 360)}ms`;
  observer.observe(el);
});
