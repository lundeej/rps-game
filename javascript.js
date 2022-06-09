var myChoice = prompt("Choose R, P, or S");

var choices = ["R","P","S"];

var randomChoice = Math.floor(Math.random() * 3); //Gives a random number between 0-2

var computerChoice = choices[randomChoice];

console.log(computerChoice);

var userChoice = myChoice;

if (myChoice === computerChoice){
    alert("Tie");
} else if (myChoice === "R" && computerChoice === "S"){
alert("Win");
} else if(myChoice === "S" && computerChoice ==="P"){
    alert("Win");
} else (){
    alert("Loss");
}

