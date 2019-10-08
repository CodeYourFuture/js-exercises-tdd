function addNumbers(numbers) {
  let result = numbers.reduce(function(a, b) {
    return a + b;
  });
  return result;
}
module.exports = addNumbers;
