//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 28;

age < 16
  ? console.log("no drive")
  : age < 18
  ? console.log("no hate")
  : age < 21
  ? console.log("no drink")
  : age < 25
  ? console.log("no rent car")
  : age < 30
  ? console.log("no rent fancy car")
  : console.log("nothing left");

//--- Harder
//On click of the h1

document.querySelector("h1").addEventListener("click", getValue);

function ageCheckDOM(age) {
  return age < 16
    ? "no drive"
    : age < 18
    ? "no hate"
    : age < 21
    ? "no drink"
    : age < 25
    ? "no rent car"
    : age < 30
    ? "no rent fancy car"
    : "nothing left";
}

function getValue() {
  let value = document.querySelector("input").value;

  document.querySelector("p").textContent = ageCheckDOM(value);
}
//Take the value from the input
//Place the result of the conditional in the paragraph
