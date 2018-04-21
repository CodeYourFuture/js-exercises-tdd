module.exports = function(numbers) {
  result = [];
  numbers.forEach(function(number) {
    result.push(number + 1);
  });
  return result;
};
