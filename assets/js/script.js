const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");

  if (!cardIsFlipped) {
    cardIsFlipped = true;
    firstCard = this;
  } else {
    cardIsFlipped = false;
    secondCard = this;
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
