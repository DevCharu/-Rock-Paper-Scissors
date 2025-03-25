// Get Computer Choice


function getComputerChoice(){
const strings = [ "rock", "paper", "scissors"]; //Array of strings
const randomIndex = Math.floor(Math.random() * strings.length); // Generate a random string
return strings[randomIndex];
}
console.log("Computer chose: " + getComputerChoice());


// Get Human Choice

function getHumanChoice(){
    
const choice = prompt("Enter your choice: rock, paper, or scissors");
return choice;


          
}

{
    let userChoice = getHumanChoice();
    console.log("You chose: " + userChoice);

}
