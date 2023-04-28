function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()* choice.length);
    console.log(choice[random]);
}

getComputerChoice();
