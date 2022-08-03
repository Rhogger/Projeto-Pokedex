const arrowGo = document.getElementById("go");
const arrowBack = document.getElementById("back");
const cards = document.querySelectorAll(".card");
let actualCard = 0;


arrowGo.addEventListener("click", function () {
  hiddenCard();
  actualCard++;

  if (actualCard > 2) {
    actualCard = 0;
  }


  showCard();
});

arrowBack.addEventListener("click", function () {
  hiddenCard();
  actualCard--;

  if (actualCard < 0) {
    actualCard = 2;
  }

  showCard();
});

function hiddenCard() {
  const cardsSelected = document.querySelector(".selected");
  cardsSelected.classList.remove("selected");
}

function showCard() {
  cards[actualCard].classList.add("selected");
}