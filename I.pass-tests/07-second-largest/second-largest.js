function secondLargest(numbers) {
  var sorted = numbers.sort();
  return sorted[sorted.length - 1];
}
module.exports = secondLargest;
