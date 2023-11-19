//Create a Tony Hawk Pro Skater constructor that makes a skating game characters with 4 properties and 3 methods

function CreateSkater(name, style, city, helmet) {
  this.name = name;
  this.style = style;
  this.city = city;
  this.helmet = helmet;

  this.ollie = function () {
    console.log(`${this.name} does an ollie!`);
  };

  this.takeOffHelmet = function () {
    this.helmet = 'no';
  };

  this.kickflip = function () {
    console.log(`${this.name} does a kickflip!`);
  };
}

let bob = new CreateSkater('bob', 'crazy', 'chicago', 'yes');
