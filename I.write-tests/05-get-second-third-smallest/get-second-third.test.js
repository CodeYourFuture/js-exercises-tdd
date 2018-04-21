// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var sut = require("./get-second-third");
test("return second and third largest", function() {
  var input = [90, 5, 11, 8, 6];
  var result = sut(input);
  expect(result).toEqual([6, 8]);
});

test("do not change the orginal array", function() {
  var input = [90, 5, 11, 8, 6];
  var result = sut(input);
  expect(result).toEqual(orginalInput);
});
