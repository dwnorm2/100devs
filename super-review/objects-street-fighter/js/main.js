//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(hp, strength, style, name) {
  this.hp = hp;
  this.strength = strength;
  this.style = style;
  this.name = name;

  this.attack = function () {
    console.log(`${this.name} attacks!`);
  };
  this.taunt = function () {
    console.log("ha ha!");
  };
  this.block = function () {
    console.log("block!");
  };
}

let bob = new MakeFighter(100, 50, "karate", "bob");
