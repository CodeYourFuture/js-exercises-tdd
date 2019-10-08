const getSecond = require("./get-second-third");
test("get second ", () => {
  const array = [90, 5, 11, 8, 6];
  expect(getSecond(array)).toEqual([6, 8]);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
