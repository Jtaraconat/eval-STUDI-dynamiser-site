/* add active class
active class for css 
active class true and hold update current player score
*/

const newGame = document.getElementById("newGame");
const rollDice = document.getElementById("rollDice");
const holdScore = document.getElementById("holdScore");
const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
const p1CurrentScore = document.getElementById("p1CurrentScore");
const p2CurrentScore = document.getElementById("p2CurrentScore");
const dice = document.getElementById("dice");

let diceValue = 0;

const clearFields = function () {
  p1CurrentScore.innerText = "0";
  p2CurrentScore.innerText = "0";
  p1Score.innerText = "0";
  p2Score.innerText = "0";
};

const startNewGame = newGame.addEventListener("click", function () {
  clearFields();
});

const rollingDice = rollDice.addEventListener("click", function () {
  diceValue = Math.floor(Math.random() * 6 + 1);
  dice.innerHTML = diceValue;
  return diceValue;
});

const holdingScore = holdScore.addEventListener("click", function () {
  p1CurrentScore.innerHTML = diceValue;
});
