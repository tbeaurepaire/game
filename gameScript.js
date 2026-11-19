function playGame(playerChoice) {
 
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];
  let message = "You chose <b>" + playerChoice + "</b>. Computer chose <b>" + computerChoice + "</b>.<br>";

    if (playerChoice === computerChoice) {
    message += "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message += "You win!";
  } else {
    message += "Computer wins!"; }
   document.getElementById("result").innerHTML = message;
}