// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});
