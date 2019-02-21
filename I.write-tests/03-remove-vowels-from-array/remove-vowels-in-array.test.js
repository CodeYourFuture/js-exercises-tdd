const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  const people = ["Irina", "Etza", "Daniel"];
  const expectation = ["rn", "tz", "dnl"];
  // Act
  const result = removeVowelsForWords(people);
  // Assert
  expect(result).toEqual(expectation);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
