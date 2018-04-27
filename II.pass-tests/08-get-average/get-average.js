// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function calculateAvearge(array) {
  var newArr = [];
  var total = 0;
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      total += array[i];
      count++;
    }
  }
  return total / count;
}
module.exports = calculateAvearge;
