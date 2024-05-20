// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start").addEventListener("click", getConfirmation);
});

// Inspiration from JavaScriptAcademy tutorial on Youtube
// https://youtu.be/xWdkt6KSirw?si=n_b2NeffyAzpyxQp

// Card arrays
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
}
];

// Global variables
const gameContainer = document.querySelector(".game-container");
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let moves = 0;
let difficulty;

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
// Inspiration from Memory Master game from CI student Natasha_5P
// https://natashary.github.io/memory-game/
function selectLevel() {
  let level = document.getElementById("level").value;

  if(level == "easy") difficulty = 6;
  else if(level == "medium") difficulty = 12;
  else if(level == "hard") difficulty = 18;
  else if(level == "expert") difficulty = 25;

  // Take only number of cards according to difficulty level from all cards
  let numberOfCards = allCards.slice(0, difficulty);
  // Use spread syntax to duplicate cards, e.g. get a pair of each card
  cards = [...numberOfCards, ...numberOfCards];

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

// Media queries for difficulty level Expert
// Depending on current media size and if difficulty level is Expert
// the game board will be populated with 5 resp 10 columns
// so the user can see all cards on the screen without scrolling
// Inspiration from JavaScript Kit:
// http://www.javascriptkit.com/javatutors/matchmediamultiple.shtml

let mqls = [
  window.matchMedia("(max-width: 510px)"),
  window.matchMedia("(min-width: 511px) and (max-width: 767px)"),
  window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
  window.matchMedia("(min-width: 992px)")
];
function gridSize(mql) {
  if (mqls[0].matches && difficulty === 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(5, 57px)";
  } else if (mqls[0].matches && difficulty != 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(4, 57px)";
  }
  if (mqls[1].matches && difficulty === 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(5, 65px)";
  } else if (mqls[1].matches && difficulty != 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(4, 65px)";
  }
  if (mqls[2].matches && difficulty === 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(5, 70px)";
  } else if (mqls[2].matches && difficulty != 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(6, 70px)";
  }
  if (mqls[3].matches && difficulty === 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(10, 75px)";
  } else if (mqls[3].matches && difficulty != 25) {
    document.querySelector(".game-container").style.gridTemplateColumns = "repeat(6, 75px)";
  }
}
// If screen size changes, the grid will be updated accordingly
for (let i=0; i < mqls.length; i++) {
  gridSize(mqls[i]);
  mqls[i].addEventListener("change", gridSize);
}

// Create the game board with nr of columns depending on screen size
// and auto-generate number of rows depending on number of cards
// Add alt-attribute to images for improved accessibility
function generateCards() {
  for (let card of cards) {

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.setAttribute("alt", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} alt=${card.name}>
      </div>
      <div class="back"></div>
    `;
    gameContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

// Checks first if the game board is locked.
// If not, the card which has been clicked is the first card
// and is flipped to see the image. When clicking on a
// second card the board is locked to prevent further clicks
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
// and the cards will no longer be flipped,
// moves counter increases with one
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
  document.getElementById("nr-of-moves").innerHTML = moves;
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
// after 1 second 
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
  boardLock = false;
  [firstCard, secondCard] = [null, null];
}

// When all cards are matched, a dialog box will pop-up
// with congratulations and information that all pairs
// were found.
// The set Timeout will allow the last card to be flipped
// before the alert appears on screen
function showAlert() {
  setTimeout(() => {
    const dialog = document.querySelector("#youwon");
    const closeBtn = document.querySelector("#close");
    dialog.showModal();
    
    closeBtn.addEventListener("click", () => {
    dialog.close();
    });
  }, 700);
}

// Cleans the game board and removes all matched cards
function cleanBoard() {
  gameContainer.innerHTML = "";
}

// When user clicks on start butten the user has to confirm
// that a new game should start to avoid faulty restarts
// When the user confirms, a new game starts
function getConfirmation() {
const dialog = document.querySelector("#newgame");
const cancelBtn = document.querySelector("#cancel");
const confirmBtn = document.querySelector("#confirm");
dialog.showModal();

cancelBtn.addEventListener("click", () => {
dialog.close();
});
confirmBtn.addEventListener("click", () => {
dialog.close();
restart();
});
}

// Click on New Game-button in the confirmation window, starts a new game.
// All cards will be shuffled, number of cards according to selected level
// will be picked from the allCards array and duplicated to get pairs.
// Selected cards are shuffled again, moves and match counter are reset to 0
function restart() {
  resetBoard();
  cleanBoard();
  shuffleAllCards();
  selectLevel();
  shuffleCards();
  gridSize();
  generateCards();
  displayMoves();
  cards = [];
  moves = 0;
  matchCount = 0;
}
