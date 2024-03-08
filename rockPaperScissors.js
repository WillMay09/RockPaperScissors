
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

//randomly selects computer input, calls convertComputerInput
function getComputerInput(computerInput){

    computerInput = Math.floor(Math.random()*3)+1;
    computerInput = convertComputerInput(computerInput);

    return computerInput ;

}



//converts number of computer input to a string
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

    let outPutContent = document.querySelector(".outPutContent");

    if(userInput===computerInput){

        outPutContent.innerText = "It's a draw!";

    }else if(userInput==="rock" && computerInput==="scissors"){

        outPutContent.innerText = "The user wins, rock beats scissors!";
      
    }else if(userInput==="scissors" && computerInput==="paper"){

       
        outPutContent.innerText= "The user wins, scissors beats paper!";

    }else if(userInput==="paper" && computerInput==="rock"){
        
        outPutContent.innerText = "The user wins, paper beats rock!";

    }else if(computerInput==="rock" && userInput==="scissors"){

        outPutContent.innerText = "The computer wins, rock beats scissors!";

    }else if(computerInput==="paper" && userInput==="rock"){

        outPutContent.innerText = "The computer wins, paper beats rock!";

    }else if(computerInput==="scissors" && userInput==="paper"){


        outPutContent.innerText = "The computer wins, scissors beats paper";
    }

}







function playGame(userInput, computerInput){


checkWin(userInput, computerInput);



}


playGame(userInput, computerInput);
console.log(userInput);
console.log(computerInput);