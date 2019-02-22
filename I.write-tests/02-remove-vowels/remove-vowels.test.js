var removeVowels = require("./remove-vowels");
//function---file name to the test file.
// a test is basically replicating what it already is supposed to do , but with different input.
//determines how great a function is, how reliable it is with new input.

test("remove vowels from word", function() {
  const word = "samuel"; // Arrange.
  const expectation = "sml";

  const result = removeVowels(word); // Act

  expect(result).toBe(expectation); // Assert
});

test("remove vowels from word including y", function() {
  const word = "samuely"; // Arrange.
  const expectation = "smly";

  const result = removeVowels(word); // Act

  expect(result).toBe(expectation); // Assert
});
