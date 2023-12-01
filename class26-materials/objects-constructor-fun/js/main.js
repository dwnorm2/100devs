//Create a constructor with 4 properties and 3 methods

function MakePizza(crust, toppings, shape, size) {
  this.crust = crust;
  this.toppings = toppings;
  this.shape = shape;
  this.size = size;

  this.addTopping = function (topping) {
    pizza.toppings.push(topping);
  };

  this.bake = function () {
    console.log('pizza is cooked');
  };

  this.eat = function () {
    console.log('yum!');
  };
}

let dansPizza = new MakePizza('thick', ['onions', 'mushrooms'], 'circle', 12);

MakePizza.prototype.cheeseType = 'none';
