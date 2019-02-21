var getLargestNumber = require("./largest-number");

test("Get the largest number", function () {
  // Arrange
  const input = [3, -12, 21, 88, 4, 36];
  const unchanged = [3, -12, 21, 88, 4, 36];
  const expectedLargestNumber = 88;

  // Act
  const result = getLargestNumber(input);

  //Assert
  expect(result).toEqual(expectedLargestNumber);
  expect(input).toEqual(unchanged);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
