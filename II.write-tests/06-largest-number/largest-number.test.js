const getLargestNumber = require("./largest-number");
test("get the largest number ", () => {
  const numbers = [3, 21, 88, 4, 36];
  expect(getLargestNumber(numbers)).toBe(88);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
