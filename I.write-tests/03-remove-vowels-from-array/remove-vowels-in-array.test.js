const removeVowelsForWords = require('./remove-vowels-in-array');
test('remove vowels from all words in array', function () {
    // Arrange
    const input = ["Irina", "Etza", "Daniel"];
    // Act
    const result = removeVowelsForWords(input);
    // Assert
    expect(result).toEqual(["rn", "tz", "dnl"]);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]