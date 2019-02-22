var orderList = require("./get-second-third");
test("order a list ascending in bigger than x", function() {
  const input = [90, 5, 11, 8, 6];
  const expected = [6, 8];
  const result = orderList(input);

  expect(result).toEqual(expected);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed.
//test a few diff arrays, and look for pattern.
