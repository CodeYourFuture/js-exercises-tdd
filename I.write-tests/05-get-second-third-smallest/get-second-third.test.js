var getSecondAndThird = require("./get-second-third");

test("get second and third element of an array", function() {
  //Arrange
  const input = [90, 5, 11, 8, 6];
  expectation = [6, 8];
  //Act
  var result = getSecondAndThird(input);
  //Assert
  expect(result).toEqual(expectation);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
