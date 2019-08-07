let removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var result = removeVowels("samuel");

  expect(result).toBe("_a_ue_");
  // Arrange
  // Act
  // Assert
});
test("remove vowels from word without dash space", function() {
  var result = removeVowels("hello");

  expect(result).toBe("_e__o");
});
