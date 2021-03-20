const addOne = require("./add-one.js");

describe("numbers function", function() {
  const myArray = [31, 57, 12, 5];
  const jumbledArray = ['a', 3, 99, {}]

  test("Adds 1 to each number in an array", function() {
    const expected = [32, 58, 13, 6];
    const output = addOne(myArray);

    expect(output).toEqual(expected);
  });

  test("It does not mutate the original array", function() {
    const unchanged = [31, 57, 12, 5];
    expect(myArray).toEqual(unchanged);
  });

  test('It returns null when an element is not a number', function() {
    expect(addOne(jumbledArray)).toContain(null);
  });
});
