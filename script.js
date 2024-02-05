function getComputerChoice() {
    const ran = Math.floor(Math.random() * 100);
    if (ran < 33) return "rock";
    else if (ran < 66) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    const roundResult = document.querySelector("#round-result");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        roundResult.textContent="Tie:choose again";
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        roundResult.textContent="You lost this round";
        i++;
        computerScore++;
    } else {
        roundResult.textContent= "You won this round";
        i++;
        userScore++;
    }
    result.textContent = `User score: ${userScore}  Computer score: ${computerScore}`;
    if(i>=5) {
        if(userScore>computerScore){
            result.textContent = "You won";
        } else {
            result.textContent = "You lost";
        }
        rock.remove();
        paper.remove();
        scissor.remove();
        roundResult.remove();
    }
}

let i=0;
let userScore=0;
let computerScore=0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const result = document.querySelector("#result");

rock.addEventListener("click",()=> {
        playRound("rock",getComputerChoice());
});
paper.addEventListener("click",()=> {
    playRound("paper",getComputerChoice());
});
scissor.addEventListener("click",()=> {
    playRound("scissor",getComputerChoice());
});