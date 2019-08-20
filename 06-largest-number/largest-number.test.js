var getLargestNumber = require("./largest-number");

test("get the largest number in an array", function() {
  var array1 = [3, 21, 88, 4, 36];
  var result = getLargestNumber(array1);
  expect(result).toEqual(88);
  expect(array1).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
