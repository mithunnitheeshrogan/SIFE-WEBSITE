const revealElements = document.querySelectorAll('.step, .workflow-title');

const observerOptions = {
  threshold: 0.5, // The element must be 50% visible before triggering
};

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it's revealed
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

revealElements.forEach(el => observer.observe(el));
