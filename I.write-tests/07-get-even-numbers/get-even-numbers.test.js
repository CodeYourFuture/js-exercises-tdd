var getEven = require("./get-even-numbers");

test("get all even numbers", function() {
  const input = [22, 13, 73, 82, 4];
  const expected = [22, 82, 4];

  const result = getEven(input);
  expect(result).toEqual(expected);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
