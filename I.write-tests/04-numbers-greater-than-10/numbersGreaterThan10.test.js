var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  const input = [1, 6, 83, 62, 34, 10, 0, 566, 99, 23, -32, -7, -42];
  const expected = [83, 62, 34, 566, 99, 23];

  const result = largerThanTen(input);

  expect(result).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];>
