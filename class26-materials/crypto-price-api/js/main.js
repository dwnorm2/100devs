document.querySelector('button').addEventListener('click', changeCoin);
document.querySelector('button').addEventListener('click', search);

let input = document.querySelector('input');

let coinName = document.querySelector('input').value.toLowerCase();

function changeCoin() {
  coinName = document.querySelector('input').value.toLowerCase();
}

input.addEventListener('keypress', function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    changeCoin();
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector('button').click();
  }
});
search();

function search() {
  fetch(`https://api.coincap.io/v2/assets/${coinName}`)
    .then((red) => red.json())
    .then((data) => {
      console.log(data.data);

      document.getElementById('coin').textContent = data.data.name;
      document.getElementById('symbol').textContent = data.data.symbol;
      document.getElementById('price').textContent = Number(
        data.data.priceUsd
      ).toFixed(2);
      document.getElementById('24hr').textContent = Number(
        data.data.changePercent24Hr
      ).toFixed(2);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  setTimeout(search, 5000);
}

//add conditions for css styling of green/red depending on + or - 24hr change
