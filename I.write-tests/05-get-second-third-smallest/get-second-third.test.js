// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];
// also test that the original array has not changed

var secondThird = require("./get-second-third");
test("Get second and third numbers", function() {
  // Given
  var nums = [90, 5, 11, 8, 6];
  // When
  var result = secondThird(nums);
  // Then
  expect(result).toEqual([6, 8]);
  expect(nums).toEqual(nums); // MENTORS - Advise is this is the way to test and see if new array has not changed.
});
