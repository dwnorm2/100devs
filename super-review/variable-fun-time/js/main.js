//--- Easy
//create a variable and assign it a number
let num = 7;
//minus 10 from that number
num -= 5;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
let bob = Number(document.getElementById("danceDanceRevolution").value);
//add 25 to that number
bob += 25;
//alert that number
alert(bob);
//--- Hard
//create a variable that holds the h1
let header1 = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
header1.addEventListener("click", addVars);

function addVars() {
  console.log(bob + num);
}
