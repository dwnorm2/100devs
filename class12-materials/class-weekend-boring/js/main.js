document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  const alert = document.querySelector("#placeToSee");

  //Conditionals go here
  if (day === "monday" || day === "wednesday" || day === "friday") {
    alert.textContent = "boring day";
  } else if (day === "tuesday" || day === "thursday") {
    alert.textContent = "class day";
  } else if (day === "saturday" || day === "sunday") {
    alert.textContent = "weekend";
  } else {
    alert.textContent = "please type in a day of the week";
  }
}
