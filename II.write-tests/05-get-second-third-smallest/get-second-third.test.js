// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
var getSecondThird = require("./get-second-third");

test("Get second third smallest", function() {
  var array = [90, 5, 11, 8, 6];
  var expected = [6, 8];

  var output = getSecondThird(array);
  expect(output).toEqual(expected);
});
