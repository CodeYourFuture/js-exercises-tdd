var removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var input = removeVowelsForWords(["irina", "etza", "daniel"]);
  var result = ["i_i_a", "e__a", "_a_ie_"];
  expect(result).toEqual(input);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
