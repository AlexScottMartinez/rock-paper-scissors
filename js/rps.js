function getComputerChoice() 
{
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection === computerSelection) 
    {
        return "It is a tie, you both pick " + computerSelection + ".";
    } 
    else if (playerSelection === "rock" && computerSelection === "scissors") 
    {
        userScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        userScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        userScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } 
    else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function playGame() 
{
    for (let i= 0; i < 5; i++)
    {
        const playerSelection = prompt("Choose 'rock', 'paper', or 'scissors':").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

let userScore = 0;
let computerScore = 0;
playGame();
if (userScore > computerScore)
{
    console.log("You won! With " + userScore + " to " + computerScore + ".");
}
else {
    console.log("You lost! With " + userScore + " to " + computerScore + ".");
} 