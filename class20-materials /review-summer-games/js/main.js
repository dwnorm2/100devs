//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multNums(num) {
  let product = 1;
  num.forEach((x) => (product *= x));
  alert(product);
}

multNums([5, 2, 6]);
