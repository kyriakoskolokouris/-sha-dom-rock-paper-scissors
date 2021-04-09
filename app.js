let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const playerOptions = document.querySelectorAll(".selection")
const result = document.getElementById("results")
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");

function computerPlay() {
  const computerHand = ["rock", "paper", "scissors"];
  const computerRes = Math.floor(Math.random() * computerHand.length);
  return computerHand[computerRes];
  }

  playerOptions.forEach( playerOption => playerOption.addEventListener("click", e =>{
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    playRound();
  }));

function playRound() {
  let result;
if (playerSelection === computerSelection) {
}

if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
      playerScore++    
    } else {
    computerScore++
    }

    player.textContent = ` ${playerScore}`;
    computer.textContent = ` ${computerScore}`;
    finalResult();
  }

  function finalResult() {
    if (playerScore === 5) {
      result.textContent = ` 🥳 You win the game! ${playerScore}  - ${computerScore} 🥳`
      result.style.color = "green";
   
      playerScore = 0;
      computerScore = 0;

      const restartBtn = document.createElement('button');
      restartBtn.setAttribute("id", "new");
      document.body.append(restartBtn)
      restartBtn.textContent = " 🎮 AGAIN! 😎";

      restartBtn.addEventListener("click", () => {
        location.reload(); 
      
    });} else if (computerScore === 5) {
      result.textContent = ` 💀 Good luck next time.. 🙏 You lost: ${playerScore}  -  ${computerScore} `
      result.style.color = 'red';

      playerScore = 0;
      computerScore = 0;
  
      const restartBtn = document.createElement('button');
      restartBtn.setAttribute("id", "new");
      document.body.append(restartBtn)
      restartBtn.textContent = " 🎮 AGAIN! 😎";

      restartBtn.addEventListener("click", () => {
        location.reload();  
      }); 
    }
  }

  


