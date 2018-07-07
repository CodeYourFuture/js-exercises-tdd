test('remove vowels from all words in array', function () {
    // Arrange
var words =  ["Irina", "Etza", "Daniel"];
var removeVowelsForWords = require('./remove-vowels-in-array');
    // Act
var result = removeVowelsForWords(words);
    // Assert
    expect(result).toEqual(["__i_a", "___a", "_a_ie_"]);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]