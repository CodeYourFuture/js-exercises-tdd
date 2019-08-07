var getEven = require("./get-even-numbers");
test("get even numbers from an array", function() {
  var numbers = [22, 13, 73, 82, 4];
  var result = getEven(numbers);
  expect(result).toEqual([22, 82, 4]);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
