const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Remove 'active' class from all buttons and panels
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add 'active' class to clicked button and corresponding panel
    btn.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
