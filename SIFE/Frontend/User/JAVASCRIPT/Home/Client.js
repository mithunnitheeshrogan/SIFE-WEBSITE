const brands = document.querySelector("ul.brands");

if (brands) {
    const totalBrand = brands.children.length;

    // Store the total brand count in a CSS variable
    document.documentElement.style.setProperty("--total-brand", totalBrand);

    // Avoid duplicate cloning if already done
    if (!brands.dataset.cloned) {
        const originalBrands = Array.from(brands.children);
        originalBrands.forEach(brand => {
            brands.appendChild(brand.cloneNode(true)); // Append each logo once
        });

        brands.dataset.cloned = "true"; // Mark as cloned to prevent duplication
    }

    // Ensure smooth animation after DOM updates
    requestAnimationFrame(() => {
        brands.classList.add("loaded"); // Optional: Use this if needed for animation
    });
}
