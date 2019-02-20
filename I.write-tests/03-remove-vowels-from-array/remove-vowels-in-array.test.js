const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  const people = ["Irina", "Etza", "Daniel"];
  const expection = ["rn", "tz", "dnl"];
  // Act
  const result = removeVowelsForWords(people);
  // Assert
  expect(result).toEqual(expection);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
