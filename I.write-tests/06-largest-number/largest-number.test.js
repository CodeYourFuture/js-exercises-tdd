//npm test -- greet-people

var largestNumber = require("./largest-number");
test("get number largest one", function() {
  var input = [3, 21, 88, 4, 36];
  expected = 88;
  var result = largestNumber(input);
  expect(result).toEqual(expected);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
