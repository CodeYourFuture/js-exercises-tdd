var resultVowels = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  // Arrange
  var input = ["Irina", "Etza", "Daniel"];
  // Actvar
  result = resultVowels(input);
  // Assert
  expect(result).toEqual(["rn", "tz", "dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
