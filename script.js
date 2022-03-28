let playerScore = 0;  
let computerScore = 0;

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"]; 
    let computerSelection = (compChoice[Math.floor(Math.random() * compChoice.length)]);
    return(computerSelection);
}

// change innerHTML to innerText for security reasons!!!!


//consider removing the confirm window. The win() and loss() functions seem to execute before the DOM is manipulated 
//to also show the final score. This gives inconsistent behaviour across browsers.
//Only Firefox first displays score in div 'results'. Chrome and Safari go straight to the confirm window.
//confirm (and alert etc) All these methods are modal: they pause script execution and don’t allow the visitor to interact 
//with the rest of the page until the window has been dismissed.

//adding another game is not part of the exercise so this hassle isn't needed, I made it a feature for the future fancy UI

function win(computerSelection, playerSelection) {

    if (confirm("You win " + playerScore + " to " + computerScore + " by absolutely smashing R2's " + computerSelection + " with your " + playerSelection + ". Do you dare play again?")) {
        playerScore = 0;  
        computerScore = 0;
        document.getElementById("results").innerHTML = "pick a weapon"
    } else {
        let elem = document.getElementById("buttons");
        elem.parentNode.removeChild(elem);
        document.getElementById("results").innerHTML = "you coward"
    }
}

function loss(computerSelection, playerSelection) {

    if (confirm("You lose " + playerScore + " to " + computerScore + ". R2's " + computerSelection + " completely pulverized your pathetic puny " + playerSelection + ". Do you dare play again?")) {
        playerScore = 0;  
        computerScore = 0;
        document.getElementById("results").innerHTML = "pick a weapon"
    } else {
        let elem = document.getElementById("buttons");
        elem.parentNode.removeChild(elem);
        document.getElementById("results").innerHTML = "you coward"
    }
}

function playRound(playerSelection) {

    computerSelection = computerPlay();
    
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

        if (playerSelection === computerSelection) { 
            document.getElementById("results").innerHTML = "you both picked " + playerSelection + ", it's a tie. " + playerScore + " for you and " + computerScore + " for R2-D2.";   
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "You lose! R2-D2 had some rock-eating paper apparently. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                loss(computerSelection, playerSelection);
            }
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! Those scissors stood no chance against your mighty rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You win! The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                win(computerSelection, playerSelection);
            }
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! This paper must have come from Uranus, it entirely blocked R2-D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You win! The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                win(playerSelection, computerSelection);
            }   
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "R2-D2 whips out his Swiss army knife and cuts your paper to pieces. Obvious loss. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                loss(playerSelection, computerSelection);
            }
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            if (computerScore !== 5) {
                document.getElementById("results").innerHTML = "You lose! Those blades got pretty roughed up by R2D2's rock. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You lose. The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                loss(playerSelection, computerSelection);
            }   
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            if (playerScore !== 5) {
                document.getElementById("results").innerHTML = "You win! you cut R2's pathetic little piece of paper into world's most tiny violin and threw it back. The score is now " + playerScore + " for you and " + computerScore + " for R2-D2.";
            } else {
                document.getElementById("results").innerHTML = "You win! The final score is " + playerScore + " for you and " + computerScore + " for R2-D2!";
                win(playerSelection, computerSelection);
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










