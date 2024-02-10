function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

const computerChoice = getComputerChoice();

// This gets AND formats the player's output
function formatPlayerChoice() {
    const lowerCaseInput = prompt("Type rock, paper, or scissors").toLowerCase();

    const formattedInput = lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);

    return formattedInput;
}

const playerChoice = formatPlayerChoice();

console.log('You chose: ' + playerChoice);
console.log('COM chose: ' + computerChoice);

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie!"
    }

    if (playerChoice === 'Rock' && computerChoice === 'Scissors' ||
    playerChoice === 'Paper' && computerChoice === 'Rock' ||
    playerChoice === 'Scissors' && computerChoice === 'Paper') {
        return "You're a winner!"
    }

    else {
        return "You lose..."
    }
}

const roundResult = playRound(playerChoice,computerChoice);

console.log(roundResult);