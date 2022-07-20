let playerPoints = 0;
let computerPoints = 0;
let lastPoint = false;

document.getElementById("play-again").style.visibility = 'hidden';

const againBtn = document.querySelector('#play-again');
againBtn.addEventListener('click', () => {
    i = 1;
    lastPoint = false
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById("match-results").innerHTML = '';
    document.getElementById("rounds").innerHTML = '';
    document.getElementById("player-choice").innerHTML = '';
    document.getElementById("cpu-choice").innerHTML =  '';
    document.getElementById("round-results").innerHTML = '';
    document.getElementById("score").innerHTML = `Player score: ${playerPoints} CPU score: ${computerPoints}`
    document.getElementById("play-again").style.visibility = 'hidden';
    
})

const button = document.querySelectorAll('.button');
button.forEach((button) => {
button.addEventListener('click', () => {
    if (!lastPoint) {
        let playerEntry = button.id.toLowerCase()
        playRound(playerEntry);
        roundCounter();
        winner()
    }
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

function endScreen() {
    document.getElementById("play-again").style.visibility = 'visible';
    document.getElementById("play-again").style.alignSelf = 'center';
    document.getElementById("rounds").innerHTML = `Game Over!`
    document.getElementById("score").innerHTML = `Player score: ${playerPoints} CPU score: ${computerPoints}`
}

function winner() {
    if (playerPoints == 3 || computerPoints == 3) {
        if (playerPoints > computerPoints) {
            document.getElementById("match-results").innerHTML = 'You win this match! Good Job!'
            lastPoint = true;
            endScreen()
        }
        else if (playerPoints < computerPoints) {
            document.getElementById("match-results").innerHTML = 'you lose this match! Maybe next Time!'
            lastPoint = true
            endScreen()
        }
        else if (playerPoints === computerPoints)
            document.getElementById("match-results").innerHTML = 'It\'s a draw this time!'
            lastPoint = true;
            endScreen()
    }
}