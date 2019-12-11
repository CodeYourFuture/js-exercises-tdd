function addNumbers(numbers) {
  return numbers.reduce((acc, elem) => (acc += elem));
}
module.exports = addNumbers;
