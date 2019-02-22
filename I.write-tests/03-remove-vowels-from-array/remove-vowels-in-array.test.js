const removeVowelsForWords = require('./remove-vowels-in-array')
test('remove vowels from all words in array', function () {
    // Arrange
    const result = removeVowelsForWords(["Irina", "Etza", "Daniel"])
    // Act
    const expection = ["rn", "tz", "dnl"]
    // Assert
    expect(result).toEqual(expection)
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]