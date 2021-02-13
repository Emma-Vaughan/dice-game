var randomNumber1 = Math.round(Math.random() * 5 + 1);

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.round(Math.random() * 5 + 1);

document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var h1 = document.querySelector("h1");

function displayText() {
  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Wins!";
  } else {
    h1.innerHTML = "It's a draw!";
  }
}

displayText();
