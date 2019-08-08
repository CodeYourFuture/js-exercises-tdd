function getLargestNumber(array) {
  var largestNumber = array[0];

  for (var i = 0; i < array.length - 1; i++) {
    if (largestNumber < array[i + 1]) {
      largestNumber = array[i + 1];
    }
  }

  return largestNumber;
}

module.exports = getLargestNumber;
