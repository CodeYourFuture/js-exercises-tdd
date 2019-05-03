let getEven = require("./get-even-numbers");
test("Get even number ", () => {
  let arr = [22, 13, 73, 82, 4];
  expect(getEven(arr)).toEqual([22, 82, 4]);
}); // example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
