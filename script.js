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


function game() {
    console.log("Let's play a rock, paper and scissors game!!!");
    console.log("The game's winner will be decided by best of 5");
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        const roundResult = playRound(prompt("Choose your choice:"), getComputerChoice());
        console.log(roundResult);
        if(roundResult === "You lost this round kiddo") computerScore++;
        else playerScore++;
        console.log(`player's score: ${playerScore} computer's score: ${computerScore}`);
    }
    if (playerScore > computerScore) return "You won man! congo";
    else return "You lost kiddo";
}