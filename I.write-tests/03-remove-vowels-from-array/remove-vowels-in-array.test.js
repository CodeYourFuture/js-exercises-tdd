// use strict
const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  const words = ["Irina", "Etza", "Daniel"];
  const expectation = ["rn", "tz", "dnl"];
  // Act
  const result = removeVowelsForWords(words);
  // Assert
  expect(result).toEqual(expectation);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
