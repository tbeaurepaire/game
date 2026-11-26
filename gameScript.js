let guesses = [];
let gameOver = false;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playGame(playerChoice) {
    if (gameOver) {
        return;
    }
    guesses.push(playerChoice);
    let computerChoice = getComputerChoice();
    let result = "You lose!";

    // check win / lose / draw (as Week 7)
    // show the choices and the result

    if (result === "You win!" ||
        guesses.length === 5) {
        gameOver = true;
        document.getElementById("guesses")
            .innerHTML = "Game over. Your guesses: " +
            guesses.join(", ");
    }
}
}
