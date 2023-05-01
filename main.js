let countComputerWin = 0;
let countPlayerWin = 0;
let computerSelection;
let playerSelection;

function game() {
    
    for (let i = 0; i < 5; i++) {   
        
        function getComputerChoice() {
            const choice = ["rock", "paper", "scissors"];
            let random = Math.floor(Math.random()* choice.length);
            // console.log(choice[random]);
            return choice[random];
        }
       
        function playRound(playerSelection, computerSelection) {
            playerSelection = window.prompt("Inter your chose - rock, paper or scissors"); 
            computerSelection = getComputerChoice();

            if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper")||(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")||(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
                console.log (`You Lose! ${computerSelection} beats ${playerSelection}`);
                countComputerWin++;

            } else if (playerSelection.toLowerCase() === computerSelection) {
                console.log(`Nobody Win!`);
          
            } else {
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
                countPlayerWin++;}

        }   
        playRound();
        return (countComputerWin, countPlayerWin);
        // console.log(`Computer ${countComputerWin}: Player ${countPlayerWin}`);
    } 

    if (countComputerWin > countPlayerWin) {
            return (`Computer Win! ${countComputerWin}:${countPlayerWin}`)
    } else if ((countComputerWin < countPlayerWin)) {
            return (`Player Win! ${countPlayerWin}:${countComputerWin}`)
    } else return (`Nobody Win! Same numbers! ${countPlayerWin}:${countComputerWin}`)
}

game();