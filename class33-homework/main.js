import fetch from "node-fetch";

const promise = fetch(`myurl`);

//then this
promise.then((res) => res.json()).then((user) => console.log(user.title));

//this executes first
console.log("synchronous");

//basic
const getFruit = async (name) => {
  const fruits = {
    pineapple: "hi",
    peach: "good",
    strawberry: "yummy",
  };

  return Promise.resolve(fruits[name]);
};

getFruit("peach").then(console.log);

const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");
  const smoothie = await Promise.all([a, b]);
  //Promise.all tells all the promises in array to run concurrently
  return smoothie;
};

makeSmoothie().then((smoothie) => console.log(smoothie));
