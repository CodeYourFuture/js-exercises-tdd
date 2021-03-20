const findTheNeedle = require("./find-needle");

describe("Find needle function", function() {
  test("Returns index of word", function() {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = findTheNeedle(words, "needle");
    expect(output).toEqual(expected);
  });

  test("Find the plant", function() {
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    const output = findTheNeedle(words, "plant");
    expect(output).toEqual(expected);
  });

  test("Returns message if target word not found", function() {
    const words = ["fly", "trap", "monkey", "screw", "hose"];
    const output = findTheNeedle(words, "glove");

    expect(output).toBe("Target word not found");
  });

  test("Returns all indices of target word in an array", function() {
    const words = ["plant", "shelf", "arrow", "bird", "plant", "chicken", "plant"];
    const output = findTheNeedle(words, "plant");

    expect(output).toEqual([0, 4, 6]);
  });
})
