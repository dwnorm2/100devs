//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNumsFromArray(arr) {
  let newArr = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(evenNumsFromArray([1, 2, 3, 4, 5, 6, 7, 8]));
