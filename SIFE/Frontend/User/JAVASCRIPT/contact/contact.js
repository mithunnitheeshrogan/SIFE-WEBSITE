const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");

// Open Search Overlay
searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    searchInput.focus(); // Auto-focus the input field
});

// Close Search Overlay
searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
});

// Close Search Overlay when clicking outside the search box
searchOverlay.addEventListener("click", (event) => {
    if (!event.target.closest(".search_box")) {
        searchOverlay.classList.remove("active");
    }
});
