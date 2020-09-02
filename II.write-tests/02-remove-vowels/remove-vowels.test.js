const removeVowels = require("./remove-vowels.js")

test("remove vowels from word", function () {
  // Arrange
  const expected = "sml"
  // Act
  const result = removeVowels('samuel');
  // Assert
  expect(result).toEqual(expected)
});
