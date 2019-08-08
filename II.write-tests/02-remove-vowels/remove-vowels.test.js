var removedVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var result = "h_ll_";

  var output = removedVowels("hello");

  expect(output).toEqual(result);
});
