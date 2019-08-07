var getLargestNumber = require("./largest-number");
test("get lergest number in array", function() {
  var input = getLargestNumber([3, 21, 88, 4, 36]);
  var result = 88;
  expect(result).toEqual(input);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
