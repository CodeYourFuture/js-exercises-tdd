const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  var names = ["Irina", "Etza", "Daniel"];
  var expected = ["rn", "tz", "dnl"];

  // Act
  const result = removeVowelsForWords(names);

  // Assert
  expect(result).toEqual(expected);
});
