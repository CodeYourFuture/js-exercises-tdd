const removeVowels = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  var myArray = ["Irina", "Etza", "Daniel"];
  var expectation = ["_r_n_", "_tz_", "d_n__l"];

  // Act
  const result = removeVowels(myArray);

  // Assert
  expect(result).toEqual(expectation);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
