// *Variables*
// Declare a variable, assign it a value, and alert the value
let bob;
bob = 2;
// alert(bob);

// Create a variable, divide it by 10, and console log the value
let cat = 10;
cat /= 3;
// console.log(cat);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function muliplies3AndAlerts(n1, n2, n3) {
  alert(n1 * n2 * n3);
}
// muliplies3AndAlerts(2, 2, 2);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function add2Sub2(n1, n2, n3, n4) {
  console.log(n1 + n2 - n3 - n4);
}

// add2Sub2(2, 2, 2, 1);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function winna(n1, n2, n3) {
  result = (100 + n1 - n2) / n3;
  if (result > 25) {
    alert("WE HAVE A WINNA");
  }
}

// winna(2, 2, 2);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day) {
  day = day.toLowerCase();
  if (day === "saturday" || day === "sunday") {
    alert("weekend");
  } else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    alert("weekday");
  } else {
    alert("Try again!");
  }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loopy(num) {
  for (let i = 1; i <= num; i += 3) {
    console.log(i);
  }
}

// if h == 23 && s == 59
// 0 0 0
// if s == 59 && m == 59
// h++ m = 0 s = 0
//else
// add 1 to second

//add 1 second to time program
// let h = Number(prompt("hour?"));
// let m = Number(prompt("minute?"));
// let s = Number(prompt("second?"));

// if (h <= 23 && h >= 0 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
//   if (h == 23 && m == 59 && s == 59) {
//     console.log("0h0m0s");
//   } else if (s == 59 && m == 59) {
//     h++;
//     console.log(`the time is ${h}h0m0s`);
//   } else if (s == 59) {
//     m++;
//     s = 0;
//     console.log(`the time is ${h}h${m}m${s}s`);
//   } else {
//     s++;
//     console.log(`the time is ${h}h${m}m${s}s`);
//   }
// } else {
//   console.log("please type in valid time");
// }

// Say hello to the user
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }
// let firstName = prompt("fname?");
// let lastName = prompt("lname?");

// console.log(sayHello(firstName, lastName));

// Square the given number x
// function mini(n1, n2) {
//   if (n1 < n2) {
//     console.log(n1);
//   } else if (n2 < n1) {
//     console.log(n2);
//   } else {
//     console.log("equal");
//   }
// }
// mini(5, 1);

function calculate(num1, op, num2) {
  let total;
  if (op === "+") {
    total = num1 + num2;
  } else if (op === "-") {
    total = num1 - num2;
  } else if (op === "*") {
    total = num1 * num2;
  } else if (op === "/") {
    total = num1 / num2;
  }
  console.log(total);
}

function circumference() {
  let r = prompt("radius?");
  let circumference = 2 * (Math.PI * r);
  console.log(circumference);
}

function area() {
  let r = prompt("radius?");
  let area = Math.PI * r ** 2;
  console.log(area);
}
