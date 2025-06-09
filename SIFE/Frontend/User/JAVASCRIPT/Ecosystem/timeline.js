document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".timeline-section");
    const timelineLine = document.querySelector(".timeline-line"); // New div for line instead of pseudo-element

    function updateTimelineHeight() {
        let firstVisible = null;
        let lastVisible = null;
        
        sections.forEach((section) => {
            if (section.classList.contains("visible")) {
                if (!firstVisible) firstVisible = section;
                lastVisible = section;
            }
        });

        if (firstVisible && lastVisible) {
            const firstTop = firstVisible.offsetTop;
            const lastBottom = lastVisible.offsetTop + lastVisible.offsetHeight;

            timelineLine.style.top = firstTop + "px"; // Ensure it starts from the first visible section
            timelineLine.style.height = `${lastBottom - firstTop}px`;
        }
    }

    const observer = new IntersectionObserver((entries) => {
        let updated = false;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                updated = true;
            }
        });

        if (updated) {
            setTimeout(updateTimelineHeight, 300); // Small delay for smooth animation
        }
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Ensure the timeline appears correctly on page load
    setTimeout(updateTimelineHeight, 500);
});
