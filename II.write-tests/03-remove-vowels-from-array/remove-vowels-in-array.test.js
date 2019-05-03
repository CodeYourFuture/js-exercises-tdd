const removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", () => {
  // Arrange
  const names = ["Irina", "Etza", "Daniel"];
  expect(removeVowelsForWords(names)).toEqual(["rn", "tz", "dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
