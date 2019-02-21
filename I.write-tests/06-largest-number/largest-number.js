function getLargestNumber(array) {
  var largestNumber = -Infinity;
  array.forEach(number => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });
  return largestNumber;
}

module.exports = getLargestNumber;
