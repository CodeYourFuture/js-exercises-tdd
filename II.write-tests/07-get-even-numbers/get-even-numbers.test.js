var getEven = require("./get-even-numbers");

test("get even numbers % 2", function() {
  var input = getEven([22, 13, 73, 82, 4]);
  var result = [22, 82, 4];
  expect(result).toEqual(input);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
