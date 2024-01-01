//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      let ul = document.querySelector("ul");
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      console.log(data);
      document.querySelector("h2").textContent = data.name;
      document.querySelector("h3").textContent = data.classes[0].name;

      //   for (let i = 0; i < data.subclasses.length; i++) {
      //     let li = document.createElement("li");
      //     ul.appendChild(li);
      //     li.textContent = data.subclasses[i].name;
      //   }

      data.subclasses.forEach((el) => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = el.name;
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
