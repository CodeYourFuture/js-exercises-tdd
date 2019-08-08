// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

var getEvenNumbers = require("./get-even-numbers");

test("get all the even numbers", function() {
  var input = [22, 13, 73, 82, 4];
  var result = getEvenNumbers(input);
  var expected = [22, 82, 4];

  expect(result).toEqual(expected);
});
