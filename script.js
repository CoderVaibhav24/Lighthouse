const cards = document.querySelectorAll('main > a');
let currentIndex = 0;

function rotateCards() {
    cards.forEach(card => {
        card.classList.remove('card-top', 'card-middle', 'card-bottom');
    });
    cards[currentIndex].classList.add('card-bottom');
    cards[(currentIndex + 1) % cards.length].classList.add('card-middle');
    cards[(currentIndex + 2) % cards.length].classList.add('card-top');
    currentIndex = (currentIndex + 1) % cards.length;
}

setInterval(rotateCards, 5000); 
rotateCards();