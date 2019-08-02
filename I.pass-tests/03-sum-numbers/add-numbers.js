function addNumbers(numbers) {
  return numbers.reduce(function(a, b) {
    return a + b;
  });
}
module.exports = addNumbers;
