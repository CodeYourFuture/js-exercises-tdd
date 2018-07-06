module.exports = function(numbers) {
  var newNumbers = numbers.map(function(value) {
    return value + 1;
  });

  return newNumbers;
};
