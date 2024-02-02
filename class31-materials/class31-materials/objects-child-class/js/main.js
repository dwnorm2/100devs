//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed, size) {
    super(name);
    this.breed = breed;
    this.size = size;
  }
}

class Cat extends Dog {
  constructor(name, breed, size) {
    super(name, breed, size);
  }
  speak() {
    console.log("meow!");
  }
}

let pepper = new Dog("Pepper", "ALD", "Medium");
pepper;

let luca = new Cat("Luca", "Crazy", "Small");
luca;
