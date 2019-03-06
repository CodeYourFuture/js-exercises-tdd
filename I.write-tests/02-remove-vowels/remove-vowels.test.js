const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  var wordToBeEdited = "samuel";
  var expectation = "s_m__l";

  // Act

  const result = removeVowels(wordToBeEdited);

  // Assert
  expect(result).toEqual(expectation);
});
