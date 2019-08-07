var getLargestNumber = require("./largest-number");
test(" get the largest number from an array", function() {
  var numbers = [3, 21, 88, 4, 36];
  var result = getLargestNumber(numbers);
  expect(result).toEqual(88);
  expect(numbers).toEqual(numbers);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
