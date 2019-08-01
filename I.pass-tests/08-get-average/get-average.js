// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  var arrOnlyNumbers = numbers.filter(elemento => typeof elemento == "number");
  var media =
    arrOnlyNumbers.reduce((acc, elem) => (acc += elem)) / arrOnlyNumbers.length;
  return media;
}
module.exports = average;
