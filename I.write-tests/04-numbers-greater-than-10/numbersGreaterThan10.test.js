var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  //Arrange
  var numbers = [4, 10, 32, 9, 21];
  var expected = [32, 21];

  //Act
  const result = largerThanTen(numbers);

  //Assert
  expect(result).toEqual(expected);
});
