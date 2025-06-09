// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2, out_mode: "out" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typing Text Animation
const typingText = document.getElementById('typing-text');
const messages = [
  "Empowering Smart Devices",
  "Redefining Modern Tech",
  "Seamless Innovation for You",
  "Building the Future with Intelligence",
  "Innovative Solutions, Real Impact",
  "Transforming Ideas into Reality",
  "Smart Technology, Smarter Living",
  "Engineering Tomorrow's Possibilities"
];
let msgIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingText) return; // safety check

  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = '';
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      typeEffect();
    }, 1500);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Smooth Scroll Function
function scrollToSection() {
  const target = document.getElementById('project_section');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
