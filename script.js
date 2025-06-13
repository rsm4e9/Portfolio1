// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close Menu on Scroll
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal Animation
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills-box, .projects-box, .certification-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Certified on', 'ServiceNow', 'CSA & CAD'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Animate Skills Circles
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});

// Download CV Button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    const resumeUrl = 'https://drive.google.com/file/d/1GroXHUd5dNLSsJ2eBoKsUdETBwpOXDbL/view?usp=drivesdk ';
    window.open(resumeUrl, '_blank');
});