const getEvenNumbers = require("./get-even-numbers");

test("Get even numbers in a array", function() {
  const array = [22, 13, 73, 82, 4];
  const expected = [22, 82, 4];

  const result = getEvenNumbers(array);

  expect(result).toEqual(expected);
});
