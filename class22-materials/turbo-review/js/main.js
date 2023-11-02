// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "   tea   ";
console.log(favDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = "pear dog cat apple";
console.log(words.includes("apple"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
// console.log(computerChoice())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

let game = (_) => {
  let comp = computerChoice();
  let choice = prompt("rock, paper, or scissors?");

  return comp == choice
    ? "tie"
    : comp == "rock" && choice == "scissors"
    ? "comp wins"
    : comp == "rock" && choice == "paper"
    ? "you win"
    : comp == "paper" && choice == "rock"
    ? "comp wins"
    : comp == "paper" && choice == "scissors"
    ? "you win"
    : comp == "scissors" && choice == "rock"
    ? "you win"
    : "comp wins";
};

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function play(x) {
  for (let i = 0; i < x; i++) {
    console.log(game());
  }
}
