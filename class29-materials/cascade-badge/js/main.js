//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let party = [1, 2, 3, 4];
let reversedParty = (party) => console.log(party.reverse());
reversedParty(party);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

function checkSqaureVsCube(a, b) {
  let squares = a.reduce((total, x) => total + Math.pow(x, 2), 0);
  let cubes = b.reduce((total, x) => total + Math.pow(x, 3), 0);

  return squares > cubes;
}
checkSqaureVsCube(a, b);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multOfI(arr) {
  return arr.filter((x, i) => x % i == 0);
}
multOfI([68, -1, 1, -7, 10, 10]);

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let arr = [1, "2", 3, "4"];

function sumOfNums(arr) {
  return arr.reduce((total, x) => total + +x, 0);
}

sumOfNums(arr);

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  return [
    2 * width * depth + 2 * height * depth + 2 * width * height,
    width * height * depth,
  ];
}
