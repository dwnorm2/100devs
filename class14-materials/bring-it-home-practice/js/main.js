// *Variables*
// Create a variable and console log the value
let pepper = "dog";
console.log(pepper);
// Create a variable, add 10 to it, and alert the value
let x = 5;
x += 10;
alert(x);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNumbers(num1, num2, num3, num4) {
  total = num1 - num2 - num3 - num4;
  alert(total);
}
subtractsFourNumbers(10, 5, 1, 5);
// Create a function that divides one number by another and returns the remainder
function modulus(num1, num2) {
  return num1 % num2;
}
console.log(modulus(20, 8));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
  total = num1 + num2;
  if (total > 50) {
    alert("Jumanji");
  }
}
jumanji(30, 40);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(num1, num2, num3) {
  total = num1 * num2 * num3;
  if (total % 3 === 0) {
    alert("ZEBRA");
  }
}
zebra(2, 1, 3);
