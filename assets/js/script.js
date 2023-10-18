const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;
let boardLock = false;

function flipCard() {
    if (boardLock) return;
    this.classList.add("flip");

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    cardIsFlipped = false;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {

    boardLock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        boardLock = false;
    }, 1500);
}

cards.forEach(card => card.addEventListener("click", flipCard));