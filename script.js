// Select all nav links and sections
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinksContainer.classList.toggle('show');
});

// Function to show the selected section and update active link
function showSection(id) {
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  // Close mobile menu on selection
  navLinksContainer.classList.remove('show');
  hamburger.setAttribute('aria-expanded', false);

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click event listeners to nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    showSection(targetId);
  });
});

// Show home section by default on page load
window.addEventListener('load', () => {
  showSection('home');
});
