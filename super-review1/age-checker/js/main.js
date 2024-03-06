//Create a conditonal that checks their age

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 12;

if (age < 16) {
  console.log("you can't drive");
} else if (age < 18) {
  console.log("you can't hate from outside the club. you can't get in");
} else if (age < 21) {
  console.log("you can't drink");
} else if (age < 25) {
  console.log("you can't rent cars affordably");
} else if (age < 30) {
  console.log("you can't rent fancy cars affordably");
} else if (age >= 30) {
  console.log("there's nothing else left to look forward to");
}

//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener("click", getAge);
document.querySelector("h1").addEventListener("click", showAge);
//Take the value from the input
function getAge() {
  age = Number(document.querySelector("input").value);
}

//Place the result of the conditional in the paragraph
function showAge() {
  if (age < 16) {
    document.querySelector("p").textContent = "you can't drive";
    //   console.log("you can't drive");
  } else if (age < 18) {
    document.querySelector("p").textContent =
      "you can't hate from outside the club. you can't get in";
  } else if (age < 21) {
    document.querySelector("p").textContent = "you can't drink";
  } else if (age < 25) {
    document.querySelector("p").textContent = "you can't rent cars affordably";
  } else if (age < 30) {
    document.querySelector("p").textContent =
      "you can't rent fancy cars affordably";
  } else if (age >= 30) {
    document.querySelector("p").textContent =
      "there's nothing else left to look forward to";
  }
}
