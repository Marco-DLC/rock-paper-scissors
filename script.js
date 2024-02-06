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

function formatPlayerChoice() {
    const lowerCaseInput = prompt("Type rock, paper, or scissors").toLowerCase();

    const formattedInput = lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);

    return formattedInput;
}

const playerChoice = formatPlayerChoice();

console.log(playerChoice, computerChoice);