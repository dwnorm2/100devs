//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr= [1,2,3,4,5]
console.log(arr.reduce((sum , x) => sum + x));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(arr) {
  return arr.map(x => x**2)
}

squareArr(arr)

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  return str.split("").reverse().join("")
}
reverseString("hi")

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str) {
  return reverseString(str) == str ? "yes" : "no"
}

isPalindrome("oovo")