let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
let secretTargetNumber = generateTarget();

function getAbsoluteDistance(x, y) {
    return Math.abs(x - y);
}

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {

    if (userGuess < 0 || userGuess > 9) {
        alert('Your number is out of range.');
    }

  const differenceOfUser = getAbsoluteDistance(secretTargetNumber, userGuess)
  const differenceOfComputer = getAbsoluteDistance(secretTargetNumber, computerGuess)

  if (userGuess == secretTargetNumber) {
    return true;
  } else if (computerGuess == secretTargetNumber) {
    return false;
  } else {
    if (differenceOfUser < differenceOfComputer) {
        return true;
    } else if (differenceOfComputer < differenceOfUser) {
        return false;
    }
  }
} 

const winnerIs = () => {
  if (compareGuesses == true) {
    return 'human';
  } else if (compareGuesses == false) {
    return 'computer';
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner == 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}