// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
var getLargestNumber = require("./largest-number");
test("get the largest number from an arraylist", function() {
  //arrange
  var input = [3, 21, 88, 4, 36];

  //act
  var result = getLargestNumber(input);
  //assert
  expect(result).toEqual(88);
});
test("orginal array hasn't changed", function() {
  //arrange
  var input = [3, 21, 88, 4, 36];
  //act
  var result = getLargestNumber(input);
  //assert
  expect(input).toEqual([3, 21, 88, 4, 36]);
});
