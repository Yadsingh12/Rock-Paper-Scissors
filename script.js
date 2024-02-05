function getComputerChoice() {
    const ran = Math.floor(Math.random() * 100);
    if (ran < 33) return "rock";
    else if (ran < 66) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector("#result");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        result.textContent="Tie:choose again";
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        result.textContent="You lost this round";
    } else {
        result.textContent= "You won this round";
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
rock.addEventListener("click",()=>(playRound("rock",getComputerChoice())));
paper.addEventListener("click",()=>(playRound("paper",getComputerChoice())));
scissor.addEventListener("click",()=>(playRound("scissor",getComputerChoice())));