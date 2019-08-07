var getSecondThird = require("./get-second-third");

test("Get 2nd & 3rd smallest number", function() {
  const originalNumbers = [90, 5, 11, 8, 6];
  var numbers = [90, 5, 11, 8, 6];
  var output = getSecondThird(numbers);

  expect(output).toEqual([6, 8]);
  expect(numbers).toEqual(originalNumbers);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
