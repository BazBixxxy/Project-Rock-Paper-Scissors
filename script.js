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

const plays = [];
const score = {
  wins: [],
  losses: [],
  ties: [],
};

let result;
function play(userMove) {
  // plays.push(1);
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

  if (result === "win") {
    score.wins++;
  } else if (result === "lose") {
    score.losses++;
  } else if (result === "tie") {
    score.ties++;
  }

  document.querySelector(
    ".play"
  ).innerHTML = `<p>You played ${userMove} || computer played ${computerChoice} || you ${result}</p>`;
}

document.querySelector(".rock").addEventListener("click", () => {
  getComputerChoice();
  play("rock");
});

document.querySelector(".paper").addEventListener("click", () => {
  getComputerChoice();
  play("paper");
});

document.querySelector(".scissors").addEventListener("click", () => {
  getComputerChoice();
  play("scissors");
});
