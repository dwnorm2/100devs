//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(brand, model, size, cups) {
    this.brand = brand;
    this.model = model;
    this.size = size;
    this.cups = cups;
  }

  powerOn() {
    console.log("powering on...");
  }
  brew() {
    console.log("brewing...");
  }
  powerOff() {
    console.log("poweringOff...");
  }
}
