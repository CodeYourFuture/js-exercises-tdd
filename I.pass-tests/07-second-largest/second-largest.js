function secondLargest(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b)[arrayOfNumbers.length - 2];
}

module.exports = secondLargest;
