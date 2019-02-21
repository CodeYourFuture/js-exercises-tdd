const getSecondThird = require("./get-second-third.js");

test("Get second and third smallest number", function() {
  //Arrange
  const numbers = [90, 5, 11, 8, 6];
  const expectation = [6, 8];
  //Act
  const result = getSecondThird(numbers);
  //Assert
  expect(result).toEqual(expectation);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
