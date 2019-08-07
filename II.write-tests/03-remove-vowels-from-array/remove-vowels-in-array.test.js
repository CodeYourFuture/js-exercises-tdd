var removeVowelsForWords = require("./remove-vowels-in-array");

test('remove vowels, add "_" for words', function() {
  var words = ["Irina", "Etza", "Daniel"];
  var result = removeVowelsForWords(words);

  expect(result).toEqual(["__i_a", "___a", "_a_ie_"]);
});
