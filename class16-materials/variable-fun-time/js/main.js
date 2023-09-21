//--- Easy
//create a variable and assign it a number
let num = 15;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input

document
  .querySelector("#danceDanceRevolution")
  .addEventListener("input", getValue);

let value;
function getValue() {
  value = document.querySelector("#danceDanceRevolution").value;
  value = Number(value) + 25;
  alert(value);
}

//add 25 to that number
// value += 25;
// console.log(value);
//alert that number
// alert(value);

//--- Hard
//create a variable that holds the h1
let bob = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
bob.addEventListener("click", add);
function add() {
  console.log(value + num);
}
