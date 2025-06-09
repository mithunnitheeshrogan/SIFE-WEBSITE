// Detect when the element enters the viewport
window.addEventListener('scroll', function () {
    const section = document.querySelector('.company-text-content');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
        section.classList.add('show');
    }
});
