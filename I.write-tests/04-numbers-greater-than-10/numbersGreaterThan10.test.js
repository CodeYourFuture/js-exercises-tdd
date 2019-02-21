var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {
  // Arrange
  const input = [4, 10, 0, 32, 9, 21, -5];
  const expectation = [32, 21];
  // Act
  var result = largerThanTen(input);
  //Assert
  expect(result).toEqual(expectation);
});

