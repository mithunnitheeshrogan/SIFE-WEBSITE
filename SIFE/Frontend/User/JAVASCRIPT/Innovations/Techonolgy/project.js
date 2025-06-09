document.querySelectorAll('.project').forEach(project => {
  const btn = project.querySelector('.read-more-btn');
  const desc = project.querySelector('.project-description');

  // Optional: Set initial truncated text length (if you want truncation)
  const fullText = desc.textContent.trim();
  const truncateLength = 150; // characters to show initially

  if (fullText.length > truncateLength) {
    desc.textContent = fullText.slice(0, truncateLength) + '...';
    btn.style.display = 'inline-block'; // show button only if text is long
  } else {
    btn.style.display = 'none'; // hide button if text is short
  }

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    if (!isExpanded) {
      // Show full text
      desc.textContent = fullText;
      btn.textContent = 'Read Less';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      // Show truncated text
      desc.textContent = fullText.slice(0, truncateLength) + '...';
      btn.textContent = 'Read More';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
