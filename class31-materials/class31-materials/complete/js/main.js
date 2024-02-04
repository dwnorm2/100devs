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
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`);
  }
}

let simba = new Dog("Simba", "Shepard");
let machi = new Dog("The Machine", "Pitbull");
let salem = new Cat("Salem", "American Shorthair");

let farm = [simba, machi, salem];

for (a of farm) {
  a.speak();
}

// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   //need getter in order to use _name
//   get name() {
//     //all .name does is return the property. You can't update using this.name
//     return this._name;
//   }
//   speak() {
//     console.log(`${this._name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this._breed = breed;
//   }

//   //we need a getter for this._breed
//   get breed() {
//     return this._breed;
//   }
//   speak() {
//     //original speak from parent
//     super.speak();
//     console.log(`${this.name} barks`);
//   }
// }

// class Cat extends Animal {
//     constructor(name,breed) {
//         super(name)
//         this._breed = breed
//     }
//     get breed() {
//         return this._breed
//     }
//     speak() {
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }

//this isn't ideal, because we're repeating ourselves. Maybe do domesticated and wild classes that extend from the Animal class
