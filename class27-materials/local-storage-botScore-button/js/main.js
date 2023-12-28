//Create a button that adds 1 to a botScore stored in localStorage

if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", addAnothaOne);

function addAnothaOne() {
  let botScoreVal = Number(localStorage.getItem("botScore"));
  //add 1 to a botScore Val
  botScoreVal += 1;
  //set the botscore in local storage to the updated botscore value
  localStorage.setItem("botScore", botScoreVal);
}
