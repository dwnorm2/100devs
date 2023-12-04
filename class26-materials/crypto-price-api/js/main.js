document.querySelector('button').addEventListener('click', changeCoin);
document.querySelector('button').addEventListener('click', search);

let input = document.querySelector('input');

let coinName = document.querySelector('input').value.toLowerCase();

function changeCoin() {
  coinName = document
    .querySelector('input')
    .value.toLowerCase()
    .replaceAll(' ', '');
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
      let ticker = data.data.symbol;
      document.querySelector(
        'img'
      ).src = `https://assets.coincap.io/assets/icons/${ticker.toLowerCase()}@2x.png`;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });

  // setTimeout(search, 5000);
}

let assets;

function getAssets() {
  fetch(`https://api.coincap.io/v2/assets`)
    .then((red) => red.json())
    .then((data) => {
      assets = data.data;
      for (let i = 0; i < 3; i++) {
        document.getElementById(`coin${i}`).textContent = data.data[i].name;
        document.getElementById(`symbol${i}`).textContent = data.data[i].symbol;
        document.getElementById(`price${i}`).textContent = Number(
          data.data[i].priceUsd
        ).toFixed(2);
        document.getElementById(`24hr${i}`).textContent = Number(
          data.data[i].changePercent24Hr
        ).toFixed(2);
        let ticker = data.data[i].symbol;
        document.getElementById(
          `logo${i}`
        ).src = `https://assets.coincap.io/assets/icons/${ticker.toLowerCase()}@2x.png`;
      }
      console.log(assets);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  // setTimeout(search, 5000);
}

getAssets();

//add conditions for css styling of green/red depending on + or - 24hr change
