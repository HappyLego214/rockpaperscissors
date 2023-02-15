let playerWon = 0;
let computerWon = 0;
let tie = 0;

const buttons = document.querySelectorAll('.choice-btn');
const scoreboard = document.querySelector('.scoreboard');
const computerChoice = document.querySelector('.cmp-choice');
const resetGame = document.querySelector('.btn-reset');
const gameResults = document.querySelector('.game-result');


// provides computer game decision
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100) - 1; 

    if (computerChoice < 33) { 
        computerChoice = "rock";
    } else if (computerChoice > 33 && computerChoice < 66) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

let playerSelection = '';
let computerSelection = computerChoice;

// provides player the option to choose fighter
function getPlayerChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', e => {
            let computerSelection = getComputerChoice();
            if (button.id == "rock") {
                playerSelection = "rock";
            } else if (button.id == "paper") {
                playerSelection = "paper";
            } else if (button.id == "scissors") {
                playerSelection = "scissors";
            }

            playRound(playerSelection, computerSelection);;
            return playerSelection;

        })
    })

    

}

// loops the program 5 times
// for (let i = 0; i < 5; i++)  {

//     
// }

//provides the winning result between computer selection and player selection

// const container = document.querySelector('.container');

function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection ) {
            tie++
            gameResults.textContent = "It's a Tie!"
        } else if (playerSelection == "rock" ) {
            
            if (computerSelection == "paper") {
            computerWon++;
            gameResults.textContent = "Computer Won!"
                } else {
                playerWon++;
                gameResults.textContent = "Player Won!"
                }

        } else if (playerSelection == "scissors") {
            
            if (computerSelection == "rock") {
            computerWon++;
            gameResults.textContent = "Computer Won!"
                } else {
                playerWon++;    
                gameResults.textContent = "Player Won!"
                }

        } else if (playerSelection == "paper") {
            
            if (computerSelection == "scissors") {
            computerWon++;    
            gameResults.textContent = "Computer Won!"
                } else {
                playerWon++;
                gameResults.textContent = "Player Won!"
                } 

        } else {
            console.log("Input Error!");
        }

    gameResult()

}

// function gameResult() {
//     if ((tie > computerWon) && (tie > playerWon)) {
//         console.log("Nobody Won or Lost!");
//     } else if (playerWon > computerWon) {
//         console.log("You Won!")
//     } else {
//         console.log("You Lost!")
//     }
// }

// gameResult()

function gameResult() {
    document.getElementById("playerScore").textContent = playerWon;
    document.getElementById("computerScore").textContent = computerWon;
    document.getElementById("gameTie").textContent = tie;
    document.getElementById("computerPick").textContent = computerSelection;
    document.getElementById("playerPick").textContent = playerSelection;
}

getPlayerChoice();


