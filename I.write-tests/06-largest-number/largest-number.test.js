test("Largest number", function() {
  //Arrange
  var largestNumber = require("./largest-number");
  var numbers = [3, 21, 88, 4, 36];
  //Act

  var result = largestNumber(numbers);

  //Assert
  expect(result).toEqual(88);
  expect(numbers).toEqual([3, 21, 88, 4, 36]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
