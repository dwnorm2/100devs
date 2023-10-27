// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday = "christmas";
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let x = "hello";
alert(x.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNums(n1, n2, n3, n4, n5) {
  alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeNums(n1, n2, n3) {
  console.log(Math.min(n1, n2, n3), Math.max(n1, n2, n3));
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsTails() {
  let num = Math.ranodm() * 10;
  return num <= 5 ? "heads" : "tails";
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function loopyCoin(x) {
  for (i = 0; i < x; i++) {
    console.log(headsTails());
  }
}

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  let choices = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return choices[(nbPetals - 1) % 6];
}
