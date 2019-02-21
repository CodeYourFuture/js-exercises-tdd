const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel", "Omar"];
  const expectation = ["rn", "tz", "dnl", "mr"];
  // Act
  var result = removeVowelsForWords(input);
  //Assert
  expect(result).toEqual(expectation);
});