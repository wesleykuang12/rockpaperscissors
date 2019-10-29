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
    randomNumber = Math.random();

    let randomNumber = 0;

    console.log(computerChoice);
    if (randomNumber < 0.33) {

        let computerChoice ="paper";

        alert ("")
    }

    else if ( randomNumber < 0.66) {
        $("#scissor").html("");
    }

    else {
        $("#rock").text("");
    }
});


