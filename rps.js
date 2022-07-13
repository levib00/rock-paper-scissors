//problem 1: create a function that will randomly throw rock, paper, or scissors. (maybe random number between 1-3 if 1 rock, 2 scissors, 3 paper?)

//problem 2: make the computer play against itself, one with a function called computerPlay, the other with playerSelection. compare r, p, s to
//determine a winner and console.log a string along the lines of "You win! paper beats rock!"

//problem 3: swap second computer for real player with a typing prompt. set case sensitivity to false.

//problem 4: create a function that plays 5 rounds, keeping score to determine a final winner. console.log you wins
let playerPoints = 0;
let computerPoints = 0;
function game() {
    for (let i = 1; i < 6; i++) {
        console.log('Round', i)

        function playerPlay() {

            let playerEntry = window.prompt('Type your selection! (rock, paper, or scissors');
            let playerSelection = playerEntry.toLowerCase();
        
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

        
    //could probably turn these into a function with ${x} style strings

        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
       

        function playRound(computerSelection, playerSelection) {

            if (computerSelection === playerSelection) {
                alert('It\'s a draw!');
            }
            else if (playerSelection == 1 && computerSelection == 2) {
                computerPoints++;
                alert('Computer wins! Paper beats rock!')
            }
            else if (playerSelection == 2 && computerSelection == 3) {
                computerPoints++;
                alert('Computer wins! Scissors beats paper!')
            }
            else if (playerSelection == 3 && computerSelection == 1) {
                computerPoints++;
                alert('Computer wins! Rock beats scissors!')
            } 
            else if (playerSelection == 3 && computerSelection == 2) {
                playerPoints++;
                alert('Player wins! Scissors beats paper!')
            }
            else if (playerSelection == 1 && computerSelection == 3) {
                playerPoints++;
                alert('Player wins! Rock beats scissors!')
            }
            else if (playerSelection == 2 && computerSelection == 1) {
                playerPoints++;
                alert('Player wins! Paper beats rock!')
            }
            else {
                console.log('idk')
            }

        }
            playRound(computerSelection, playerSelection)
            console.log('Player score: ' + playerPoints + ' CPU score: ' + computerPoints); 
    }
    if (playerPoints > computerPoints) {
        console.log('You win this match! Good Job!')
    }
    else if (playerPoints < computerPoints) {
        console.log('you lose this match! Maybe next Time!')
    }
    else (playerPoints === computerPoints) 
        console.log('It\'s a draw this time!')
    }

game()
