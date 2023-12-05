// //Change true/false at end to show more/less data
// //for weather icons: https://developer.accuweather.com/weather-icons
// //show weathertext and weathericon
// let realFeel;

// function weather() {
//   const apiKey = 'FTr7D9KwDJzIbFpLNTVAJyWnAhMMfb4H'; // Update with your actual API key

//   fetch(
//     `http://dataservice.accuweather.com/currentconditions/v1/332667?apikey=${apiKey}&language=en-US&details=true`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0]);
//       document.getElementById('temp').textContent =
//         data[0].Temperature.Imperial.Value + 'f';
//       document.getElementById('precipitation').textContent =
//         data[0].HasPrecipitation;
//       document.getElementById('RealFeel').textContent = `${
//         data[0].RealFeelTemperature.Imperial.Value
//       }f (${data[0].RealFeelTemperature.Imperial.Phrase.toLowerCase()})`;
//       realFeel = data[0].RealFeelTemperature.Imperial.Value;
//     })
//     .catch((err) => {
//       console.error(`Error: ${err.message}`);
//     });
// }

// weather();
// console.log(realFeel); // This will log undefined because it's executed before the fetch completes

let realFeel;
let precipitation;

function weather() {
  const apiKey = 'FTr7D9KwDJzIbFpLNTVAJyWnAhMMfb4H'; // Update with your actual API key

  return new Promise((resolve, reject) => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/332667?apikey=${apiKey}&language=en-US&details=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
        document.getElementById('temp').textContent =
          data[0].Temperature.Imperial.Value + 'f';
        document.getElementById('precipitation').textContent =
          data[0].HasPrecipitation;
        document.getElementById('RealFeel').textContent = `${
          data[0].RealFeelTemperature.Imperial.Value
        }f (${data[0].RealFeelTemperature.Imperial.Phrase.toLowerCase()})`;
        realFeel = data[0].RealFeelTemperature.Imperial.Value;
        precipitation = data[0].HasPrecipitation;
        resolve(realFeel);
      })
      .catch((err) => {
        console.error(`Error: ${err.message}`);
        reject(err);
      });
  });
}

let body = document.querySelector('body');

// Usage
weather()
  .then((realFeelValue) => {
    if (realFeelValue < 50) {
      body.style.backgroundColor = 'blue';
    }
    // You can use the realFeelValue here
  })
  .catch((error) => {
    // Handle errors if needed
    console.error('Error:', error);
  });
