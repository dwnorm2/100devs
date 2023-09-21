//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function console21() {
  for (let i = 0; i < 21; i++) {
    console.log("21");
  }
}

console21();

//Bonus can you make it print '21' 21 times to the dom?

function dom21() {
  for (let i = 0; i < 21; i++) {
    //   console.log("21");
    document.querySelector("h2").textContent += "21";
  }
}

dom21();
