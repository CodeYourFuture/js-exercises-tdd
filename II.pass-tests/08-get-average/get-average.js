// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function isNumbers(array) {
  var num = 0;
  array.map(function(element) {
    if (typeof element === "number") {
      num++;
    }
  });
  return num;
}
module.exports = isNumbers;
