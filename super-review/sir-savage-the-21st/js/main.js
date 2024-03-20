//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function loop21() {
  for (let i = 0; i < 21; i++) {
    console.log(21);
  }
}

//Bonus can you make it print '21' 21 times to the dom?
let h2 = document.querySelector("h2");

function loop21DOM() {
  for (let i = 0; i < 21; i++) {
    h2.textContent += "21";
  }
}

loop21();
loop21DOM();
