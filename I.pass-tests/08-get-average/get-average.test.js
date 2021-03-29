const average = require("./get-average");

describe("Get average function", function() {
  test("Average", function() {
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    const output = average(numbers);

    expect(output).toEqual(expected);
  });

  test("Returns number if array length is 1", function() {
    const numbers = [1];

    expect(average(numbers)).toEqual(1);
  });

  test("Returns null if array doesn't include numbers", function() {
    const array = [null, false, true, {}, 'a', []];

    expect(average(array)).toBe(null);
  });

  test("Returns undefined if argument passed in is not an array", function() {
    const argument = 'Hello, world!';

    expect(average(argument)).toBe(undefined);
  });
});
