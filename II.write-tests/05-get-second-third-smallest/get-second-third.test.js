var getSecondThird = require("./get-second-third");

test("get the second and third number in an array", function() {
  var array1 = [90, 5, 11, 8, 6];
  var result = getSecondThird(array1);
  expect(result).toEqual([6, 8]);
  expect(array1).toEqual([90, 5, 11, 8, 6]);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
