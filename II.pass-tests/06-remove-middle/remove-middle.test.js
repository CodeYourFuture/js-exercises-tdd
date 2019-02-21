var removeMiddle = require("./remove-middle");

test("Remove middle", function() {
  var words = ["mouse", "giraffe", "queen", "window", "bottle"];

  var expectedWords = ["mouse", "giraffe", "window", "bottle"];
  var expectedOutput = ["queen"];

  var output = removeMiddle(words);
  expect(words).toEqual(expectedWords);
  expect(output).toEqual(expectedOutput);
});
