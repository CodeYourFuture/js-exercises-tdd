
test("get Largest number", function() {
  // Arrange
    var getLargestNumber = require("./largest-number");

  // Act
    var res = getLargestNumber([3, 21, 88, 4, 36]);
  // Assert
  expect(res).toEqual(88);
});



// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed