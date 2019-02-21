const removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  const word = "irina";
  const expectation = "rn";
  // Act
  const result = removeVowels(word);
  // Assert
  expect(result).toEqual(expectation);
});
