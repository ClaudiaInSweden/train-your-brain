/** 
 * Wait for the DOM to finish loading before running the game
*/
document.addEventListener('DOMContentLoaded', function() {
});

// Global variables
const gameContainer = document.querySelector('.game-container');
document.getElementById('start-game').addEventListener('click', restart);
allCards = [
  {
      "image": "assets/images/bear.webp",
      "name": "bear"
  },
  {
      "image": "assets/images/cat.webp",
      "name": "cat"
  },
  {
      "image": "assets/images/kitty.webp",
      "name": "kitty"
  },
  {
      "image": "assets/images/chicken.webp",
      "name": "chicken"
  },
  {
      "image": "assets/images/hen.webp",
      "name": "hen"
  },
  {
      "image": "assets/images/cow.webp",
      "name": "cow"
  },
  {
      "image": "assets/images/deer.webp",
      "name": "deer"
  },
  {
      "image": "assets/images/dog.webp",
      "name": "dog"
  },
  {
      "image": "assets/images/donkey.webp",
      "name": "donkey"
  },
  {
      "image": "assets/images/duck.webp",
      "name": "duck"
  },
  {
      "image": "assets/images/elephant.webp",
      "name": "elephant"
  },
  {
      "image": "assets/images/emu.webp",
      "name": "emu"
  },
  {
      "image": "assets/images/fox.webp",
      "name": "fox"
  },
  {
      "image": "assets/images/giraffe.webp",
      "name": "giraffe"
  },
  {
      "image": "assets/images/goat.webp",
      "name": "goat"
  },
  {
      "image": "assets/images/horse.webp",
      "name": "horse"
  },
  {
      "image": "assets/images/lion.webp",
      "name": "lion"
  },
  {
      "image": "assets/images/owl.webp",
      "name": "owl"
  },
  {
      "image": "assets/images/panda.webp",
      "name": "panda"
  },
  {
      "image": "assets/images/pig.webp",
      "name": "pig"
  },
  {
      "image": "assets/images/rabbit.webp",
      "name": "rabbit"
  },
  {
      "image": "assets/images/bunny.webp",
      "name": "bunny"
  },
  {
      "image": "assets/images/sheep.webp",
      "name": "sheep"
  },
  {
      "image": "assets/images/tiger.webp",
      "name": "tiger"
  },
  {
      "image": "assets/images/wolve.webp",
      "name": "wolve"
  }
];
cards = [
  {
    "image": "assets/images/bear.webp",
    "name": "bear"
},
{
    "image": "assets/images/cat.webp",
    "name": "cat"
},
{
    "image": "assets/images/kitty.webp",
    "name": "kitty"
},
{
    "image": "assets/images/chicken.webp",
    "name": "chicken"
},
{
    "image": "assets/images/hen.webp",
    "name": "hen"
},
{
    "image": "assets/images/cow.webp",
    "name": "cow"
},
];
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let moves = 0;
let level;
let difficulty;
let numberOfCards;


// Pre-populate game board with 12 cards/6 pairs
selectLevel();
shuffleCards();
generateCards();


// Use Fisher-Yates algorithm to shuffle all cards
function shuffleAllCards() {
  for (let i = 0; i < allCards.length; i++) {
    let j = Math.floor(Math.random() * cards.length);
    let temp = allCards[i];
    allCards[i] = allCards[j];
    allCards[j] = temp;
  }
}

// Get difficulty level from user selection
// Difficulty level defines number of cards
function selectLevel() {
  let level = document.getElementById('level').value; 

  if(level == 'easy') difficulty = 6;
  else if(level == 'medium') difficulty = 12;
  else if(level == 'hard') difficulty = 18;
  else if(level == 'expert') difficulty = 24;

  // Take only number of cards according to difficulty level from all cards
  let numberOfCards = allCards.slice(0, difficulty);
  // Use spread syntax to duplicate cards, e.g. get a pair of each card
  cards = [...numberOfCards, ...numberOfCards]
  
  shuffleCards();
}

// Use Fisher-Yates algorithm to shuffle selected cards
function shuffleCards() {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
}

// Create the game board with 4 resp 6 columns depending on screen size
// and auto-generated number of rows depending on number of cards
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
// and is flipped to see the image
function flipCard() {
  if (boardLock) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;

    return;
  }
  secondCard = this;
  boardLock = true;

  checkForMatch();
}


// Checks if card 1 and card 2 match
// If match, the Event Listener for click is removed
// and the cards will no longer be flipped and
// moves count increases with one
// If no match, cards will be unflipped
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  moves++;
  displayMoves();
  if (isMatch) {
    disableCards();
  } else { unflipCards(); }
}


// Number of moves are updated on the page
function displayMoves() {
  document.getElementById("nr-of-moves").innerHTML = moves
}


// Matched cards will no longer be clickable
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();

  // Each match increments match counter
  // If match count reaches the number of pairs,
  // specified in the difficulty level, the game is over
  // and a window alert will pop up

  matchCount++;
  if (matchCount == difficulty) {
    showAlert();
  }
}


// When there is no match, cards will be unflipped
// after 1 second and the board reset
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetBoard();
  }, 1000);
}


// The game board will be unlocked and both cards will
// be reset 
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
  let myText = "Congratulations!\nYou found all matches!\n\nSelect difficulty level and click on START for a new game!";
  setTimeout(() => {
    alert(myText);
  }, 700);
}
 

// Cleans the game board and removes all matched cards 
function cleanBoard() {
  gameContainer.innerHTML = ''
}


// When user clicks on start butten the user has to confirm
// that a new game should start to avoid faulty restarts
// When the user confirms, a new game starts
function getConfirmation() {
  let startGame = confirm("Are you sure you want to start a new game?");
  if (startGame == true) {
    restart();
  }
}


// Click on Start, starts a new game,
// all cards will be shuffled, number of cards according to selected level
// will be picked from the allCards array, copied to get pairs.
// Selected cards are shuffled again, moves and match counter will be reset to 0
function restart() {
  resetBoard();
  cleanBoard();
  shuffleAllCards();
  selectLevel();
  shuffleCards();
  generateCards();
  displayMoves();
  cards = [];
  moves = 0;
  matchCount = 0;
}
