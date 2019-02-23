function getAverage(numbers) {
  var result = numbers.filter(member => typeof member === "number");
  return findAverage(result);
}

function findAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

module.exports = getAverage;
// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
