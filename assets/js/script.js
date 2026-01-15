// Animación simple al hacer scroll
const elements = document.querySelectorAll('.hero, .skills, .projects, .project-card, .cv, .contact');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// Marcar enlace activo del menú
const links = document.querySelectorAll('nav ul li a');
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}
