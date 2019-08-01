// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(arr) {
  let arrayOfNumbers = arr.filter(member => typeof member === "number");
  return arrayOfNumbers.reduce((a, b) => a + b) / arrayOfNumbers.length;
}

module.exports = average;
