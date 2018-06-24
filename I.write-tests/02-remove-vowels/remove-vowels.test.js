test("remove vowels from word", function() {
  // Arrange
  var removeVowels = require("./remove-vowels");

  // Act
  var result = removeVowels("samuel");
  // Assert
  expect(result).toEqual("s_m__l");
});
