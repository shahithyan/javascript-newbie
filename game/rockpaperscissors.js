var player = process.argv[2];

var x = Math.random() * 3;
var y = Math.floor(x);
//console.log(y);

var moves = ["rock", "paper", "scissors"];
var computerMove = moves[y];
//console.log("Computer move = " + computerMove);


if (player === computerMove) {
    console.log("Tie!");
} else if (player === "rock") {
    if (computerMove === "scissors") {
        console.log("You win 🏆🏆");
    } else {
        console.log("You lose 😭😭");
    }
    
}

else if (player === "scissors") {
    if (computerMove === "paper") {
        console.log("You win 🏆🏆");
    } else{
        console.log("You lose 😭😭");
    }
}

else if (player === "paper") {
    if (computerMove === "rock") {
        console.log("You win 🏆🏆");
    } else{
        console.log("You lose 😭😭");
    }
}