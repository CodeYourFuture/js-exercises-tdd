// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

var getLargestNumber = require("./largest-number");

test("Get largest number in an array", function() {
  //Arrange
  var myArray = [3, 21, 88, 4, 36];
  var expectation = 88;

  //Act
  const result = getLargestNumber(myArray);
  var checkMyArray = [3, 21, 88, 4, 36];

  //Assert
  expect(result).toEqual(expectation);
  expect(myArray).toEqual(checkMyArray);
});
