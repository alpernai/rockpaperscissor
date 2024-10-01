// Global Variables 
let gameResults = document.querySelector(".gameResults");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let roundResult;

// Get input from human 
function getHumanChoice(event) {
    let humanSelection = event.target.getAttribute("weaponChoice");
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

// Get input from computer
function getComputerChoice() {
    let RPS = ["rock", "paper", "scissors"];
    return RPS[Math.floor(Math.random() * RPS.length)];
}

// Play 
function playRound(humanSelection, computerSelection) {
    if (humanScore === 5) {
        roundResult = "You win the game!";
        resetGame();
        return;
    }

    if (computerScore === 5) {
        roundResult = "Computer won the game";
        resetGame();
        return;
    }

    if (humanSelection === computerSelection) {
        roundResult = "It's a draw!";

    } else if (humanSelection === "rock") {
        roundResult = (computerSelection === "paper") ? 
            "Paper beats rock, you lose this round!" : 
            "Rock beats scissors, you win this round!";
        computerSelection === "paper" ? computerScore++ : humanScore++;

    } else if (humanSelection === "paper") {
        roundResult = (computerSelection === "scissors") ? 
            "Scissors beat paper, you lose this round!" : 
            "Paper beats rock, you win this round!";
        computerSelection === "scissors" ? computerScore++ : humanScore++;

    } else if (humanSelection === "scissors") {
        roundResult = (computerSelection === "rock") ? 
            "Rock beats scissors, you lose this round!" : 
            "Paper beats scissors, you win this round!";
        computerSelection === "rock" ? computerScore++ : humanScore++;
    }

    roundsPlayed++;

    gameResults.textContent = `Score 
                               Winner: ${roundResult}
                               Human: ${humanScore}
                               Computer: ${computerScore}
                               Rounds Played: ${roundsPlayed}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameResults.textContent += "Select your weapon to play again!";
}

// Event listeners
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", getHumanChoice);
});

