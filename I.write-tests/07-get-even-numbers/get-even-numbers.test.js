const getEven = require("./get-even-numbers");
test("Get the even numbers", function() {
  //Arrange
  const input = [22, 13, 73, 82, 4];
  const expection = [22, 82, 4];
  //Act
  const result = getEven(input);
  console.log(result);
  //Assert
  expect(result).toEqual(expection);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
