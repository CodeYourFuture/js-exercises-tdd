var removeVowelsInArray = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  // Act
  // Assert

  var input = ["Irina", "Etza", "Daniel"];
  var result = removeVowelsInArray(input);
  var expectedOutput = ["Ir_n_", "Etz_", "D_n__l"];

  expect(result).toEqual(expectedOutput);
});
