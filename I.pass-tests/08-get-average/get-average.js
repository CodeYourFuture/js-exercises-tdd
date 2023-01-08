// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function (array) {
  let numbers = array.filter((element) => typeof element === "number");
  return numbers.reduce((a, b) => a + b) / numbers.length;
};
