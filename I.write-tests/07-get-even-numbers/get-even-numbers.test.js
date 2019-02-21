const getEven = require("./get-even-numbers.js");

test("Get even numbers", function() {
  //Arrange
  const numbers = [22, 13, 73, 82, 4];
  const expectation = [22, 82, 4];
  //Act
  const result = getEven(numbers);
  //Assert
  expect(result).toEqual(expectation);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
