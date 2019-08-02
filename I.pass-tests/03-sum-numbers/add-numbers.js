function addNumbers(numbers) {
  var received = 0;
  for (var i = 0; i < numbers.length; i++) {
    received += numbers[i];
  }
  return received;
}
module.exports = addNumbers;
