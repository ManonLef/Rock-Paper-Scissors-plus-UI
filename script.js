let playerScore = 0;  
let computerScore = 0;

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; 
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return(computerSelection);
}

function win() {

    if (confirm("You win! The final score is " + playerScore + " for you and " + computerScore + " for R2-D2! Would you like another attempt at beating R2's backend?")) {
        playerScore = 0;  
        computerScore = 0;
        document.getElementById("results").innerHTML = "pick a weapon"
    } else {
        let elem = document.getElementById("buttons");
        elem.parentNode.removeChild(elem);
        document.getElementById("results").innerHTML = "you coward"
    }
}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

        if (playerSelection === computerSelection) { 
            document.getElementById("results").innerHTML = "you both picked " + playerSelection + ", it's a tie. " + playerScore + " for you and " + computerScore + " for R2-D2.";   
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "you lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
            }
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                win();
            }
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                win();
            }   
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "you lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
            }
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "you lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
            }   
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                win();
            }  
        }  
    } 
}


document.getElementById("rock").addEventListener("click", () => {
    playRound("rock",);
});
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper",);
});
document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors",);
});










