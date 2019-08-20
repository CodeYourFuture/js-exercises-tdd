var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  var numArr = [4, 10, 32, 9, 21];
  var result = largerThanTen(numArr);
  expect(result).toEqual([32, 21]);
});
// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
