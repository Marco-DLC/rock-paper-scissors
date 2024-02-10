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

// This gets AND formats the player's output
function formatPlayerChoice() {
    const lowerCaseInput = prompt("Type rock, paper, or scissors").toLowerCase();

    const formattedInput = lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);

    return formattedInput;
}

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

function playGame(){
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = formatPlayerChoice();
        
        console.log('Round ' + (i + 1) + ':');
        console.log('You chose: ' + playerChoice);
        console.log('COM chose: ' + computerChoice);

        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        if (roundResult === 'You\'re a winner!') {
            playerWins++;
        } else if (roundResult === 'You lose...') {
            computerWins++;
        }
        console.log('~~~~~~~~~~~~~');
    }

    console.log('Final Results:');
    console.log('Player: ' + playerWins);
    console.log('Computer: ' + computerWins);
    console.log('~~~~~~~~~~~~~')

    if (playerWins > computerWins) {
        console.log('Wow! You\'re number one! Wahoo!');
    } else if (playerWins < computerWins) {
        console.log('LOL, you suck! Better luck next time.');
    } else {
        console.log('Umm you...tied somehow? You know how rare that is, right?');
    }

    console.log('~~~~~~~~~~~~~')
    console.log('Reload the page to go again!')
}

playGame();