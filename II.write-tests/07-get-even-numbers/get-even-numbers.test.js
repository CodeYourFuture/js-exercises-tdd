const getEven = require("./get-even-numbers");
test("Even numbers", function() {
  var array = [22, 13, 73, 82, 4];
  var input = getEven(array);
  var result = [22, 82, 4];
  expect(input).toEqual(result);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
