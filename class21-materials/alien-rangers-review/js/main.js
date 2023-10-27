//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Spongebob", "Dexter's Lab", "CatDog"];

tvShows.forEach((show) => console.log(show));

//Create an array of numbers
let nums = [1, 2, 3, 4, 5];
//Return a new array of numbers that includes every even number from the previous Arrays

let evens = (arr) => arr.filter((x) => x % 2 == 0);
evens(nums);

//Create a function that takes in an array of numbers

//Alert the sum of the second lowest and the second highest number

// let myArray = [2, 3, 4, 9, 10, 0, 6, 7, 2];

// function arrayOfNums(array) {
//   let max = Math.max.apply(Math, array);
//   let min = Math.min.apply(Math, array);

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == max || array[i] == min) {
//       array.splice(i, 1);
//       i--;
//     }
//   }

//   let newMax = Math.max.apply(Math, array);
//   let newMin = Math.min.apply(Math, array);

//   return newMax + newMin;
// }
// arrayOfNums(myArray);

let myArray = [2, 3, 4, 9, 10, 0, 6, 7, 2];

function arrayOfNums(array) {
  let sorted = arr.sort((a, b) => a - b);
  alert(sorted(2, -2));
}
arrayOfNums(myArray);
