//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector("#check").addEventListener("click", check);

// function check() {
//   const day = document.querySelector("#day").value.toLowerCase();
//   let see = document.querySelector("#placeToSee");

//   if (day === "tuesday" || day === "thursday") {
//     see.textContent = "YOU HAVE CLASS";
//   } else if (day === "saturday" || day === "sunday") {
//     see.textContent = "Its The Weekend";
//   } else {
//     console.log("BORING");
//     see.textContent = "BORING";
//   }
// }

document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  const message = document.querySelector("#placeToSee");
  console.log(day);
  if (day === "monday" || day === "friday") {
    message.textContent = "BORING!";
  } else if (day === "tuesday" || day === "thursday") {
    message.textContent = "CLASS!";
  } else if (day === "wednesday") {
    message.textContent = "HUMPDAY!";
  } else if (day === "saturday" || day === "sunday") {
    message.textContent = "WEEKEND!";
  } else {
    message.textContent = "please type a day of the week";
  }
}
