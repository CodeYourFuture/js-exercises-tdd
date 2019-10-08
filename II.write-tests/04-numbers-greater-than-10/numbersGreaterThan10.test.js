var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", () => {
  const numbers = [4, 10, 32, 9, 21];
  expect(largerThanTen(numbers)).toEqual([32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
