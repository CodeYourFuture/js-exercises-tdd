// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
const larg = require("./largest-number");
test("Largest number test", function() {
  const numbers = [3, 21, 88, 4, 36];
  const expectation = 88;
  const result = larg(numbers);
  expect(result).toEqual(expectation);
});
