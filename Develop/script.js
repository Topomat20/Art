console.log("hello")

//Collect user choice
    //TODO: ask user if they want R, P, S
    window.alert("Lets play rock, paper, scissors!")
    //TODO: store that choice somewhere
    var r = r;
    p = p;
    s = s;
    function askchoice(r) {
        let letterSelected = 0;
        for (let i = 0; i < r.options.length; i++) {
            if(r.options [i].selected) {
                numberSelected++;
            }
        }
    }
    //TODO: Edge case: user doesnt pick R,P,or S
//Collect computer choice
    //TODO: Randomly select R,P,S
    //TODO: store in variable
// compare choices
    //TODO: win: user R comp S, user P comp R, user S, comp P
    //TODO: loss: user R comp P, user P comp S, user S, comp R
    //TODO: tie: anything else
    //TODO: update win, loss, or tie variable with result
//TODO: Display outcome to player
//display stats
let rps = prompt("r, p, or s")
if (rps.toLowerCase() == "r"){
    alert("p")
} else if (rps.toLowerCase() =="p") {
    alert("s")
}
    //TODO: tracking variables for win, loss and tie
    //TODO: Show to user, use multiline alert
//ask to play again
    //TODO: after stats shown, ask user if they want to play again
    //TODO: if they say yes, start over.  
    if (window.confirm("Do you want to leave.")){
        window.open("exit.html", "Lets play again.")
    }