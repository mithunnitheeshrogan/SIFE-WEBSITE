document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav_dropdown"); // FIXED selector
    const toggleButton = document.getElementById("nav-toggle");
    const closeButton = document.getElementById("nav-close");
    const menu = document.getElementById("nav-menu");

    // ✅ Handle Dropdown Hover for Desktops
    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector(".nav_link i"); // Select only the arrow icon

        dropdown.addEventListener("mouseenter", () => {
            if (link) link.style.transform = "rotate(-180deg)";
        });

        dropdown.addEventListener("mouseleave", () => {
            if (link) link.style.transform = "rotate(0deg)";
        });
    });

    // ✅ Mobile Menu Toggle
    if (toggleButton && menu) {
        toggleButton.addEventListener("click", () => {
            menu.classList.add("active");
        });
    }

    if (closeButton && menu) {
        closeButton.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    }

    // ✅ Close dropdowns when clicking outside
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
