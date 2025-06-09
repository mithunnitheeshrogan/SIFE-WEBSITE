document.addEventListener("DOMContentLoaded", function () {
    const featureSection = document.querySelector(".features");

    function handleScroll() {
        const sectionPosition = featureSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.8) {
            featureSection.classList.add("show");
            window.removeEventListener("scroll", handleScroll); // Remove event after animation
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once in case it's already in view
});
