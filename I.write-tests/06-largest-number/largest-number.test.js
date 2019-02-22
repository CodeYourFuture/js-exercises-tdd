var getLargestNumber = require("./largest-number");
test("from the array get the biggest number", function() {
  const input = [3, 21, 88, 4, 36];
  const expectation = 88;

  const result = getLargestNumber(input);

  expect(result).toEqual(expectation);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
