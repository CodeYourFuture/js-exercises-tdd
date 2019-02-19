// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
var getSecondThird = require("./get-second-third");
test("Get second third number", function() {
  const numbers = [90, 5, 11, 8, 6];
  const expectation = [6, 8];
  const result = getSecondThird(numbers);
  expect(result).toEqual(expectation);
});
