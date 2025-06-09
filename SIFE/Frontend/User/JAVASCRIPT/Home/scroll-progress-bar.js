const progressButton = document.getElementById("progress");

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Update progress button appearance
    progressButton.style.background = `conic-gradient(#007bff ${scrollPercentage}%, #ccc ${scrollPercentage}%)`;

    // Show the button when scrolling
    if (scrollTop > 100) {
        progressButton.style.opacity = "1";
        progressButton.style.visibility = "visible";
    } else {
        progressButton.style.opacity = "0";
        progressButton.style.visibility = "hidden";
    }
});

// Scroll to top when clicked
progressButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
