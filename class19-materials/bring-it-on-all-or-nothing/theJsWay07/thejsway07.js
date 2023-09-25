//Musketeers

let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach((musketeer) => {
  console.log(musketeer);
});

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
  console.log(musketeer);
}

//Sum of values

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

for (const value of values) {
  sum = sum + value;
}

console.log(sum);

//Array maximum

const values2 = [3, 11, 7, 2, 9, 10];

let highestValue = 0;

for (const value of values2) {
  if (value > highestValue) {
    highestValue = value;
  }
}

console.log(highestValue);

//List of Words

let words = [];
let word;

function listOfWords() {
  while (word != "stop") {
    word = prompt("Word?");
    words.push(word);
  }
  words.pop();
  alert(words);
}

listOfWords();
