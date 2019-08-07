let getLargestNumber = require("./largest-number");

test("get largest number", function() {
  var input = [3, 21, 88, 4, 36],
    output = 88,
    result = getLargestNumber(input);
  expect(result).toBe(output);
});
test("check for original array has not changed", function() {
  let modify = [3, 21, 88, 4, 36],
    unmodify = [3, 21, 88, 4, 36];
  expect(modify).toEqual(unmodify);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
