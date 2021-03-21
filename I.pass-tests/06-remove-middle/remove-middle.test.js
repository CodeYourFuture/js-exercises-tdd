const removeMiddle = require("./remove-middle");

describe("Remove middle function", function () {
  test("Returns middle element if array is odd length", function() {
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];

    const output = removeMiddle(words);
    const expectedOutput = ["queen"];

    expect(words).toEqual(expectedWords);
    expect(output).toEqual(expectedOutput);
  });

  test("Returns undefined if array is even length", function() {
    const words = ['mouse', 'giraffe', 'queen', 'window'];

    expect(removeMiddle(words)).toBe(undefined);
  });
});
