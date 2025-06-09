// Select all the value cards
const valueCards = document.querySelectorAll('.values-item');

// Function to add the 'reveal' class when the card is in the viewport
function revealCardsOnScroll() {
    valueCards.forEach(card => {
        // Get the position of the card relative to the viewport
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the card is in the viewport, add the 'reveal' class
        if (cardTop < windowHeight - 100) {  // -100 for a slight early trigger
            card.classList.add('reveal');
        }
    });
}

// Call the function initially to check the position of cards on page load
revealCardsOnScroll();

// Add an event listener to trigger the function when the page is scrolled
window.addEventListener('scroll', revealCardsOnScroll);
