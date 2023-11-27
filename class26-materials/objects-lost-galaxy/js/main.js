//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.crust = "deep-dish"
pizza.toppings = ["mushrooms", "onions", "green peppers"]
pizza.shape = "circle"
pizza.size = 16

pizza.addTopping = function (topping) {
    pizza.toppings.push(topping)
}

pizza.bake = function () {
    console.log("pizza is cooked")
}

pizza.eat = function () {
    console.log("yum!")
}

