var getEvenNumbers = require("./get-even-numbers");

test("get even numbers in an array", function() {
  var array1 = [22, 13, 73, 82, 4];
  var result = getEvenNumbers(array1);
  expect(result).toEqual([22, 82, 4]);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
