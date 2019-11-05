// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("button").click(function(){
    var input = $("#input").val();
    $("#userChoice").text(input);
    let userChoice = "";
    let computerChoice = "";
    let winner = "";
    let randomNumber = 0;

    randomNumber = Math.random();

    console.log(computerChoice);
    if (randomNumber < 0.33) {

        computerChoice ="paper";


    }

    else if ( randomNumber < 0.66) {
        computerChoice = "scissors"

    }

    else {
        computerChoice = "rock"
    }
    console.log(computerChoice);
    $("#computerChoice").text(computerChoice);

    if (userChoice === computerChoice) {
        $("#result").text("Do it again");
    }
});


