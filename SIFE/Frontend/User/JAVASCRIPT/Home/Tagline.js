document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        let x = e.clientX - button.offsetLeft;
        let y = e.clientY - button.offsetTop;

        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


document.querySelector(".explore-btn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Enables smooth scrolling effect
    });
});


