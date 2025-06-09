
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('oem-visible');
      }
    });
  });

  document.querySelectorAll('.oem-content-block, .oem-outcome-item').forEach(el => {
    observer.observe(el);
  });

