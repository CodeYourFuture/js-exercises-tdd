var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  // Arrange
  const inputNum = [4, 10, 32, 9, 21];
  const expectation = [32, 21];
  //Act
  result = largerThanTen(inputNum);
  //Assert
  expect(result).toEqual(expectation);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
