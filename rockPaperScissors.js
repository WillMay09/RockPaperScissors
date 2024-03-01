
//prompts user to type rock, paper or scissor. non-case sensitive
//let userInput = prompt("Rock, Paper, or Scissors? Your Choice").toLowerCase();

//stores the computer's random input of 1, 2, or 3.
let computerInput = Math.floor(Math.random()*3)+1;



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', (e) =>{

        const userInput = e.target.textContent.toLowerCase();
        console.log(userInput);
        convertUserInput(userInput);
        

    });

});



function getUserInput(userInput){




}



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

    if(numericUserVal==1 && computerInput==2){

        console.log("the computer wins, paper beats rock");

    }else if(numericUserVal==2 && computerInput==3){

        console.log("the computer wins, scissors beats paper");

    }else if(numericUserVal==3 && computerInput==1){

        console.log("the computer wins, rock beats scissors");

    }else if(numericUserVal==computerInput){

        console.log("It is a draw");
    }else{

        console.log("user wins, the computer chose unwisely");
    }



}

function playGame(userInput, computerInput){
//converts user string value into a number
let numericUserVal = convertUserInput(userInput);

checkWin(numericUserVal, computerInput);



}


playGame(userInput, computerInput);
console.log(userInput);
console.log(computerInput);