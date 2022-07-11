//problem 1: create a function that will randomly throw rock, paper, or scissors. (maybe random number between 1-3 if 1 rock, 2 scissors, 3 paper?)

//problem 2: make the computer play against itself, one with a function called computerPlay, the other with playerSelection. compare r, p, s to
//determine a winner and console.log a string along the lines of "You win! paper beats rock!"

//problem 3: swap second computer for real player with a typing prompt. set case sensitivity to false.

//problem 4: create a function that plays 5 rounds, keeping score to determine a final winner. console.log you wins
function computerPlay() {
    return Math.floor(Math.random()*3)+1;
}
var computerSelection = computerPlay();
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
    return computerPlay()
 }
 var playerSelection = playerPlay();
 if (playerSelection == 1) {
    console.log('Player has played rock!')
}
 else if (playerSelection == 2) {
    console.log('Player has played paper!')
 }
 else if (playerSelection == 3) {
    console.log('Player has played scissors!')
 }
//could probably turn these into a function with ${x} style strings
var playerPoints = 0
var computerPoints = 0

function determineWinner() {
    if (computerSelection === playerSelection) {
        console.log('It\'s a draw!');
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        computerPoints + 1;
    }
    else if (playerSelection == 2 && computerSelection == 3) {
        computerPoints + 1;
    }
}

console.log(computerSelection, playerSelection);