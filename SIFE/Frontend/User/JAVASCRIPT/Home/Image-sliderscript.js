// Select elements correctly
let items = document.querySelectorAll('.image-slider .slider .image-list .image-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.slider-thumbnail .slider-thumbnail-item');

let countItem = items.length;
let itemActive = 0;

// Function to show active slider item
function showSlider() {
    // Remove 'active' class from all items
    document.querySelector('.image-slider .slider .image-list .image-item.active')?.classList.remove('active');
    document.querySelector('.slider-thumbnail .slider-thumbnail-item.active')?.classList.remove('active');

    // Add 'active' class to the current item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Reset the auto-slide timer
    resetAutoSlide();
}

// Next button functionality
next.addEventListener('click', () => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
});

// Previous button functionality
prev.addEventListener('click', () => {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
});

// Thumbnail click functionality
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// Auto-slide functionality
let autoSlide = setInterval(() => next.click(), 10000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => next.click(), 10000);
}

// Initialize the first slide as active
showSlider();
