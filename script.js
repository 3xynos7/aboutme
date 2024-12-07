document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only prevent default if the link does not have target="_blank"
            if (!this.target || this.target !== '_blank') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
