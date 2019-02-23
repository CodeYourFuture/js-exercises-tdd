const vowelsRemover = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  expectation = ["rn", "tz", "dnl"];

  // Act
  const result = vowelsRemover(input);

  // Assert
  expect(result).toEqual(expectation);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
