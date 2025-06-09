document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".ecosystem-content, .ecosystem-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});
