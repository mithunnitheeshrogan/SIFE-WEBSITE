document.addEventListener("DOMContentLoaded", function () {
    const featuresSection = document.querySelector(".features");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        featuresSection.classList.add("show");
                        observer.unobserve(featuresSection); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        observer.observe(featuresSection);
    } else {
        // Fallback for older browsers
        featuresSection.classList.add("show");
    }
});
