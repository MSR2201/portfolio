document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriterText = "Moreddy Sankeerth Reddy";
    let i = 0;
    function typeWriter() {
        if (i < typewriterText.length) {
            document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
