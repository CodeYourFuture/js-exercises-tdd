// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(array) {
  var nums = array.filter(num => typeof num === "number");
  var sum = nums.reduce((a, b) => a + b);
  var numsLength = nums.length;
  var result = sum / numsLength;

  return result;
}

module.exports = average;
