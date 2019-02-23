const removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  const word = "SamueL";
  const expectation = "sml";
  // Act
  const result = removeVowels(word);
  // Assert
  expect(result).toEqual(expectation);
});
