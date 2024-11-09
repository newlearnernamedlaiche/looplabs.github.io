// Smooth Scroll to Main Section
document.querySelector('.cta').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('main').offsetTop,
    behavior: 'smooth',
  });
});

// Fade-in Hero Animation
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  hero.style.opacity = '0';
  hero.style.transition = 'opacity 1.5s ease';
  hero.style.opacity = '1';
});
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(20px)';
  hero.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
  
  setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 100); // Delay to ensure smooth animation
});
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('your-service-id', 'your-template-id', this)
    .then(function() {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message. Please try again later.');
    });
});
