let countComputerWin = 0;
let countPlayerWin = 0;
let computerSelection;
let playerSelection;
const btns = document.querySelectorAll(".btn");

function game() {
  function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
  }

  function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = btns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (
          (e.target.innerText === "rock" && computerSelection === "paper") ||
          (e.target.innerText === "paper" &&
            computerSelection === "scissors") ||
          (e.target.innerText === "scissors" && computerSelection === "rock")
        ) {
          console.log(
            `You Lose! ${computerSelection} beats ${e.target.innerText}`
          );
          countComputerWin++;

          if (countComputerWin === 5) {
            console.log(
              `Computer Win in GAME! ${countComputerWin}:${countPlayerWin}`
            );
          }
        } else if (e.target.innerText === computerSelection) {
          console.log(`Nobody Win!`);
        } else {
          console.log(
            `You Win! ${e.target.innerText} beats ${computerSelection}`
          );
          countPlayerWin++;
          if (countComputerWin === 5) {
            console.log(
              `You Win in GAME! ${countComputerWin}:${countPlayerWin}`
            );
          }
        }
      });
    });
  }
  playRound();
}
game();

// function game() {
//   for (let i = 0; i < 5; i++) {
//     function getComputerChoice() {
//       const choice = ["rock", "paper", "scissors"];
//       let random = Math.floor(Math.random() * choice.length);
//       return choice[random];
//     }

//     function playRound(playerSelection, computerSelection) {
//       playerSelection = window.prompt(
//         "Inter your chose - rock, paper or scissors"
//       );
//       computerSelection = getComputerChoice();

//       if (
//         (playerSelection.toLowerCase() === "rock" &&
//           computerSelection === "paper") ||
//         (playerSelection.toLowerCase() === "paper" &&
//           computerSelection === "scissors") ||
//         (playerSelection.toLowerCase() === "scissors" &&
//           computerSelection === "rock")
//       ) {
//         console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//         countComputerWin++;
//       } else if (playerSelection.toLowerCase() === computerSelection) {
//         console.log(`Nobody Win!`);
//       } else {
//         console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//         countPlayerWin++;
//       }

//       // console.log(`Computer ${countComputerWin}: Player ${countPlayerWin}`);
//       return countComputerWin, countPlayerWin;
//     }
//     playRound();
//   }
//   if (countComputerWin > countPlayerWin) {
//     console.log(`Computer Win! ${countComputerWin}:${countPlayerWin}`);
//   } else if (countComputerWin < countPlayerWin) {
//     console.log(`Player Win! ${countPlayerWin}:${countComputerWin}`);
//   } else {
//     console.log(
//       `Nobody Win! Same numbers! ${countPlayerWin}:${countComputerWin}`
//     );
//   }
// }
// game();
