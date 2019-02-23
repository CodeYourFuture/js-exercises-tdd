var getEvenNumbers = require("./get-even-numbers");

test("extract array of even numbers", function() {
  //Arrange
  const input = [22, 13, 73, 82, 4];
  const expectation = [22, 82, 4];
  //Act
  const result = getEvenNumbers(input);
  //Assert
  expect(result).toEqual(expectation);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
