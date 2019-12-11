const getLargestNumber = require("./largest-number.js");
test("get the most large number - large numb. in middle", function() {
  var array = [3, 21, 88, 4, 36];
  var input = getLargestNumber(array);
  var result = 88;
  expect(input).toBe(result); // large numb. in middle
  expect(array).toEqual([3, 21, 88, 4, 36]);
});
test("get the most large number - large numb. in the begin", function() {
  expect(getLargestNumber([333, 21, 88, 4, 36])).toBe(333); // large numb. in the begin
});
test("get the most large number - large numb. at the end", function() {
  expect(getLargestNumber([3, 21, 88, 4, 366])).toBe(366); // large numb. at the end
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
