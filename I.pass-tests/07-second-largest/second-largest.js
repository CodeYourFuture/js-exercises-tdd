function secondLargest(numbers) {
  result = numbers.sort((a, b) => b - a);
  return result[1];
}
module.exports = secondLargest;
