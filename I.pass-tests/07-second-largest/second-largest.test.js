const secondLargest = require("./second-largest");

describe("Second largest function", function() {
  test("Returns the second largest in an array of numbers", function() {
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    const output = secondLargest(numbers);

    expect(output).toEqual(57);
  });

  test("It returns the second largest in an assorted array", function() {
    const assortedArray = [99, 50, {}, 'String', false, 32];

    expect(secondLargest(assortedArray)).toBe(50);
  });

  test("It returns null if argument is not an array", function() {
    const str = "String";

    expect(secondLargest(str)).toEqual(null);
  });

  test("It returns null if array length is 0", function() {
    const arr = [];

    expect(secondLargest(arr)).toEqual(null);
  });

  test("It returns null if the array contains a non-integer", function() {
    const arr = [true];

    expect(secondLargest(arr)).toEqual(null);
  });

  test("It returns a number if the array contains a single number", function() {
    const arr = [7];

    expect(secondLargest(arr)).toEqual(7);
  });
});
