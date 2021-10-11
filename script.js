"use strict";

// Add event listeners
// save player choice
// Add computer choice
// Compare choices
// Print values
// Restart button

const rock = document.querySelector(".player-rock");
const paper = document.querySelector(".player-paper");
const scissors = document.querySelector(".player-scissors");
const restart = document.querySelector(".restart-btn");
let winnerOutput = document.querySelector(".winner-output");
let userScoreTracker = document.querySelector(".computer-score-text");
let computerScoreTracker = document.querySelector(".user-score-text");

let computerChoices = ["rock", "paper", "scissors"];
let randInt = Math.trunc(Math.random() * 3);
let userChoice = "";
let computer = computerChoices[randInt];
let userScore = 0;
let computerScore = 0;
console.log(computer);

restart.addEventListener("click", function () {
  randInt = Math.trunc(Math.random() * 3);
  userChoice = "";
  userScore = 0;
  computerScore = 0;
  userScoreTracker.innerHTML = `Your score :${userScore}`;
  computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
});

rock.addEventListener("click", function () {
  userChoice = "rock";
  checkGame();
  randInt = Math.trunc(Math.random() * 3);
  computer = computerChoices[randInt];
});

paper.addEventListener("click", function () {
  userChoice = "paper";
  checkGame();
  randInt = Math.trunc(Math.random() * 3);
  computer = computerChoices[randInt];
});

scissors.addEventListener("click", function () {
  userChoice = "scissors";
  checkGame();
  randInt = Math.trunc(Math.random() * 3);
  computer = computerChoices[randInt];
});

const checkGame = function () {
  if (userChoice === computer) {
    winnerOutput.innerHTML = `User chose ${userChoice}, computer chose ${computer} and it's a tie`;
    userScoreTracker.innerHTML = `Your score :${userScore}`;
    computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
  } else if (userChoice === "rock" && computer === "scissors") {
    userScore++;
    winnerOutput.innerHTML = `You chose ${userChoice}, computer chose ${computer} you win!`;
    userScoreTracker.innerHTML = `Your score :${userScore}`;
    computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
  } else if (userChoice === "scissors" && computer === "paper") {
    userScore++;
    winnerOutput.innerHTML = `You chose ${userChoice}, computer chose ${computer} you win!`;
    userScoreTracker.innerHTML = `Your score :${userScore}`;
    computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
  } else if (userChoice === "paper" && computer === "rock") {
    userScore++;
    winnerOutput.innerHTML = `You chose ${userChoice}, computer chose ${computer} you win!`;
    userScoreTracker.innerHTML = `Your score :${userScore}`;
    computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
  } else {
    computerScore++;
    winnerOutput.innerHTML = `User chose ${userChoice}, computer chose ${computer} computer won!`;
    userScoreTracker.innerHTML = `Your score :${userScore}`;
    computerScoreTracker.innerHTML = `Computer score :${computerScore}`;
  }
};
