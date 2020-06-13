/* Rock-Paper-Scissors V1 */ 
/* V2: allow the player to determine how many rounds they want to play, and create a mechanism to track how many points each player wins */ 

var clock = 0;
var move = 0;
var movePlayer = 0;
var doesPlayerWin = 0;
console.log("Welcome to Tray's rock-paper-scissors command line game!\nTo play, simply enter your move below.");

function getRandomInt(max) {
  return Math.floor(Math.random() * 3) + 1;
}

function computerMove() {
  move = getRandomInt(3);
  if (move === 1) {
    move = "rock";
  } else if (move === 2) {
    move = "scissors";
  } else if (move === 3) {
    move = "paper";
  } }

function playerMove() {
  while (clock == 0) {
    movePlayer = prompt("Please choose a move: ")
    if (movePlayer === "rock" || movePlayer === "paper" || movePlayer == "scissors") {
    movePlayer = movePlayer.toLowerCase();
    break; }
    else if (movePlayer == "scissor") {
      movePlayer = "scissors";
      break
    } else {
    console.log("This is not a valid move. Try again.\n")
  } } }

function compareMoves() {
//Calculates what the winState is if:.
  if (movePlayer == "rock") { //They choose rock.
    if (move == "paper") {
      winState = false;
    } else if (move == "scissors") {
      winState = true;
    } else if (move == "rock") {
      winState = "tie"
    } }

  if (movePlayer == "paper") { //They choose paper.
    if (move == "paper") {
      winState = "tie";
    } else if (move == "scissors") {
      winState = false;
    } else if (move == "rock") {
      winState = true;
    } }

  if (movePlayer == "scissors") { //They choose scissors.
    if (move == "paper") {
      winState = true;
    } else if (move == "scissors") {
      winState = "tie";
    } else if (move == "rock") {
      winState = false;
    } }

// Calculates whether or not the player wins. 
  if (winState == true) {
    winStateStr = "won"
  } else if (winState == false) {
    winStateStr = "lost"
  } else if (winState == "tie") {
    winStateStr = "tied"
  } else {
    console.log("DEBUG: Something fucked up w/ the winstate.");
  }

  console.log("\nYour move is " + movePlayer +".\nThe computer's move is " + move + ".\nYou " + winStateStr + "!");
}

function playRound() {
  computerMove();
  playerMove();
  compareMoves();
}
 
playRound()
