// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function average(numbers) {
  var arrNumbers = numbers.filter(number => Number.isInteger(number));
  var average = arrNumbers.reduce((a, b) => a + b, 0) / arrNumbers.length;
  return average;
};
