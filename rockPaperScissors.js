
//prompts user to type rock, paper or scissor. non-case sensitive
//let userInput = prompt("Rock, Paper, or Scissors? Your Choice").toLowerCase();

//stores the computer's random input of 1, 2, or 3.
let computerInput = 0;
let userInput = "";


const buttons = document.querySelectorAll('button');


/*when the button is clicked, get the text from the button, get computer input, send everything to 
calculated for the score.  The game moves at the speed of the user, when the user clicks the game moves*/
buttons.forEach((button) => {

    button.addEventListener('click', (e) =>{

        userInput = e.target.textContent.toLowerCase();
        computerInput = getComputerInput(computerInput);
        console.log(userInput);
        console.log(computerInput);
        checkWin(userInput,computerInput);
        
        

    });

});

function getComputerInput(computerInput){

    computerInput = Math.floor(Math.random()*3)+1;
    computerInput = convertComputerInput(computerInput);

    return computerInput ;

}




function convertComputerInput(computerInput){

    switch(computerInput){

        case 1:
        computerInput = "rock";
        return computerInput;

        case 2:
        computerInput = "paper";
        return computerInput;

        case 3:
        computerInput = "scissors";
        return computerInput;

        default:

        console.log("the computer made an error");

    }
}



///rock=1, paper=2, scissors=3
function checkWin(userInput, computerInput){

    if(userInput===computerInput){

        console.log("It is a draw")

    }else if(userInput==="rock" && computerInput==="scissors"){

        console.log("The user wins, rock beats scissors!");

    }else if(userInput==="scissors" && computerInput==="paper"){

        console.log("The user wins, scissors beats paper!");

    }else if(userInput==="paper" && computerInput==="rock"){

    }else if(computerInput==="rock" && userInput==="scissors"){

        console.log("The computer wins, rock beats scissors!");

    }else if(computerInput==="paper" && userInput==="rock"){

        console.log("The computer wins, paper beats rock!")

    }else if(computerInput==="scissors" && userInput==="paper"){


        console.log("The computer wins, scissors beats paper");
    }

}

function playGame(userInput, computerInput){


checkWin(userInput, computerInput);



}


playGame(userInput, computerInput);
console.log(userInput);
console.log(computerInput);