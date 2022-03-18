const computerChoiceDisplay = document.getElementById("computer-ch");
const userChoiceDisplay = document.getElementById("user-ch");
const resultDisplay = document.getElementById("result");
const pilihan = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
pilihan.forEach(tombol => tombol.addEventListener('click', (a) => {
  userChoice = a.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  generateResult();
}));

function generateComputerChoice() {
  let generateRandom = Math.floor(Math.random() * 3 + 1);
  if (generateRandom === 1) {
    computerChoice = "Gunting";
  }
  if (generateRandom === 2) {
    computerChoice = "Batu";
  }
  if (generateRandom === 3) {
    computerChoice = "Kertas";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
  if (computerChoice == userChoice) {
    result = "it's draw!"
  }
  if (computerChoice == "Gunting" && userChoice == "Kertas") {
    result = "You Lose!"
  }
  if (computerChoice == "Kertas" && userChoice == "Batu") {
    result = "You Lose!"
  }
  if (computerChoice == "Batu" && userChoice == "Gunting") {
    result = "You Lose!"
  }
  if (computerChoice == "Batu" && userChoice == "Kertas") {
    result = "You Win!"
  }
  if (computerChoice == "Kertas" && userChoice == "Gunting") {
    result = "You Win!"
  }
  if (computerChoice == "Gunting" && userChoice == "Batu") {
    result = "You Win!"
  }
  resultDisplay.innerHTML = result;
}
document.getElementById("lv").addEventListener("click", cl);
function cl() {
  document.getElementById("lv").innerHTML = "❤";
}