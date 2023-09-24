//Create an array of movie titles. Loop through the array and add each element to the h2.
let movieTitles = ["Die Hard", "Die Hard 2", "Die Hard 3"];

movieTitles.forEach((movieTitle, indexNum) => {
  document.querySelector("h2").textContent += movieTitle + " ";
});

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let numArr = [10, 20, 30];

numArr.forEach((x, i) => {
  numArr[i] += 3;
});

console.log(numArr);

//Find the average of all the numbers from question two

let total = 0;
let average = 0;

numArr.forEach((x) => (total += x));
average = total / numArr.length;

console.log(total);
console.log(average);
