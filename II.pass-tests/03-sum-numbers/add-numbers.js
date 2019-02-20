function addNumbers(numbers) {
  var sum = 0;
  numbers.forEach(number => (sum += number));
  return sum;
}
module.exports = addNumbers;
