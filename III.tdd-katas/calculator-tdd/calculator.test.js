var calculateIt = require("./calculator");

test("add all numbers from a string", function() {
  var numString = "//;6,n1;2";
  var result = calculateIt(numString);
  expect(result).toBe(9);
});
