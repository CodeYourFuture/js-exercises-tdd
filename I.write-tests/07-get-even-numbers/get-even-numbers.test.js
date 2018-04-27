var getEvenNumbers = require("./get-even-numbers");
test("get just even numbers on your array", function() {
  var input = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];
  var result = getEvenNumbers(input);
  expect(result).toEqual(expected);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
