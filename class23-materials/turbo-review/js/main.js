// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let bob = "hello?"
if (bob.endsWith("?")) {
    alert(bob)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWord = "I am a jr. dev"
console.log(multiWord.replaceAll("jr. dev" , "software engineer"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function computerChoice() {
    let choices = ["rock" , "paper" , "scissors"];
    return choices[Math.floor(Math.random() * 3)]
}

console.log(computerChoice())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choice) {
    let comp = computerChoice()
    if (comp == choice) {
        console.log("tie")
    } else if ((comp == "rock" && choice == "paper") || (comp == "paper" && choice == "scissors") || (comp == "scissors" && choice == "rock")) {
        console.log(`you win! ${choice} beats ${comp}`)
    } else {
        console.log(`you lose! ${comp} bears ${choice}`)
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function choicesArray(choices) {
    for (let i = 0; i < choices.length; i++) {
        checkWin(choices[i])
    }
}