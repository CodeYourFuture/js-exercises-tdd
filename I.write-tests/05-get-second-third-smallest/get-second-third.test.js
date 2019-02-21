var getSecondThird = require("./get-second-third");

test("Get second and the third smallest number", function () {
  // Arrange
  const input = [-5, 90, 5, 11, 8, 6];
  const unchanged = [-5, 90, 5, 11, 8, 6];
  const expectedNumbers = [5, 6];

  // Act
  var result = getSecondThird(input);

  //Assert
  expect(input).toEqual(unchanged);
  expect(result).toEqual(expectedNumbers);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
