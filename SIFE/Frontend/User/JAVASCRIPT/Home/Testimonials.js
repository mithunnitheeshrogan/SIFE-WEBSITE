document.addEventListener("DOMContentLoaded", async function () {
    const swiperWrapper = document.getElementById("testimonial-wrapper");

    if (!swiperWrapper) {
        console.error("Element with ID 'testimonial-wrapper' not found.");
        return;
    }

    const escapeHTML = (str) =>
        str?.replace(/[&<>'"]/g, (tag) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
            }[tag] || tag)
        ) || "";

    try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
            swiperWrapper.innerHTML = "<div class='swiper-slide'><p>No testimonials found.</p></div>";
            return;
        }

        swiperWrapper.innerHTML = ""; // Clear placeholder

        data.forEach((testimonial) => {
            const name = escapeHTML(testimonial.name || "Anonymous");
            const designation = escapeHTML(testimonial.designation || "Customer");
            const review = escapeHTML(testimonial.review || "No review provided.");
            const imagePath = testimonial.image_path?.startsWith("http")
                ? testimonial.image_path
                : `/static/uploads/default.jpg`; // fallback if missing or invalid

            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `
                <div class="testi-item">
                    <div class="testi-avatar">
                        <img src="${imagePath}" 
                             alt="${name}" 
                             loading="lazy" 
                             onerror="this.onerror=null;this.src='/static/uploads/default.jpg';">
                    </div>
                    <div class="listing-rating" aria-hidden="true">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <p>"${review}"</p>
                    <h3>${name}</h3>
                    <h4>${designation}</h4>
                </div>
            `;
            swiperWrapper.appendChild(slide);
        });

        // ✅ Initialize Swiper
        new Swiper(".testimonials-carousel", {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".listing-carousel-button-next",
                prevEl: ".listing-carousel-button-prev",
            },
            pagination: {
                el: ".tc-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        swiperWrapper.innerHTML = "<div class='swiper-slide'><p>Unable to load testimonials at this time.</p></div>";
    }
});
