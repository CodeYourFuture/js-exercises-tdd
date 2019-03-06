var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  //Arrange
  var myArray = [4, 10, 32, 9, 21];
  var expectation = [32, 21];

  //Act
  const result = largerThanTen(myArray);

  //Assert
  expect(result).toEqual(expectation);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
