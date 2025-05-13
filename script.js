console.log("Ready for Rock, Paper, Scissors?");

const choices = ["rock", "paper", "scissors"];

window.onload = function() {
  scoreCounter();
};

function scoreCounter() {
  
  let userScore = 0;
  let opScore = 0;

  const userScoreLocation = document.getElementById("user-score");
  const opScoreLocation = document.getElementById("op-score");

  userScoreLocation.innerText = userScore;
  opScoreLocation.innerText = opScore;

}

function userInput(choice) {

  console.log(choice);

  const userImage = document.getElementById("user-choice");
  userImage.src = `assets/${choice}.png`;

  const computerChoice = getComputerValue(); // Get the computer's choice
  displayOpImage(computerChoice); // Pass the choice to displayOpImage

  return choice;
}


function getComputerValue() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(`New Computer Choice: ${choices[randomIndex]}`);
  return choices[randomIndex]; // Return the computer's choice
}

function displayOpImage(computerChoice) { // Accept computerChoice as an argument
  const opImage = document.getElementById("op-choice"); // find the img element

  if (opImage) {
    opImage.src = `assets/${computerChoice}.png`; // set image source using the provided choice
  } else {
    
  }

  return computerChoice;
}

function gameLogic (){
    
}

// The initial call should now get the value and then display it
const initialComputerChoice = getComputerValue();
console.log(`Computer: ${initialComputerChoice}`);
displayOpImage(initialComputerChoice);