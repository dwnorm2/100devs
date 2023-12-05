//Change true/false at end to show more/less data
//for weather icons: https://developer.accuweather.com/weather-icons
//show weathertext and weathericon

fetch(
  'http://dataservice.accuweather.com/currentconditions/v1/332667?apikey=FTr7D9KwDJzIbFpLNTVAJyWnAhMMfb4H%20&language=en-US&details=true'
)
  .then((red) => red.json())
  .then((data) => {
    console.log(data[0]);
    document.getElementById('temp').textContent =
      data[0].Temperature.Imperial.Value;
    // document.getElementById('windChill').textContent =
    //   data[0].WindChillTemperature.Imperial.Value;
    document.getElementById('precipitation').textContent =
      data[0].HasPrecipitation;
    document.getElementById('RealFeel').textContent =
      data[0].RealFeelTemperature.Imperial.Value;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
