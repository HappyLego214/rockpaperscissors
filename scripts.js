let regex = {
    rock:/^rock$/i,
    paper:/^paper$/i, 
    scissors:/^scissors$/i
}

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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection, "|", computerSelection);

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection ) {
        console.log("It is a Tie!");
    } else if (playerSelection == "rock" ) {
        
        if (computerSelection == "paper") {
        console.log("Computer Won!");
            } else {
            console.log("Player Won!");
            }

    } else if (playerSelection == "scissors") {
        
        if (computerSelection == "rock") {
        console.log("Computer Won!");
            } else {
            console.log("Player Won!");
            }

    } else if (playerSelection == "paper") {
        
        if (computerSelection == "scissors") {
        console.log("Computer Won!");
            } else {
            console.log("Player Won!");
            } 

    } else {
        console.log("Input Error!");
    }

}

playRound(playerSelection, computerSelection);



    