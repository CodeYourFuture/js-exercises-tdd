function secondLargest(numbers) {
  var sortedNumbers = numbers.sort((x, y) => {
    return x > y;
  });
  return sortedNumbers[numbers.length - 2];
}

module.exports = secondLargest;
// var numbers = [2, 0, 23, 0, 57, 1];
// var output = secondLargest(numbers);
// console.log(output);
