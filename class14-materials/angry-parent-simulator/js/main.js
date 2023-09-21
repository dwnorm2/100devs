// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }

const synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener("click", yell);

function yell() {
  const fName = document.querySelector("#firstName").value;
  const fMName = document.querySelector("#firstMiddle").value;
  const lMName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  const fullName = `${fName} ${fMName} ${lMName} ${lName}!!!!`;

  document.querySelector(
    "#placeToYell"
  ).textContent = `${fullName.toUpperCase()}!!!!`;

  let yellThis = new SpeechSynthesisUtterance(fullName);
  synth.speak(yellThis);
}
