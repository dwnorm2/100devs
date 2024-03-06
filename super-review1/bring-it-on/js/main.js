// *Variables*
// Create a variable and console log the value
let randomVariable = 5;
console.log(randomVariable);
// Create a variable, add 10 to it, and alert the value
let ranVar2 = 7;
ranVar2 += 10;
// alert(ranVar2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}
// sub4Nums(8, 2, 1, 1);
// Create a function that divides one number by another and returns the remainder

function randomFunc1(n1, n2) {
  return n1 % n2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(n1, n2) {
  let sum = n1 + n2;

  if (sum > 50) {
    alert("Jumanji");
  }
}

// jumanji(49, 89);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(n1, n2, n3) {
  let total = n1 * n2 * n3;
  if (total % 3 === 0) {
    alert("ZEBRA");
  }
}

// zebra(2, 2, 2);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopy(word, num) {
  for (let i = 0; i < num; i++) {
    console.log(word);
  }
}

loopy("bob", 10);
