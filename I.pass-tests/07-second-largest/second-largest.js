function secondLargest(numbers) {
  var orderedNum = numbers.sort((a, b) => b - a);
  return orderedNum[1];
}
module.exports = secondLargest;
