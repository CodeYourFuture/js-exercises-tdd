const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  const word = "Ivina";
  const expected = "vn";

  // Act
  const result = removeVowels(word);

  // Assert
  expect(result).toEqual(expected);
});
