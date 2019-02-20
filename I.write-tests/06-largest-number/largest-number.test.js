const getLargestNumber = require("./largest-number");

test("The largest number", function() {
  //Arrange
  const input = [3, 21, 88, 4, 36];
  const expection = 88;
  //Act
  const result = getLargestNumber(input);
  console.log(result);
  //Assert

  expect(result).toEqual(expection);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
