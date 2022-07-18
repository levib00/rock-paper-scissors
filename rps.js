let playerPoints = 0;
let computerPoints = 0;

const button = document.querySelectorAll('button');
button.forEach((button) => {
button.addEventListener('click', () => {
    let playerEntry = button.id.toLowerCase()
    roundCounter();
    playRound(playerEntry);
    winner()
});
});
    
function playRound(playerEntry) {
    
    let playerSelection = playerEntry.toLowerCase();
    let computerSelection = computerPlay();
    playerSelection = playerPlay(playerSelection);
    playerPlay(playerSelection);
    roundWinner(computerSelection, playerSelection)

    console.log('Player score: ' + playerPoints + ' CPU score: ' + computerPoints); 
}
function playerPlay(playerSelection) {
    if (playerSelection == 'rock') {
        console.log('Player has played rock!')
        playerSelection = 1;
        return playerSelection
    }
    else if (playerSelection == 'paper') {
        console.log('Player has played paper!')
        playerSelection = 2;
        return playerSelection
    }
    else if (playerSelection == 'scissors') {
        console.log('Player has played scissors!')
        playerSelection = 3;
        return playerSelection
    }
}

function computerPlay() {
    let computerPicker = Math.floor(Math.random()*3)+1;

    if (computerPicker == 1) {
            console.log('Computer has played rock!')
            return computerPicker
    }
        else if (computerPicker == 2) {
            console.log('Computer has played paper!')
            return computerPicker
    }
        else if (computerPicker == 3) {
            console.log('Computer has played scissors!')
            return computerPicker
    }
}

function roundWinner(computerSelection, playerSelection1) {
    if (computerSelection === playerSelection1) {
        alert('It\'s a draw!');
    }
    else if (playerSelection1 == 1 && computerSelection == 2) {
        computerPoints++;
        alert('Computer wins! Paper beats rock!')
    }
    else if (playerSelection1 == 2 && computerSelection == 3) {
        computerPoints++;
        alert('Computer wins! Scissors beats paper!')
    }
    else if (playerSelection1 == 3 && computerSelection == 1) {
        computerPoints++;
        alert('Computer wins! Rock beats scissors!')
    } 
    else if (playerSelection1 == 3 && computerSelection == 2) {
        playerPoints++;
        alert('Player wins! Scissors beats paper!')
    }
    else if (playerSelection1 == 1 && computerSelection == 3) {
        playerPoints++;
        alert('Player wins! Rock beats scissors!')
    }
    else if (playerSelection1 == 2 && computerSelection == 1) {
        playerPoints++;
        alert('Player wins! Paper beats rock!')
    }
    else {
        console.log('idk')
    }

}

let i = 1
function roundCounter(playerPoints, computerPoints) {
    console.log (`Round ${i}!`)
    i++
}
    
function winner() {
    if (playerPoints == 3 || computerPoints == 3) {
        if (playerPoints > computerPoints) {
            console.log('You win this match! Good Job!')
        }
        else if (playerPoints < computerPoints) {
            console.log('you lose this match! Maybe next Time!')
        }
        else if (playerPoints === computerPoints)
            console.log('It\'s a draw this time!')
    }
}

