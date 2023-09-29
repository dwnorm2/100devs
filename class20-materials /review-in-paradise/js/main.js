// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = "pizza";
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "bob";
alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
let threeNums = (n1, n2, n3) => alert((n1 / n2) * n3);
threeNums(1, 2, 3);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let cubeRoot = (num) => console.log(Math.cbrt(num));
cubeRoot(64);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonth(month) {
  if (
    month === "June" ||
    month === "July" ||
    month === "August" ||
    month === "September"
  ) {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

summerMonth("June");
summerMonth("December");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function loopyNum(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
