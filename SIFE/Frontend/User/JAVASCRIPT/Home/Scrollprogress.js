// Get progress button
const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let progressValue = Math.round((scrollTop / scrollHeight) * 100);

    // Update the progress circle dynamically
    progress.style.background = `conic-gradient(#007bff ${progressValue}%, #ccc ${progressValue}%)`;

    // Show button only when scrolled down
    if (scrollTop > 100) {
        progress.style.opacity = "1";
        progress.style.visibility = "visible";
    } else {
        progress.style.opacity = "0";
        progress.style.visibility = "hidden";
    }
});

// Scroll to top when clicking the button
progress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
