/* Get all cards into an array */
const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let moves = 0;


function flipCard() {
    if (boardLock) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    moves++;
    console.log(moves);
    document.getElementById('nr-of-moves').innerHTML = moves;

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    checkForMatch();
}

/* Check if card 1 and card 2 match */
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

/*Keep cards flipped when matched */
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
    matchCount++;
    console.log(matchCount);
}
/* Turn cards if no match */
function unflipCards() {
    boardLock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [cardIsFlipped, boardLock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/* Shuffle the cards for new game */
function shuffle() {
    cards.forEach((card) => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

cards.forEach((card) => card.addEventListener("click", flipCard));

/* New game button */
function restart() {
    cards.forEach((card) => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
        resetBoard();
        shuffle();
    });
}
function countMoves() {
    document.getElementById('nr-of-moves').innerText = moves;
}
function gameWon() {
    if (matchCount == 6);
    alert("Congratulations! You won the game!");
    restart();
}
