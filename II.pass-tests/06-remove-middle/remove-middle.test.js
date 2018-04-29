var removeMiddle = require("./remove-middle");

test("Remove middle from Odd number of array", function() {
  var words = ["mouse", "giraffe", "queen", "window", "bottle"];

  var expectedWords = ["mouse", "giraffe", "window", "bottle"];
  var expectedOutput = ["queen"];

  var output = removeMiddle(words);

  expect(output).toEqual(expectedOutput);
  expect(words).toEqual(expectedWords);
});

test("Remove middle from Even number of array", function() {
var words =["abdul", "akey","okbay","jo","awel","abdulkadir"];

var expectedWords =["abdul","akey","awel","abdulkadir"];
var expectedOutput = ["okbay", "jo"];

var output = removeMiddle(words);

expect(output).toEqual(expectedOutput);
expect(words).toEqual(expectedWords)
});