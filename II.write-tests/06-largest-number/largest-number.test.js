// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

var largestNumber = require("./largest-number");

Test("largest number", function() {
  var input = [3, 21, 88, 4, 36];
  var unModifiedInput = [3, 21, 88, 4, 36];
  var result = largestNumber(input);
  var exectedOutput = 88;

  expect(result).toEqual(exectedOutput);
  expect(input).toEqual(unModifiedInput);
});
