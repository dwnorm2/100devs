// document.getElementById("purple").onclick = partyPurple;
// document.getElementById("green").onclick = partyGreen;
// document.getElementById("blue").onclick = partyBlue;

// function partyPurple() {
//   document.querySelector("body").style.backgroundColor = "purple";
//   document.querySelector("body").style.color = "white";
// }

// function partyGreen() {
//   document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
//   document.querySelector("body").style.color = "white";
// }

// function partyBlue() {
//   document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
//   document.querySelector("body").style.color = "white";
// }
document.querySelector("#purple").addEventListener("click", makePurple);
document.querySelector("#green").addEventListener("click", makeGreen);
document.querySelector("#blue").addEventListener("click", makeBlue);
document.querySelector("#red").addEventListener("click", makeRed);

function makePurple() {
  document.body.style.background = "purple";
  document.body.style.color = "white";
}

function makeGreen() {
  document.body.style.background = "green";
  document.body.style.color = "white";
}

function makeBlue() {
  document.body.style.background = "blue";
  document.body.style.color = "white";
}

function makeRed() {
  document.body.style.background = "red";
  document.body.style.color = "white";
}
