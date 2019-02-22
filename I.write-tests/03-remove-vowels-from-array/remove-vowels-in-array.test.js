var removeVowels = require("./remove-vowels-in-array.js");

test("remove vowels from all words in array", function() {
  const input = ["Irina", "Etza", "Daniel"]; // Arrange
  const expected = ["rn", "tz", "Dnl"];

  const result = removeVowels(input);
  // Actual result of the the function

  expect(result).toEqual(expected); // Assert does expected equal actul. i am expecting what the function carrys out in line 7, to equal what i was expecting in line 5.
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
