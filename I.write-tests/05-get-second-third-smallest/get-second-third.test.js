test("Get second Third", function() {
  // Arrange
  var getSecondThird = require("./get-second-third");
  var numbers = [90, 5, 11, 8, 6];

  // Act
  var result = getSecondThird(numbers);

  // Assert
  expect(result).toEqual([6, 8]);
});

// Test failing. Function has a bug

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
