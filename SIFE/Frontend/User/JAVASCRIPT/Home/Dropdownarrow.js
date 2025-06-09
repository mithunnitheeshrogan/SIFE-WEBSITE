document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav_dropdown");

    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector(".nav_link");
        const submenu = dropdown.querySelector(".nav_submenu");
        const arrow = link.querySelector("i");

        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            // Close other open dropdowns
            document.querySelectorAll(".nav_submenu").forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove("active");
                    menu.previousElementSibling.querySelector("i").style.transform = "rotate(0deg)";
                }
            });

            // Toggle current dropdown
            submenu.classList.toggle("active");

            // Toggle arrow rotation
            if (submenu.classList.contains("active")) {
                arrow.style.transform = "rotate(-180deg)";
            } else {
                arrow.style.transform = "rotate(0deg)";
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                submenu.classList.remove("active");
                arrow.style.transform = "rotate(0deg)";
            }
        });
    });
});
