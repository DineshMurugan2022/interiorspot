document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Add data-reveal to any section not already tagged
    const sections = document.querySelectorAll('section, .nl-section, .nl-split-section, .nl-marquee-section');
    sections.forEach((section) => {
        if (!section.hasAttribute('data-reveal')) {
            section.setAttribute('data-reveal', 'up');
        }
    });

    // Step 2: Now query ALL data-reveal elements (including newly tagged ones)
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.01,
        rootMargin: '0px 0px 80px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
