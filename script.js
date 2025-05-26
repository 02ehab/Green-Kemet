// ScrollReveal animation
ScrollReveal().reveal('section', {
  delay: 100,
  distance: '50px',
  origin: 'bottom',
  duration: 800,
  reset: false
});

// Optional: Smooth scroll to sections (if needed later)
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}