var secondThird = require("./get-second-third");

test("to get second and third", function() {
  var input = [90, 5, 11, 8, 6],
    output = [6, 8],
    result = secondThird(input);
  expect(result).toEqual(output);
});

test("check for original array has not changed", function() {
  let modify = [90, 5, 11, 8, 6],
    unmodify = [90, 5, 11, 8, 6];
  expect(modify).toEqual(unmodify);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
