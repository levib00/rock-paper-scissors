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
}
document.getElementById("score").innerHTML = `Player score: ${playerPoints} CPU score: ${computerPoints}`
function playerPlay(playerSelection) {
    if (playerSelection == 'rock') {
        document.getElementById("player-choice").innerHTML = 'Player has played rock!'
        playerSelection = 1;
        return playerSelection
    }
    else if (playerSelection == 'paper') {
        document.getElementById("player-choice").innerHTML = 'Player has played paper!'
        playerSelection = 2;
        return playerSelection
    }
    else if (playerSelection == 'scissors') {
        document.getElementById("player-choice").innerHTML = 'Player has played scissors!'
        playerSelection = 3;
        return playerSelection
    }
}

function computerPlay() {
    let computerPicker = Math.floor(Math.random()*3)+1;

    if (computerPicker == 1) {
        document.getElementById("cpu-choice").innerHTML = 'Computer has played rock!'
            return computerPicker
    }
        else if (computerPicker == 2) {
            document.getElementById("cpu-choice").innerHTML = 'Computer has played paper!'
            return computerPicker
    }
        else if (computerPicker == 3) {
            document.getElementById("cpu-choice").innerHTML = 'Computer has played scissors!'
            return computerPicker
    }
}

function roundWinner(computerSelection, playerSelection1) {
    if (computerSelection === playerSelection1) {
        document.getElementById("round-results").innerHTML ='It\'s a draw!';
    }
    else if (playerSelection1 == 1 && computerSelection == 2) {
        computerPoints++;
        document.getElementById("round-results").innerHTML = 'Computer wins! Paper beats rock!';
    }
    else if (playerSelection1 == 2 && computerSelection == 3) {
        computerPoints++;
        document.getElementById("round-results").innerHTML = 'Computer wins! Scissors beats paper!'
    }
    else if (playerSelection1 == 3 && computerSelection == 1) {
        computerPoints++;
        document.getElementById("round-results").innerHTML = 'Computer wins! Rock beats scissors!'
    } 
    else if (playerSelection1 == 3 && computerSelection == 2) {
        playerPoints++;
        document.getElementById("round-results").innerHTML = 'Player wins! Scissors beats paper!'
    }
    else if (playerSelection1 == 1 && computerSelection == 3) {
        playerPoints++;
        document.getElementById("round-results").innerHTML = 'Player wins! Rock beats scissors!'
    }
    else if (playerSelection1 == 2 && computerSelection == 1) {
        playerPoints++;
        document.getElementById("round-results").innerHTML = 'Player wins! Paper beats rock!'
    }
    else {
        console.log('idk')
    }

}

let i = 1
function roundCounter() {
    document.getElementById("score").innerHTML = `Player score: ${playerPoints} CPU score: ${computerPoints}`
    document.getElementById("rounds").innerHTML = `Round ${i}!`
    i++
}
document.getElementById("rounds").innerHTML = `Round ${i}!`

function winner() {
    if (playerPoints == 3 || computerPoints == 3) {
        if (playerPoints > computerPoints) {
            document.getElementById("match-results").innerHTML = 'You win this match! Good Job!'
        }
        else if (playerPoints < computerPoints) {
            document.getElementById("match-results").innerHTML = 'you lose this match! Maybe next Time!'
        }
        else if (playerPoints === computerPoints)
        document.getElementById("match-results").innerHTML = 'It\'s a draw this time!'
    }
}