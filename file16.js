// nested if else

// winning number 19

// 19 - your guess is right
// 15 - too low
// 22 - too high 


let winningNumber = 19;
let userGuess = +prompt("Guess your number");
// console.log(typeof userGuess, userGuess);

if(userGuess === winningNumber){
    console.log("Your guess is right!");
} else {
    if(userGuess < winningNumber){
        console.log("Too low");
    } else{
        console.log("Too high");
    }
}