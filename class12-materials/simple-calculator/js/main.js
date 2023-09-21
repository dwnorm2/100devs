// let total = 0;

// document.querySelector("#pumpkin").addEventListener("click", makeZero);
// document.querySelector("#dominosPizza").addEventListener("click", jumanji);
// document.querySelector("#zebra").addEventListener("click", add9);
// document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);

// function makeZero() {
//   total = 0;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function jumanji() {
//   total = total + 3;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function add9() {
//   total = total + 9;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

// function sub2() {
//   total = total - 2;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }
let total = 0;
let result = document.querySelector("#placeToPutResult");

document.querySelector("#pumpkin").addEventListener("click", zero);
document.querySelector("#dominosPizza").addEventListener("click", addThree);
document.querySelector("#zebra").addEventListener("click", addNine);
document
  .querySelector("#cantThinkOfAnything")
  .addEventListener("click", subtractTwo);
document.querySelector("#x2").addEventListener("click", x2);

function zero() {
  total = 0;
  result.textContent = total;
}

function addThree() {
  total += 3;
  result.textContent = total;
}

function addNine() {
  total += 9;
  result.textContent = total;
}

function subtractTwo() {
  total -= 2;
  result.textContent = total;
}

function x2() {
  total *= 2;
  result.textContent = total;
}
