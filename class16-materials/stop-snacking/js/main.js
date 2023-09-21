//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener("click", snack);

function snack() {
  let snackNumber = Number(document.querySelector("#input").value);
  let snackStop = document.querySelector("#stops");
  snackStop.textContent = "";

  for (let i = 1; i <= snackNumber; i++) {
    snackStop.textContent += "Stop! ";
  }
}
