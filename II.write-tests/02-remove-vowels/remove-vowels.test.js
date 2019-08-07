var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var input = removeVowels("samuel");
  var result = "_a_ue_";
  expect(result).toBe(input);
});

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var input = removeVowels("Morvarid");
  var result = "_o__a_i_";
  expect(result).toBe(input);
});
