test("remove vowels from word", function() {
  // Arrange
  var removeVowels = require("./remove-vowels");
  var word = "samuel";

  // Act
  var result = removeVowels(word);

  // Assert
  expect(result).toEqual("sml");
});
