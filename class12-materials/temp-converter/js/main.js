//Write pseudo code first
//be able to enter value
//have that value be converted from c to f
//see value in dom

//my pseudo code
//type in c value in input
//hit enter
//enter triggers a function
//value gets put in variable
//variable gets converted to f via math
//display converted variable to dom (textcontent)

//leons:
//need the value that is in c
//convert from c to f
//show it

document.querySelector("#convert").addEventListener("click", run);
const synth = window.speechSynthesis;

function run() {
  let c = document.querySelector("#c").value;

  c = c * 1.8 + 32;

  document.querySelector("#f").innerText = c;

  c = new SpeechSynthesisUtterance(c);

  synth.speak(c);
}
