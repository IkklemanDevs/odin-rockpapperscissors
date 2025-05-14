console.log("Ready for Rock, Paper, Scissors?");

const choices = ["rock", "paper", "scissors"];


window.onload = function() {
  scoreCounter();
};

let userScore = 0;
let opScore = 0;

function decideWinner (){
  if (userChoice === computerChose) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChose === "scissors") ||
    (userChoice === "scissors" && computerChose === "paper") ||
    (userChoice === "paper" && computerChose === "rock")
  ) {
    userScore++;
    console.log("You win!");
  } else {
    opScore++;
    console.log("You lose!");
  }

  scoreCounter();
}

function scoreCounter() {
  
  const userScoreLocation = document.getElementById("user-score");
  const opScoreLocation = document.getElementById("op-score");

  userScoreLocation.innerText = userScore;
  opScoreLocation.innerText = opScore;

}

let userChoice = "";

function userInput(choice) {
  userChoice = choice;
  
  console.log(userChoice);

  const userImage = document.getElementById("user-choice");
  userImage.src = `assets/${userChoice}.png`;

  const computerChoice = getComputerValue(); // Get the computer's choice
  displayOpImage(computerChoice); // Pass the choice to displayOpImage

  decideWinner(userChoice, computerChoice);
}


let computerChose = "";

function getComputerValue() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(`New Computer Choice: ${choices[randomIndex]}`);
  return choices[randomIndex]; // Return the computer's choice
}

function displayOpImage(computerChoice) { // Accept computerChoice as an argument
  const opImage = document.getElementById("op-choice"); // find the img element
  computerChose = computerChoice;

  if (opImage) {
    opImage.src = `assets/${computerChoice}.png`; // set image source using the provided choice
  } else {
    
  }

  return computerChoice;
}


// The initial call should now get the value and then display it
const initialComputerChoice = getComputerValue();
console.log(`Computer: ${initialComputerChoice}`);
displayOpImage(initialComputerChoice);