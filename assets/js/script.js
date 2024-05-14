/** 
 * Wait for the DOM to finish loading before running the game
*/
document.addEventListener('DOMContentLoaded', function() {
    
});

const gameContainer = document.querySelector('.game-container');
document.getElementById('start-game').addEventListener('click', restart);
allCards = [];
cards = [];
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let moves = 0;
let level;
let difficulty;
let numberOfCards;



// Get all cards from json file
fetch("./data/cards.json")
  .then((response) => response.json())
  .then((data) => {
    allCards = [...data];
    selectLevel();
    shuffleCards();
    generateCards();
  });


// Get difficulty level from user selection and restart game
// document.getElementById('start-game').addEventListener('click', restart);

function selectLevel() {
  let level = document.getElementById('level').value; 

  if(level == 'easy') difficulty = 4;
  else if(level == 'medium') difficulty = 8;
  else if(level == 'hard') difficulty = 12;
  else if(level == 'expert') difficulty = 16;
  else if(level == 'extreme') difficulty = 24;

  // Take only number of cards according to difficulty level
  let numberOfCards = allCards.slice(0, difficulty);
  // Use spread syntax to get a pair of each card
  cards = [...numberOfCards, ...numberOfCards]
  
  // console.log(numberOfCards)
  console.log(cards)
  shuffleCards();
}


function shuffleCards() {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  console.log(cards)
}


function generateCards() {
  for (let card of cards) {

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gameContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}


// Checks first if the game board is locked. 
// If not, the card which has been clicked is the first card
//  and is flipped
function flipCard() {
  if (boardLock) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  //Each flip adds one move to the score and returns number to DOM */


  if (!firstCard) {
    firstCard = this;

    return;
  }
  // If the second card was flipped the match check starts */
  secondCard = this;
  // moves++;
  // document.getElementById("nr-of-moves").innerHTML = moves;
  boardLock = true;

  checkForMatch();
}


// Checks if card 1 and card 2 match
// If match, cards Event Listener for click is removed
// and the cards will no longer be flipped
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  moves++;
  displayMoves();
  if (isMatch) {
    disableCards();
  } else { unflipCards(); }
}

function displayMoves() {
  document.getElementById("nr-of-moves").innerHTML = moves
}


function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();

  // Each match increments match counter
  // If match count reaches 6 pairs, the game is over
  // and a window alert will pop up

  matchCount++;
  if (matchCount == difficulty) {
    showAlert();
  }
}


// When there is no match, cards will be unflipped
// after 1 second and board reset
// 
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetBoard();
  }, 1000);
}



function resetBoard() {
  [cardIsFlipped, boardLock] = [false, false];
  [firstCard, secondCard] = [null, null];
}


// When all cards are matched a window alert will pop-up
// with congratulations and information that all matches
// were found.
// The set Timeout will allow the last card to be flipped
// before the alert appears on screen

function showAlert() {
  let myText = "Congratulations!\nYou found all matches!";
  setTimeout(() => {
    alert(myText);
  }, 700);
}
 
// Cleans the game container and removes the cards before a
// new game with new cards is displayed
function cleanBoard() {
  gameContainer.innerHTML = ''
}


// When user click on new game butten the user has to confirm 
// that a new game should start 

// function getConfirmation() {
//   let startGame = confirm("Are you sure you want to start a new game?");
//   if (startGame == true) {
//     restart();
//   }
// }


// After confirmation to start new game 
// cards will be unflipped, board will be reset,
// moves and match counter will be reset to 0,
// cards will be shuffled,
// set Timeout delays the card flipping by 0.5 seconds
// so that the user doesn't see the shuffling and new positions

function restart() {
  resetBoard();
  cleanBoard();
  selectLevel();
  shuffleCards();
  generateCards();
  displayMoves();
  cards = [];
  moves = 0;
  matchCount = 0;
}