//problem 1: create a function that will randomly throw rock, paper, or scissors. (maybe random number between 1-3 if 1 rock, 2 scissors, 3 paper?)

//problem 2: make the computer play against itself, one with a function called computerPlay, the other with playerSelection. compare r, p, s to
//determine a winner and console.log a string along the lines of "You win! paper beats rock!"

//problem 3: swap second computer for real player with a typing prompt. set case sensitivity to false.

//problem 4: create a function that plays 5 rounds, keeping score to determine a final winner. console.log you wins
function computerPlay() {
    return Math.floor(Math.random()*3)+1;
}
const computerSelection = computerPlay();
if (computerSelection == 1) {
    console.log('Computer has played rock!')
}
 else if (computerSelection == 2) {
    console.log('Computer has played paper!')
 }
 else if (computerSelection == 3) {
    console.log('Computer has played scissors!')
 }

 function playerPlay() {
   // return computerPlay()
   let playerSelection = window.prompt('Type your selection! (rock, paper, or scissors');
   if (playerSelection == 'rock') {
    console.log('Player has played rock!')
    playerSelection = 1;
    console.log(playerSelection)
    return playerSelection
    }
    else if (playerSelection == 'paper') {
    console.log('Player has played paper!')
    playerSelection = 2;
    console.log(playerSelection)
    return playerSelection
    }
    else if (playerSelection == 'scissors') {
    console.log('Player has played scissors!')
    playerSelection = 3;
    console.log(playerSelection)
    return playerSelection
    }
 }
//could probably turn these into a function with ${x} style strings

let playerPoints = 0;
let computerPoints = 0;
playerSelection = playerPlay();
console.log(playerSelection)
determineWinner()

function determineWinner() {
   console.log()
    if (computerSelection === playerSelection) {
        console.log('It\'s a draw!');
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        computerPoints += 1;
        console.log('Computer wins! Paper beats Rock!')
    }
    else if (playerSelection == 2 && computerSelection == 3) {
        computerPoints += 1;
        console.log('Computer wins! Scissors beats paper!')
    }
    else if (playerSelection == 3 && computerSelection == 1) {
        computerPoints += 1;
        console.log('Computer wins! Rock beats scissors!')
    } 
    else if (playerSelection == 3 && computerSelection == 2) {
        playerPoints += 1;
        console.log('Player wins! Scissors beats paper!')
    }
    else if (playerSelection == 1 && computerSelection == 3) {
        playerPoints += 1;
        console.log('Player wins! Rock beats scissors!')
    }
    else if (playerSelection == 2 && computerSelection == 1) {
        playerPoints += 1;
        console.log('Player wins! Paper beats rock!')
    }
    else {
        console.log('idk-')
    }

}
console.log(computerSelection, playerPoints, computerPoints);