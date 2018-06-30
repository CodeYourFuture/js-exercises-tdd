test("remove vowels from all words in array", function() {
  // Arrange
  var removeVowelsForWords = require("./remove-vowels-in-array");
  var words = ["Irina", "Etza", "Daniel"];

  // Act
  var result = removeVowelsForWords(words);

  // Assert
  expect(result).toEqual(["rn", "tz", "dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
