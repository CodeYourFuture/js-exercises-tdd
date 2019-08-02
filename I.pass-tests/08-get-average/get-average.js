function average(numbers) {
  var onlyNumb = numbers.filter(numb => {
    return typeof numb === "number";
  });
  var total = 0;
  for (var i = 0; i < onlyNumb.length; i++) {
    total += onlyNumb[i];
  }
  var final = total / onlyNumb.length;
  return final;
}
// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = average;
