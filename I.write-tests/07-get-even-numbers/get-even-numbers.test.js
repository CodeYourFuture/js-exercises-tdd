// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
var getEvenNumbers = require("./get-even-numbers");
test("Get even numbers", function() {
  const numbers = [22, 13, 73, 82, 4];
  const expectation = [22, 82, 4];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual(expectation);
});
