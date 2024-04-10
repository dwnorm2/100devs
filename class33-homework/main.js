const promise = fetch(`myurl`);

//then this
promise.then((res) => res.json()).then((user) => console.log(user.title));

//this executes first
console.log("synchronous");
