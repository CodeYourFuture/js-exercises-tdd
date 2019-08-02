module.exports = secondLargest;
function secondLargest(numbers) {
  numbers.sort(function(a, b) {
    return b - a;
  });
  return numbers[1];
}
