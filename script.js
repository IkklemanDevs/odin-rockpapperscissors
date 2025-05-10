console.log("Ready for Rock, Paper, Scissors?");

const valueRock = "Rock";
const valuePaper = "Paper";
const valueScissors = "Scissors";

function getUserValue(choice){
    let answer = prompt("Rock, Paper, Scissors?");
    
}

function getComputerValue(){
    const computerValue = Math.random().toPrecision(2);

    if (computerValue < 0.33) {
        return valuePaper;
    } else if (computerValue <= 0.66){
        return valueRock;
    } else if (computerValue >0.67){
        return valueScissors;
    }
}
console.log(getComputerValue());


