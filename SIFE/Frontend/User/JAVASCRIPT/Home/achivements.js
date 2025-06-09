document.addEventListener("DOMContentLoaded", () => {
    // Get all the counter elements
    const counters = document.querySelectorAll('.counter');
  
    // Function to animate the counters
    function animateCounters() {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get the target number
        const start = 0;
        let current = start;
        const increment = target / 100; // Increment value for animation
  
        // Set the interval to update the counter
        const interval = setInterval(() => {
          if (current < target) {
            current += increment;
            counter.innerText = Math.ceil(current); // Update the text with the incremented value
          } else {
            counter.innerText = target + "+"; // Ensure the counter reaches the target
            clearInterval(interval); // Stop the interval once the target is reached
          }
        }, 10); // 10ms interval for smooth animation
      });
    }
  
    // Intersection Observer to trigger animation when section is visible in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters(); // Start animation when section is in the viewport
          observer.disconnect(); // Disconnect observer after triggering animation
        }
      });
    }, { threshold: 0.5 });
  
    // Observe the achievements section
    const achievementsSection = document.querySelector('.achievements-section');
    observer.observe(achievementsSection);
  });
  