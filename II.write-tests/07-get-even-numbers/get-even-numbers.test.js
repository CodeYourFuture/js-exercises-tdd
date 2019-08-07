let getEven = require("./get-even-numbers");

test("get even number", function() {
  let input = [22, 13, 73, 82, 4],
    output = [22, 82, 4],
    result = getEven(input);
  expect(result).toEqual(output);
});
test("check for original array has not changed", function() {
  let modify = [22, 13, 73, 82, 4],
    unmodify = [22, 13, 73, 82, 4];
  expect(modify).toEqual(unmodify);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
