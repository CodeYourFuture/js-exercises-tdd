function arrayHasNumbers(array) {
  return array.some(function (number) {
    return typeof number === 'number';
  });
}

function secondLargest(numbers) {
  if (numbers.length === 0 || typeof numbers !== 'object') return null;
  if (numbers.length === 1 && typeof numbers[0] !== 'number') return null;
  if (numbers.length === 1 && typeof numbers[0] === 'number') return numbers[0];

  if (arrayHasNumbers(numbers)) {
    return numbers.sort(function (a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') return 0;
      return b - a;
    })[1];
  }
}

module.exports = secondLargest
