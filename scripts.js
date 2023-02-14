let playerWon = 0;
let computerWon = 0;
let tie = 0;
let regex = {
    rock:/^rock$/i,
    paper:/^paper$/i, 
    scissors:/^scissors$/i
}

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
    let playerChoice = prompt("Choose Your Fighter: Rock | Paper | Scissors");
    if (regex.rock.test(playerChoice)) {
        playerChoice = "rock";
    } else if (regex.paper.test(playerChoice)) {
        playerChoice = "paper";
    } else if (regex.scissors.test(playerChoice)) {
        playerChoice = "scissors";
    } else {
        playerChoice = "error";
    }

    return playerChoice;    
}


// loops the program 5 times
// for (let i = 0; i < 5; i++)  {

//     let playerSelection = getPlayerChoice();
//     let computerSelection = getComputerChoice();

//     playRound(playerSelection, computerSelection);
// }

//provides the winning result between computer selection and player selection
function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection ) {
            console.log("It is a Tie!");
            tie++
        } else if (playerSelection == "rock" ) {
            
            if (computerSelection == "paper") {
            computerWon++;
            console.log("Computer Won!");
                } else {
                playerWon++;
                console.log("Player Won!");
                }

        } else if (playerSelection == "scissors") {
            
            if (computerSelection == "rock") {
            computerWon++;
            console.log("Computer Won!");
                } else {
                playerWon++;    
                console.log("Player Won!");
                }

        } else if (playerSelection == "paper") {
            
            if (computerSelection == "scissors") {
            computerWon++;    
            console.log("Computer Won!");
                } else {
                playerWon++;
                console.log("Player Won!");
                } 

        } else {
            console.log("Input Error!");
        }
}


// provide the overall result from the five games
function gameResult() {
    if ((tie > computerWon) && (tie > playerWon)) {
        console.log("Nobody Won or Lost!");
    } else if (playerWon > computerWon) {
        console.log("You Won!")
    } else {
        console.log("You Lost!")
    }
}

gameResult()


// keeps track of the number of results for each 5 rounds
console.log(playerWon);
console.log(computerWon);
console.log(tie);

