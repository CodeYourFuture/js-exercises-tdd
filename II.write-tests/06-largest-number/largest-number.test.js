// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
var getLargestNumber = require("./largest-number");

test("Get largest number", function() {
  var largestNumber = [3, 21, 88, 4, 36];
  var excepted = 88;

  var output = getLargestNumber(largestNumber);
  expect(output).toEqual(excepted);
});
