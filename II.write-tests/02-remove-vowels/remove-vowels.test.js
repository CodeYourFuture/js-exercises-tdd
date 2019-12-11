var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var name = "samuel";
  var result = removeVowels(name);
  expect(result).toEqual("sml");
});
