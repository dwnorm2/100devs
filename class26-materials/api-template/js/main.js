//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  console.log(choice);
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      let drink = data.drinks[0];
      document.querySelector("h2").textContent = drink.strDrink;
      document.querySelector("h3").textContent = drink.strInstructions;
      document.querySelector("img").src = drink.strDrinkThumb;

      let arr = data.drinks;
      let index = 0;
      setInterval(function () {
        arr.shift();
        let drink = arr[index++ % arr.length];
        document.querySelector("h2").textContent = drink.strDrink;
        document.querySelector("h3").textContent = drink.strInstructions;
        document.querySelector("img").src = drink.strDrinkThumb;
      }, 3000);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
