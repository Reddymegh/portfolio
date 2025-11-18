// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to contact button
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
