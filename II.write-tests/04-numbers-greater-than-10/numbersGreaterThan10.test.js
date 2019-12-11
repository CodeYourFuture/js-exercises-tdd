var largerThanTen = require("./numbersGreaterThan10.js");

test("Get numbers greater than 10", function() {
  var arr = [4, 10, 32, 9, 21];
  var input = largerThanTen(arr);
  expect(input).toEqual([32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
test("Get numbers greater than 10", function() {
  var arr = [3, 5, 78, 5, 43, 10, 45, 3, 567];
  var input = largerThanTen(arr);
  expect(input).toEqual([78, 43, 45, 567]);
});
