var removeVowels = require("./remove-vowels");

test("remove the vowels", function() {
  var testWord = "samuel";

  var result = removeVowels(testWord);

  expect(result).toEqual("sml");
});
