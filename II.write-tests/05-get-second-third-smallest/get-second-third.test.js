var getSecondThird = require("./get-second-third");
test("get second and third array", function() {
  var input = getSecondThird([90, 5, 11, 8, 6]);
  var result = [6, 8];
  expect(result).toEqual(input);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
