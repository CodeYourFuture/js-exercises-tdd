function addNumbers(numbers) {
  var sum = 0;
  numbers.map(function(num) {
    sum = sum + num;
  });
  return sum;
}
module.exports = addNumbers;
