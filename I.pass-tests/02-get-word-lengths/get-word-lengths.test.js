const wordLengths = require("./get-word-lengths");

describe("wordLengths function", function() {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const jumbledArray = ["hammer", [0], 12, "donkey"];

  test("Returns word lengths", function() {
    const expected = [3, 6, 10, 5];

    const output = wordLengths(words);
    expect(output).toEqual(expected);
  });

  test("Returns null for elements that are not strings", function() {
    expect(wordLengths(jumbledArray)).toContain(null);
  });
});
