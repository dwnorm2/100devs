//Create a conditonal that checks their age
// function checkAge() {
//   if (age < 16) {
//     console.log("You can't drive");
//   } else if (age < 18) {
//     console.log(
//       "You can't hate from outside the club, because they can't even get in"
//     );
//   } else if (age < 21) {
//     console.log("You can't drink");
//   } else if (age < 25) {
//     console.log("You can't rent cars affordably");
//   } else if (age < 30) {
//     console.log("You can't rent fancy cars affordably");
//   } else {
//     console.log("There is nothing else to look forward to");
//   }
// }
function checkAge() {
  if (age < 16) {
    return "You can't drive";
  } else if (age < 18) {
    return "You can't hate from outside the club, because they can't even get in";
  } else if (age < 21) {
    return "You can't drink";
  } else if (age < 25) {
    return "You can't rent cars affordably";
  } else if (age < 30) {
    return "You can't rent fancy cars affordably";
  } else {
    return "There is nothing else to look forward to";
  }
}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener("click", getAge);
//Take the value from the input
function getAge() {
  age = document.querySelector("#danceDanceRevolution").value;

  document.querySelector("p").textContent = checkAge();
}
//Place the result of the conditional in the paragraph
