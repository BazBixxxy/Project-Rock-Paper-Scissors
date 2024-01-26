let computerChoice;
function getComputerChoice() {
  const randomMove = Math.random();
  if (randomMove >= 0 && randomMove < 1 / 3) {
    computerChoice = "rock";
  } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let userMove = prompt("rock, paper, scissors", "rock").toLocaleLowerCase();
let result;

function play(userMove) {
  // the result after we have the user move.
  if (userMove === "rock") {
    if (computerChoice === "rock") {
      result = "tie";
    } else if (computerChoice === "paper") {
      result = "lose";
    } else {
      result = "win";
    }
  } else if (userMove === "paper") {
    if (computerChoice === "rock") {
      result = "win";
    } else if (computerChoice === "paper") {
      result = "tie";
    } else {
      result = "lose";
    }
  } else if (userMove === "scissors") {
    if (computerChoice === "rock") {
      result = "lose";
    } else if (computerChoice === "paper") {
      result = "win";
    } else {
      result = "tie";
    }
  }
  return `You played ${userMove} || computer played ${computerChoice} || you ${result}`;
}

getComputerChoice();
console.log(play(userMove));
