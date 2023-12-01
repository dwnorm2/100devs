//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch('https://dog.ceo/api/breeds/image/random')
  .then((red) => red.json())
  .then((data) => {
    console.log(data);
    document.querySelector('img').src = data.message;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
