/** 
 * Wait for the DOM to finish loading before running the game
*/
document.addEventListener('DOMContentLoaded', function() {
    
        });
/** 
 * Get cards, shuffle all cards on the board and add Event Listener 
 * to cards to listen for a user click 
*/
const cards = document.querySelectorAll(".memory-card");
function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

cards.forEach((card) => card.addEventListener("click", flipCard));


let cardIsFlipped = false;
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let moves = 0;
/**
 * Checks first if the game board is locked. 
 * If not, the card which has been clicked is the first card
 * and is flipped
 */
function flipCard() {
    if (boardLock) return;
    if (this === firstCard) return;

    this.classList.add("flip");
/* Each flip increments moves counter and returns number to DOM */
    moves++;
    document.getElementById("nr-of-moves").innerHTML = moves;

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        firstCard = this;

        return;
    }
/* If the second card was flipped the match check starts */
    secondCard = this;

    checkForMatch();
}

/** Checks if card 1 and card 2 match
 * If match cards Event Listener for click is removed
 * and the cards will no longer be flipped
 */
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
/** Each match increments match counter
 * If match count reaches 6 a window alert will pop up
 */
    matchCount++;
    if (matchCount == 6) {
        showAlert();
   }
}
/** 
 * When there is no match, cards will be unflipped
 * after 1 second and board reset
 */ 
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
/**
 * When all cards are matched a window alert will pop-up
 * with congratulations and information that all matches
 * were found.
 */
function showAlert() {
    let myText = "Congratulations!\nYou found all matches!";
    setTimeout(() => {
        alert(myText);
    }, 700);
}
/** When user click on new game butten the user has to confirm 
 * that a new game should start 
 */
function getConfirmation() {
    let startGame = confirm("Are you sure you want to start a new game?");
    if (startGame == true) {
        restart();
    }
}
/** After confirmation to start new game 
 * cards will be unflipped, board will be reset
 * moves and match counter will be reset to 0
 * cards will be shuffled
 * set Timeout delays the card flipping by 0.5 seconds
 * so that the user doesn't see the shuffling
 */ 
function restart() {
    cards.forEach((card) => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    });
    setTimeout(() => {
        resetBoard();
        shuffleCards();
        moves = 0;
        document.getElementById("nr-of-moves").innerHTML = moves;
        matchCount = 0;
    }, 500);
};