// reveal-on-scroll.js

// Function to reveal items on scroll
function revealOnScroll() {
    const items = document.querySelectorAll('.building-outcome-item');
  
    items.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (itemTop < windowHeight - 100) {
        item.classList.add('reveal');
  
        // Optional: stagger reveal animation
        item.style.transitionDelay = `${index * 0.1}s`;
      }
    });
  }
  
  // Event listeners for scroll and load
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  