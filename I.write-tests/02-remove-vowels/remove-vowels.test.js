test("remove vowels from word", function() {
  // Arrange
  // Given
  var removeVowels = require("./remove-vowels.js");
  var word = "Seraphine";

  // Act
  //When
  var result = removeVowels(word);

  // Assert
  //Then
  expect(result).toEqual("_e_a__i_e");
});
