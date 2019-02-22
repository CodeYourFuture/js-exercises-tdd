var getLargestNumber = require("./largest-number");

test("Get largest number in a array", function() {
  //Arrange
  var numbers = [3, 21, 88, 4, 36];
  var expected = 88;

  //Act
  const result = getLargestNumber(numbers);

  //Assert
  expect(result).toEqual(expected);
});

// also test that the original array hasn't changed
