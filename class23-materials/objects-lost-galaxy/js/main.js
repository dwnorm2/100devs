//Create a dog object that has four properties and three methods

let dog = {};

dog.breed = 'Australian Labradoodle';
dog.weight = 28;
dog.state = 'asleep';
dog.hunger = 'hungry';

dog.bark = function () {
  console.log('whoof!');
};

dog.eat = function () {
  dog.hunger = 'full';
};

dog.run = function () {
  dog.hunger = 'hungry';
};
