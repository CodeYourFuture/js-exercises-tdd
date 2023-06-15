import removeVowels from "./remove-vowels";
test("remove vowels from word", function() {
  // Arrange
  var result = removeVowels("anu");
  // Act
  var expected = "_n_";
  // Assert
  expect(result).toBe(expected);
});
