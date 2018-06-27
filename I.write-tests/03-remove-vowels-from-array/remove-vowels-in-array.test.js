test("remove vowels from all words in array", function() {
  // Arrange

  // Given
  var removeVowelsForWords = require("./remove-vowels-in-array");
  var word = ["Seraphine", "Edem", "Makamba"];

  // Act
  //When
  var result = removeVowelsForWords(word);

  // Assert
  //Then
  expect(result).toEqual(["_e_a__i_e", "__e_", "_a_a__a"]);

  // Act

  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
