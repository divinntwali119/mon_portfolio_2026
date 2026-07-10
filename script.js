const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });
});

const revealItems = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('is-visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);