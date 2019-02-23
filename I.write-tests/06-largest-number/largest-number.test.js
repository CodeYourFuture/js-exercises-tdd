var displayLargestNum = require("./largest-number");
test("extracts the largest number in an array", function() {
  //Arrange
  const input = [3, 21, 88, 4, 36];
  const expectation = 88;
  //Act
  const result = displayLargestNum(input);
  //Assert
  expect(result).toEqual(expectation);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
