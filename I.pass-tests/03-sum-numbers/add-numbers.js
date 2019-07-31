function addNumbers(numbers) {
  return numbers.reduce((totall, num) => num + totall);
}
module.exports = addNumbers;
