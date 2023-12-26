document.querySelector("button").addEventListener("click", getFetch);
let todaysDate = new Date().toISOString().slice(0, 10);
document.querySelector("input").value = todaysDate;

function getFetch() {
  const choice = document.querySelector("input").value;
  if (choice > todaysDate) {
    choice = todaysDate;
  }
  const key = "37xtVRoiW2VLjd3aE8UMcan0svzrKxkmlZWSXgDI";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.getElementById("imageOfDay").src = "#";
      document.querySelector("iframe").src = "";
      console.log(data);

      data.media_type == "image"
        ? (document.getElementById("imageOfDay").src = data.hdurl) &&
          (document.querySelector("iframe").style.display = "none")
        : (document.querySelector("iframe").style.display = "block") &&
          (document.querySelector("iframe").src = data.url);

      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

getFetch();

//todo: buttons to scroll through dates
