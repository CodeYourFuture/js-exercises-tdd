// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(arr) {
  var filteredArr = arr.filter(e => typeof e != "string");

  var sum = filteredArr.reduce((a, c) => a + c, 0);

  return sum / filteredArr.length;
}
module.exports = average;
