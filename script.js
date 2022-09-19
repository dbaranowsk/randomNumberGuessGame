let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (targetNumber > humanGuess && targetNumber > computerGuess) {
        if ((targetNumber - humanGuess) < (targetNumber - computerGuess)) {
            return true;
        } else {
            return false;
        }
    }
    if (targetNumber > humanGuess && targetNumber < computerGuess) {
        if ((targetNumber - humanGuess) < (computerGuess - targetNumber)) {
            return true;
        } else {
            return false;
        }
    }
    if (targetNumber < humanGuess && targetNumber > computerGuess) {
        if ((humanGuess - targetNumber) < (targetNumber - computerGuess)) {
            return true;
        } else {
            return false;
        }
    }
    if (targetNumber < humanGuess && targetNumber < computerGuess) {
        if ((humanGuess - targetNumber) < (computerGuess - targetNumber)) {
            return true;
        } else {
            return false;
        }
    }
};

function updateScore(winner) {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
};

function advanceRound() {
    currentRoundNumber ++;
};
