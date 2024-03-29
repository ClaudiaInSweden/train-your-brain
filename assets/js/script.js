const gameContainer = document.querySelector('.game-container');
cards = [];
selectedCards = [];
let firstCard, secondCard;
let boardLock = false;
let matchCount = 0;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
   .then((res) => res.json())
   .then((data) => {
     cards = [...data];
   });



// $(function(){
//   $( "#level" ).change(function() {
//     var numberOfCards = $(this).val();
//     selectCards(numberOfCards);
//     });
// });


var numberOfCards = document.querySelector("#level").val;


function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}
function selectCards(numberOfCards) {
 
	if (numberOfCards) {
    for (var i = 0; i < numberOfCards; i++) {
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
}
// function generateCards() {
//   for (let card of selectedCards) {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
//     cardElement.setAttribute("data-name", card.name);
//     cardElement.innerHTML = `
//       <div class="front">
//         <img class="front-image" src=${card.image} />
//       </div>
//       <div class="back"></div>
//     `;
//     gameContainer.appendChild(cardElement);
//     cardElement.addEventListener("click", flipCard);
//   }
// }

// Get number of cards for game board from user difficulty level selection
// function selectCards() {
//   const level = document.getElementById('level').value; 
//   var moves = 0, difficulty

//   if(level == 'easy') difficulty = 3;
//   else if(level == 'medium') difficulty = 6;
//   else if(level == 'hard') difficulty = 8;
//   else if(level == 'expert') difficulty = 12;

// var cards2 = cards.slice();
  
//   for(var i = (difficulty*4)/2;i>0;--i) {
//     var randomCard = cards2.splice(Math.floor(Math.random()*cards2.length), 1);

//     selectedCards.push(randomCard);
//     selectedCards.push(randomCard);
//   }
// }

// Shuffle cards according to Fisher-Yates algorithm


// Generate game board



// Checks first if the game board is locked. 
// If not, the card which has been clicked is the first card
//  and is flipped
function flipCard() {
  if (boardLock) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

//Each flip increments moves counter and returns number to DOM */
score++;
document.getElementById("score").innerHTML = score;

  if (!firstCard) {
      firstCard = this;

      return;
  }
// If the second card was flipped the match check starts */
  secondCard = this;
  boardLock = true;
  checkForMatch();
}


// Checks if card 1 and card 2 match
// If match, cards Event Listener for click is removed
// and the cards will no longer be flipped
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    disableCards();
  }  else { unflipCards();}
}


function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();

// Each match increments match counter
// If match count reaches 6 pairs, the game is over
// and a window alert will pop up

  matchCount++;
  if (matchCount == 6) {
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


// When user click on new game butten the user has to confirm 
// that a new game should start 

function getConfirmation() {
  let startGame = confirm("Are you sure you want to start a new game?");
  if (startGame == true) {
      restart();
  }
}


// After confirmation to start new game 
// cards will be unflipped, board will be reset,
// moves and match counter will be reset to 0,
// cards will be shuffled,
// set Timeout delays the card flipping by 0.5 seconds
// so that the user doesn't see the shuffling and new positions

function restart() {
  cards.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });
  setTimeout(() => {
    resetBoard();
    shuffleCards();
    
    selectCards();
    score = 0;
    document.getElementById("nr-of-moves").innerHTML = moves;
    matchCount = 0;
  }, 500);
  cards.forEach((card) => card.addEventListener("click", flipCard))};
