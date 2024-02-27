
//prompts user to type rock, paper or scissor. non-case sensitive
let userInput = prompt("Rock, Paper, or Scissors? Your Choice").toLowerCase();

//stores the computer's random input of 1, 2, or 3.
let computerInput = Math.floor(Math.random()*3)+1;


function convertUserInput(userInput){

    switch(userInput){

        case "rock":
        userInput = 1
        return userInput;

        case "paper":

        userInput = 2
        return userInput;

        case "scissors":
        userInput = 3
        return userInput;

        default:

        console.log("the computer made an error");

    }
}

///rock=1, paper=2, scissors=3
function checkWin(numericUserVal, computerInput){




}

function playGame(userInput, computerInput){
//converts user string value into a number
let numericUserVal = convertUserInput(userInput);




}


playGame(userInput, computerInput);
console.log(computerInput);
console.log(computerInput);