var removeVowels = require("./remove-vowels")
test("remove vowels from word", function() {
  // Arrange
  var input = removeVowels("samuel")
  // Act
  var output = "_a_ue_";
  // Assert
  expect(input).toEqual(output)
});
