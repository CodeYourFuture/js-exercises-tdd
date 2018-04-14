var resultVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  var vowels = "samuel";
  // Actvar
  result = resultVowels(vowels);
  // Assert
  expect(result).toEqual("sml");
});
