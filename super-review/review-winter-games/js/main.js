//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNums(arr) {
  let newArr = [];
  arr.forEach((x) => {
    if (x % 2 == 0) {
      newArr.push(x);
    }
  });
  return newArr;
}
