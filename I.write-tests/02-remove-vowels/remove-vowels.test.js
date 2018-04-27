var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  var result = removeVowels("samuel");
  // Act
  expect(result).toEqual("_a_ue_");
  // Assert
});
