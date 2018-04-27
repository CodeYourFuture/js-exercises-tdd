function secondLargest(numbers) {
  sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[1];
}
module.exports = secondLargest;
