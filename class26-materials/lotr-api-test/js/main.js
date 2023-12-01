document.querySelector('button').addEventListener('click', search);
const headers = { Authorization: 'Bearer Q5f3odunSKUl2S7IJ4At' };

function search() {
  let character = document.querySelector('input').value;

  fetch(`https://the-one-api.dev/v2/character?name=${character}`, { headers })
    .then((red) => red.json())
    .then((data) => {
      console.log(data.docs);

      document.getElementById('name').textContent = data.docs[0].name;
      document.getElementById('race').textContent = data.docs[0].race;
      document.getElementById('race').textContent = data.docs[0].race;
      document.getElementById('wiki').href = data.docs[0].wikiUrl;
      document.getElementById('wiki').textContent = data.docs[0].wikiUrl;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
