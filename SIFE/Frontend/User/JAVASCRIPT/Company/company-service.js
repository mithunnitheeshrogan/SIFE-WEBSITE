document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".company-service-text-content");
    const images = document.querySelectorAll(".company-service-text-image img");

    function revealSections() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight * 0.85) {
                section.classList.add("show");
            }
        });
    }

    function lazyLoadImages() {
        images.forEach((img) => {
            const imgPosition = img.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (imgPosition < windowHeight * 1.1) {
                img.classList.add("loaded");
            }
        });
    }

    window.addEventListener("scroll", () => {
        revealSections();
        lazyLoadImages();
    });

    revealSections();
    lazyLoadImages();
});

