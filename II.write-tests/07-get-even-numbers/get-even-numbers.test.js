// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
var getEvenNumbers = require("./get-even-numbers");

test("Get even numbers", function() {
  var numbers = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];

  var output = getEvenNumbers(numbers);
  expect(output).toEqual(expected);
});
