var sub = require("./get-second-third");

test("Get numbers sort", function() {
  var input = [90, 5, 11, 8, 6];
  var result = sub(input);

  expect(result).toEqual([6, 8]);
}); // example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
