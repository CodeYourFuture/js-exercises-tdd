var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  var result = removeVowels("samuel");
  expect(result).toBe("s_m__l");
  // Arrange
  // Act
  // Assert
});
