var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  // Arrange
  var input = [4, 10, 32, 9, 21];
  //act
  var result = largerThanTen(input);
  //assert
  expect(result).toEqual([32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
