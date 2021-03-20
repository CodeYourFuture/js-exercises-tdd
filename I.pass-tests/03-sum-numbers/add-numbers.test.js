const addAllnumbers = require("./add-numbers");

describe("Add numbers function", function() {
  const numbers = [9, 23, 10, 3, 8];
  const jumbledArray = [4, 35, 67, 'happy', {}, false];

  test("Returns sum of all numbers", function() {
    const expected = 53;

    const output = addAllnumbers(numbers);

    expect(output).toEqual(expected);
  });

  test("Returns sum and skips elements that are not numbers", function() {
    expect(addAllnumbers(jumbledArray)).toEqual(106);
  });
});
