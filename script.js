let playerScore = 0;  
let computerScore = 0;
let rounds = 1;

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; // note to self: mind the brackets [] for math
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return(computerSelection);
}

function game() {
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

function playRound(playerSelection, computerSelection) {

    computerSelection = "rock";
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    
        rounds ++

        if (playerSelection === computerSelection) { 
            computerScore++;
            console.log("your objects collided mid-air, it's a tie. " + playerScore + " for you and " + computerScore + " for R2-D2.");   
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            console.log("You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            console.log("You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            console.log("You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            console.log("R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            console.log("You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            console.log("You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.");
        } 
    } 
}

function endGame() {
    if (computerScore > playerScore) {
        return("* GAME OVER * YOU LOSE! You got pulverized by a cute robot.")
    } else {
        return("* GAME OVER * YOU WIN! But beware of the sequel. Return of the astromech droids. You read that right... DroidS")
    }
}

document.getElementById("rock").addEventListener("click", playRound("rock",));
document.getElementById("paper").addEventListener("click", playRound("paper",));
document.getElementById("scissors").addEventListener("click", playRound("scissors",));


//window.alert("Open your console and refresh if you want to play a few rounds of Rock, Paper Scissors against an astromech droid. (hit cancel on the first round before you refresh)");
//loopGame();

//function loopGame() {
//    do {
//        console.log(" Get ready for Round " + rounds);
//        game();
//    }
//    while (rounds < 6);
//
//    const score = endGame();
//    console.log(score);
//}









