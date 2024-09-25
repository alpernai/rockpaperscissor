//---------------------------------------------------------------------------------------------------------------
// Pseudo-code
// 1. Create a getHumanChoice function that does the following:
// - Prompts user to choose 'rock', 'paper' or 'scissors'
// - Receives case insensitive input
// - Loops until valid input is provided
// - Returns the input value
   
// 2. Create a getComputerChoice function that does the following:
// - Creates an array RPS with three values: 'rock', 'paper', 'scissors'
// - Generates a random number i from 1 - 3 inclusive
// - Returns the value of RPS at index i

// 3. Create three global variables and initialize all of them to 0: humanScore, computerScore and roundsPlayed

// 3. Create a playRound function that does the following:
// - Receives the return values of getHumanChoice and computerSelection as arguements
// - Prints out who looses or wins and adds +1 to their respective score
// - Increase roundsPlayed +1
// - Print out the scores and rounds played

// 4. Create a while loop that runs while roundsPlayed < 5
// - Create a humanChoice variable and assign the value of getHumanChoice
// - Create a computerChoice variable and assign the value of getComputerChoice
// - Call the playRound function passing humanChoice and computerChoice as arguements
//---------------------------------------------------------------------------------------------------------------


// Global Variables 
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


// Get input from human
function getHumanChoice(){
    let choice;
    
    do {
        choice = window.prompt("Choose your weapon: rock, paper or scissors").toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    
    return choice;
}

// Get input from computer
function getComputerChoice(){
    let RPS = ["rock", "paper", "scissors"]
    return RPS[Math.floor(Math.random() * 3)] 
}

// Play 
function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        console.log("It's a draw!");
    }

    else if (humanSelection === "rock"){
        if (computerSelection === "paper"){
            console.log("Paper beats rock, you lose!");
            computerScore++;
        }
        else if(computerSelection === "scissors"){
            console.log("Rock beats scissors, you win!");
            humanScore++;
        }
    }

    else if (humanSelection === "paper"){
        if (computerSelection === "scissors"){
            console.log("Scissors beat paper, you lose!");
            computerScore++;
        }
        else if(computerSelection === "rock"){
            console.log("Paper beats rock, you win!");
            humanScore++;
        }
    }

    else if (humanSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("Rock beats scissors, you lose!");
            computerScore++;
        }
        else if(computerSelection === "paper"){
            console.log("Paper beats scissors, you win!");
            humanScore++;
        }
    }

    roundsPlayed++;

    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}, Rounds Played: ${roundsPlayed}`)
}


//Execute the game up to five rounds
while (roundsPlayed < 5){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}



