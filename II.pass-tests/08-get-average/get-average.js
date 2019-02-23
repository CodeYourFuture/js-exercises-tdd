// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function(arr) {
  var sum = 0,
    numOfNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      numOfNum++;
    }
  }

  return sum / numOfNum;
};
