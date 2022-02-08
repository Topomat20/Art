var win = 0;
var loss = 0;
var tie = 0;
var choices = ["R", "P", "S"];

var userChoice = "";
var computerChoice = "";

//Collect user choice
function genertateUserChoice() {
//TODO: ask user if they want R, P, S
userChoice = prompt(`Hi, do you want to play Rock, Paper, Scissors?
Choose R, P, or S.`).toUpperCase()
    //TODO: store that choice somewhere
    //TODO: Edge case: user doesn't pick R, P, or S
   if(userChoice.toUpperCase() === "R" || userChoice.toUpperCase() === "P" || userChoice.toUpperCase() === "S"){
       genertateCompChoice();
   }else{
       alert("Sorry cant do that. Try again!")
       genertateUserChoice();
   };
};


// Collect computer choice
function genertateCompChoice(){
    //TODO: Randomly select R,P,S
    //TODO: store in variable
    var randomIndex = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomIndex];
    alert("The computer chose " + computerChoice)
    compareChoices();
}

// Compare choices
function compareChoices(){
    //TODO: WIN: user R comp S, user P comp R, user S comp R.
    //TODO: update win, loss, or tie variable with result
    if ((userChoice === "R" && computerChoice === "S") || (userChoice === "P" && computerChoice === "R") || (userChoice === "S" && computerChoice === "P")) {
        win++;
        alert("You won!")
    } 
    else if (
        //TODO: LOSE: user R comp P, user P comp S, user S comp R.
        //TODO: update win, loss, or tie variable with result
        (userChoice === "R" && computerChoice === "P") || (userChoice === "P" && computerChoice === "S") || (userChoice === "S" && computerChoice === "R")) {
        loss++;
        alert("You lost.")
    } 
    else {
        //TODO: TIE: anything else
        //TODO: update win, loss, or tie variable with result
        tie++
        alert("It's a tie!")
    };
    displayStats();
};

// Display outcome to player
// Display stats
    //TODO: tracking variables for win, loss and tie
    //TODO: show to user, use multiline alert
    function displayStats(){
        alert(`Your record:
Win: ${win}
Loss: ${loss}
Tie: ${tie}`)
        var playAgain = confirm('Do you want to play again?');
        if (playAgain === true){
            genertateUserChoice();
        } else {
            return;
        }
    }
// Ask to play again
    //TODO: after stats shown, ask user if they want to play again
    //TODO: if the say yes, start over.

    genertateUserChoice();