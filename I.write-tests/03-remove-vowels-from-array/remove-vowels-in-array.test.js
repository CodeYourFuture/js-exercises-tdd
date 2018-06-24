test('remove vowels from all words in array', function () {
    // Arrange
    var removeVowelsForWords = require("./remove-vowels-in-array");
    
    // Act
    var result = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
    // Assert
    expect(result).toEqual(["rn", "tz", "dnl"]);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]