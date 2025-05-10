console.log("Ready for Rock, Paper, Scissors?");

const choices = ["rock", "paper", "scissors"];

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
  return choices[randomIndex]; // Return the computer's choice
}

function displayOpImage(computerChoice) { // Accept computerChoice as an argument
  const opImage = document.getElementById("op-choice"); // find the img element

  if (opImage) {
    opImage.src = `assets/${computerChoice}.png`; // set image source using the provided choice
  } else {
    console.error("Image element with id 'op-choice' not found.");
  }

  return computerChoice;
}

// The initial call should now get the value and then display it
const initialComputerChoice = getComputerValue();
console.log(`Computer: ${initialComputerChoice}`);
displayOpImage(initialComputerChoice);