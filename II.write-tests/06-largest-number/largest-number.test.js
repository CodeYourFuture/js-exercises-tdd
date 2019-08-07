var largestNumber = require("./largest-number");

test("Get largest number", function() {
  var originalNumbers = [3, 21, 88, 4, 36];
  var numbers = [3, 21, 88, 4, 36];
  var output = largestNumber(numbers);

  expect(output).toEqual(88);
  expect(originalNumbers).toEqual(numbers);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
