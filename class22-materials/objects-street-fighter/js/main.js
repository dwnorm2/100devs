//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(fighterStyle, fighterGender, fighterSize, fighterName) {
  this.style = fighterStyle;
  this.gender = fighterGender;
  this.size = fighterSize;
  this.name = fighterName;

  this.attack = function () {
    console.log(`${this.name} attacked!`);
  };

  this.defend = function () {
    console.log(`${this.name} defended!`);
  };

  this.changeName = function (newName) {
    this.name = newName;
    console.log(`new fighter name is ${this.name}`);
  };
}

let Dan = new MakeFighter("BJJ", "male", "large", "Dan");

let Bob = new MakeFighter("BJJ", "male", "large", "Dan");

MakeFighter.prototype.isChampion = true;

console.log(Bob.isChampion);
