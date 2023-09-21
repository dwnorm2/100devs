//Write your pseduo code first!
//get temp
//convert temp
//show temp

document.querySelector("#convert").addEventListener("click", convert);

function convert() {
  let temp = document.querySelector("#f").value;
  temp = ((temp - 32) * 5) / 9;
  document.querySelector("#showC").textContent = temp;
}

// function convert() {
//   let temp = document.querySelector("#f").value;

//   temp = ((temp - 32) * 5) / 9;

//   document.querySelector("#showC").textContent = temp;
// }
