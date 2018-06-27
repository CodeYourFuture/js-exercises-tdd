// example
// input:[3, 21, 88, 4, 36] ;
// expected: 88;
// also test that the original array hasn't changed
var biggestNumber = require("./largest-number");
test("Get Largest number", function() {
  // Given
  var input = [3, 21, 88, 4, 36];

  var result = biggestNumber(input);

  expect(result).toEqual(88);
  expect(input).toEqual(input); //MENTORS - Advise is this is the way to test and see if new array has not changed.
});
