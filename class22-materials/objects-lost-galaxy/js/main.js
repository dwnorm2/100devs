//Create a mouse object that has four properties and three methods
let mouse = {};
mouse.color = "white";
mouse.tailLength = 5;
mouse.size = "large";
mouse.weight = 10;

mouse.squeak = function (squeakSound) {
  console.log(`${squeakSound}!!!!`);
};
mouse.growTail = function (growBy) {
  mouse.tailLength += growBy;
  console.log(mouse.tailLength + "inches");
};

mouse.eat = function (numberOfLbsToEat) {
  mouse.weight += numberOfLbsToEat;
};
