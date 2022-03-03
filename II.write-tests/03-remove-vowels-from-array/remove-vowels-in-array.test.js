var removeVowels = require("./remove-vowels-in-array")
test("remove vowels from all words in array", function() {
  // Arrange
  var arr = ["Irina", "Etza", "Daniel"];
  var input = removeVowels(arr)
  var output = ["rn", "tz", "Dnl"]
  // Act
  // Assert
  expect(input).toEqual(output)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
