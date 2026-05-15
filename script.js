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

// Theme Switcher
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to simplified theme
const savedTheme = localStorage.getItem('theme') || 'simplified';
if (savedTheme === 'futuristic') {
  htmlElement.classList.add('futuristic');
  themeToggle.textContent = '☀️';
} else {
  htmlElement.classList.remove('futuristic');
  themeToggle.textContent = '🌙';
}

// Theme Toggle Handler
themeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('futuristic');
  
  const isFuturistic = htmlElement.classList.contains('futuristic');
  localStorage.setItem('theme', isFuturistic ? 'futuristic' : 'simplified');
  themeToggle.textContent = isFuturistic ? '☀️' : '🌙';
  
  // Trigger subtle animation on theme change
  themeToggle.style.animation = 'none';
  setTimeout(() => {
    themeToggle.style.animation = '';
  }, 10);
});

// Enhanced scroll effects for futuristic theme
window.addEventListener('scroll', () => {
  const isFuturistic = htmlElement.classList.contains('futuristic');
  
  if (isFuturistic) {
    // Parallax effect on scroll
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.bg-orb');
    
    orbs.forEach((orb, index) => {
      const offset = scrolled * (0.3 + index * 0.1);
      orb.style.transform = `translateY(${offset}px)`;
    });
    
    // Enhanced glow on cards as they come into view
    document.querySelectorAll('.stat-card, .glass').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView && isFuturistic) {
        const distance = Math.abs(rect.top - window.innerHeight / 2);
        const intensity = Math.max(0, 1 - distance / window.innerHeight);
        card.style.opacity = Math.min(1, 0.7 + intensity * 0.3);
      }
    });
  }
});
