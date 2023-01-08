module.exports = function (numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[1];
};
