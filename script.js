// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navLinks.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        }
    });
});

// Contact form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been received. (This is a demo - in real site it would send email)");
        contactForm.reset();
    });
}

// Simple scroll animation for cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initial styles for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    el.style.transition = 'all 0.6s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
});