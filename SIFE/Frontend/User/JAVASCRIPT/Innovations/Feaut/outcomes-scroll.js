document.addEventListener("DOMContentLoaded", function () {
    const outcomeItems = document.querySelectorAll(".outcome-item");

    function revealOnScroll() {
        outcomeItems.forEach((item) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (itemPosition < screenPosition) {
                item.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to check visibility
});
