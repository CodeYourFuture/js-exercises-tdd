const getLargestNumber = require("./largest-number.js");

test("Get largest number", function() {
  //Arrange
  const numbers = [3, 21, 88, 4, 36];
  const expectation = 88;
  //Act
  const result = getLargestNumber(numbers);
  //Assert
  expect(result).toEqual(expectation);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
