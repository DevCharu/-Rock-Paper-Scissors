// Get Computer Choice


function getComputerChoice(){
const strings = [ "rock", "paper", "scissors"]; //Array of strings
const randomIndex = Math.floor(Math.random() * strings.length); // Generate a random string
return strings[randomIndex];
}
console.log("Computer chose: " + getComputerChoice());


// Get Human Choice

function getHumanChoice(){
    
const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase(); // Case sensitive
return choice;         
}


    let userChoice = getHumanChoice();   
    console.log("You chose: " + userChoice);




// Creating two Global Variables.

let humanScore = 0; // Initialize the variable to the value of 0
let computerScore = 0; // Initialize the variable to the value of 0


function playRound(humanChoice, computerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Normalize the human choice to lowercase
    humanChoice = humanChoice.toLowerCase();

  
   

   if(humanChoice === computerChoice){
    console.log("It's a tie ! ");
   }
   else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
   ){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
   }
   else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
                                                                                                     








  




  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  
