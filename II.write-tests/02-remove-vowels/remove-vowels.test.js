var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  var result = removeVowels("samuel");
  expect(result).toBe("_a_ue_");
});
