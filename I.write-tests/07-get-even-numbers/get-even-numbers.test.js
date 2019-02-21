const getEvenNumbers = require("./get-even-numbers");

test("Get even numbers", function () {
  // Arrange
  const input = [22, 13, -12, 73, 82, 4];
  const expected = [22, -12, 82, 4];

  // Act
  const result = getEvenNumbers(input);

  //Assert
  expect(result).toEqual(expected);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
