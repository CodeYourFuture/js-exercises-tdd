const removeVowelsForWords = require("./remove-vowels-in-array")

test("remove vowels from all words in array", function () {
  // Arrange
  const expected = ["rn", "tz", "Dnl"]
  const input = ["Irina", "Etza", "Daniel"]
  // Act
  const result = removeVowelsForWords(input)
  // Assert
  expect(result).toEqual(expected)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
