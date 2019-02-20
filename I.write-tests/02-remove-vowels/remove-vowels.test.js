const rmoveVowel = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  const name = "samuel";
  const expection = "sml";
  // Act
  const result = rmoveVowel(name);
  // Assert
  expect(result).toEqual(expection);
});
