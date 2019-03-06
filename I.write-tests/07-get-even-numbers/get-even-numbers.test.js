// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

var getEven = require("./get-even-numbers");

test("Get even numbers from an array", function() {
  //Arrange
  var myArray = [22, 13, 73, 82, 4];
  var expectation = [22, 82, 4];

  //Act
  const result = getEven(myArray);

  //Assert
  expect(result).toEqual(expectation);
});
