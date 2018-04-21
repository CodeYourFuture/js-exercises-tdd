function addNumbers(numbers) {
  var result = [];
  function add(a, b) {
    return a + b;
  }
  return result.push(numbers.reduce(add, 0));
}
module.exports = addNumbers;
