var getSecondThird = require("./get-second-third");
test("sort the array and get the second and the third elements", function() {
  var numbers = [90, 5, 11, 8, 6];
  var result = getSecondThird(numbers);
  expect(result).toEqual([6, 8]);
  expect(numbers).toEqual(numbers);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
