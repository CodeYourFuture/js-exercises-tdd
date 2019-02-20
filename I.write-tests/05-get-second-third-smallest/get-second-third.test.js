const getSecondAndThirdSmallest = require("./get-second-third");
test("Get the second and third smallest numbers", function() {
  //Arrange
  const input = [90, 5, 11, 8, 6];
  const expection = [6, 8];
  //Act
  const result = getSecondAndThirdSmallest(input);
  //Assert
  expect(result).toEqual(expection);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
