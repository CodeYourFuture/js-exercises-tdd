// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
  var arrayNum = numbers.filter(ele => typeof ele === "number");
  return arrayNum.reduce((totall, num) => totall + num) / arrayNum.length;
}
module.exports = average;
