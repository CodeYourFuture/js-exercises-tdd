const getSecondThird = require("./get-second-third");

test("Get only array index 1 - array index 2", function() {
  var arr = [90, 5, 11, 8, 6];
  var input = getSecondThird(arr);
  var result = [6, 8];
  expect(input).toEqual(result);
  expect(arr).toEqual([90, 5, 11, 8, 6]); // check if original array change or not
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
