// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
var getSecond = require("./get-second-third");

test("getSecond", function() {
  var input = [90, 5, 11, 8, 6];
  var unModifiedInput = [90, 5, 11, 8, 6];

  var expectedOutput = [6, 8];

  var result = getSecond(input);

  expect(result).toEqual(expectedOutput);
  expect(unModifiedInput).toEqual(input);
});
