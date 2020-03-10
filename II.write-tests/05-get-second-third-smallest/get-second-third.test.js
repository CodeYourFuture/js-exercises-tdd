var getSecondThird = require("./get-second-third");
test("get second and third from array", function() {
  // Arrange
  var input = [90, 5, 11, 8, 6];
  var unchanged = [90, 5, 11, 8, 6];
  var expected = [6, 8];
  // Act
  var result = getSecondThird(input);
  // Assert
  expect(result).toEqual(expected);
  expect(unchanged).toEqual(input);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

/*
our test passed and our code is pure no bugs


*/
