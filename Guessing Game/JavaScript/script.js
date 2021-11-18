// Calling the Function littleGame**********************************************

function callLittleGame() {
  littleGame();
};


// littleGame Function**********************************************************
function littleGame() {
    var p1Target = 0;
    var p2Guess = -1;
    alert ("Welcome to the game");
    var p1Target = prompt ("P1, Type a number between 1 - 50!");

    while (p1Target < 1 || p1Target > 50){
        var p1Target = prompt ("Hey thats not correct, type a number between 1 & 50!");
    }

    var p2Guess = prompt ("P2, Guess the number P1 thought of \n Tipp: It's between 1 & 50");
    var numberOfAttempts = 1;


    while (p2Guess != p1Target){

        if (p2Guess < p1Target){
          var p2Guess = prompt ("That is too low. Try Again!")
        }

        else if (p2Guess > p1Target) {
          var p2Guess = prompt ("That is too high. Try Again!")
        };

        numberOfAttempts++;
    }

    alert ("CORRECT! Number of Attempts " + numberOfAttempts);
 };
