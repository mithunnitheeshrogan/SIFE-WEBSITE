document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLinks = document.querySelectorAll(".nav_link");

    function closeMenu() {
        navMenu.classList.remove("show");
        navMenu.setAttribute("aria-expanded", "false");
    }

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show");
            navMenu.setAttribute("aria-expanded", "true");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", closeMenu);
    }

    navLinks.forEach(link =>
        link.addEventListener("click", closeMenu)
    );

    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            if (navMenu.classList.contains("show")) {
                closeMenu();
            }
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && navMenu.classList.contains("show")) {
            closeMenu();
        }
    });
});
