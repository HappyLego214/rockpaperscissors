let playerWon = 0;
let computerWon = 0;
let tie = 0;

let startedGame = false;

const buttons = document.querySelectorAll('.choice-btn');
const scoreboard = document.querySelector('.scoreboard');
const startGame = document.querySelector('.btn-start');
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

// provides player the option to choose fighter
function getPlayerChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {            
                let computerSelection = getComputerChoice();

                if (button.id == "rock") {
                    playerSelection = "rock";
                } else if (button.id == "paper") {
                    playerSelection = "paper";
                } else if (button.id == "scissors") {
                    playerSelection = "scissors";
                }

                document.getElementById("computerPick").textContent = computerSelection;
                document.getElementById("playerPick").textContent = playerSelection;

                playRound(playerSelection, computerSelection);
                gameResult();

        });
    });

}

startGame.addEventListener('click', () => {

    startRound();
    startedGame = true;

});

function startRound() {

    if(!startedGame) getPlayerChoice();

    }

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

        }

    scoreboardUpdate();

}

function gameResult() {

    if (playerWon == 5 || computerWon == 5) {
        if (playerWon > computerWon) {
            document.getElementById("totalWinner").textContent = "You Won The Game!";
                playerWon = 0;
                tie = 0;
                computerWon = 0;
        } else if (computerWon > playerWon) {
            document.getElementById("totalWinner").textContent = "You Lost The Game!";
                playerWon = 0;
                tie = 0;
                computerWon = 0;
        }
    } else if (playerWon < 5 && computerWon < 5) {
        document.getElementById("totalWinner").textContent = "";
    }
}

function scoreboardUpdate() {
    document.getElementById("playerScore").textContent = playerWon;
    document.getElementById("computerScore").textContent = computerWon;
    document.getElementById("gameTie").textContent = tie;
}

