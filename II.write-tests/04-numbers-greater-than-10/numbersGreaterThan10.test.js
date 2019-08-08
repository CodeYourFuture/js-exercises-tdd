var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  var input = [4, 10, 32, 9, 21];
  var result = largerThanTen(input);
  var expectedOutput = [32, 21];

  expect(result).toEqual(expectedOutput);
});
