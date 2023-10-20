//* Wait for the DOM to finish loading before running the game 
// Get shuffle function and card click event listener

document.addEventListener("DOMContentLoaded", function () {
    cards.forEach((card) => card.addEventListener("click", flipCard));
    shuffle();
    /* Shuffle the cards for new game */

    function shuffle() {
        cards.forEach((card) => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    };
});

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
    document.getElementById("nr-of-moves").innerHTML = moves;

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
    if (matchCount == 6) {
        showAlert();
    }
    console.log(matchCount);
}
/* Unflip cards if no match */
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

function showAlert() {
    let myText = "Congratulation! You won the game!";
    setTimeout(() => {
        alert(myText);
    }, 700);
}
/* Ask for confirmation before starting a new game */
function getConfirmation() {
    let startGame = confirm("Are you sure you want to start a new game?");
    if (startGame == true) {
        restart();
    }
}
/* New game button */
function restart() {
    cards.forEach((card) => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
        resetBoard();
        moves = 0;
        document.getElementById("nr-of-moves").innerHTML = moves;
        matchCount = 0;
    });
}