document.querySelector("#finalRose").addEventListener("click", hide);

function hide() {
  document.querySelector("#claire").style.display = "none";
  document.querySelector("#sharleen").style.display = "none";
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

let i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
  i++;
}

//carousel

let turns = prompt("how many turns?");

for (let i = 1; i <= turns; i++) {
  console.log(`turn ${i}`);
}

let x = prompt("how many turns?");
let i = 1;
while (i <= x) {
  console.log(`turn ${i}`);
  i++;
}

// Parity

let i = prompt("start at what number?");
for (i; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let i = prompt("start at what number?");
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
  i++;
}

// Input Validation

let number = "";
while (number <= 100) {
  number = prompt("type in a number");
}

// Multiplication Table

let number = prompt("between 2 and 9");
if (number >= 2 && number <= 9) {
  for (let i = 1; i <= 20; i++) {
    let total = number * i;
    console.log(`${number} x ${i} = ${total}`);
  }
} else {
  console.log("please type a number between 2 and 9");
}

let choice = "";
while (choice != "yes" && choice != "no") {
  choice = prompt("yes or no?");
}
