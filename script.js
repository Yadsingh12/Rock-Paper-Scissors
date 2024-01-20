function getComputerChoice() {
    const ran = Math.random();
    if (ran < 0.33) return "rock";
    else if (ran < 0.66) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return playRound(prompt("Tie choose again!"), getComputerChoice());
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        return "You lost this round";
    } else {
        return "You won this round";
    }
}
