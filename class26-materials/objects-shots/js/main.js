//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch('https:///www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((red) => red.json())
  .then((data) => {
    console.log(data);
    document.querySelector('h2').textContent = data.drinks[0].strDrink;
    document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    document.querySelector('h3').textContent = data.drinks[0].strInstructions;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
