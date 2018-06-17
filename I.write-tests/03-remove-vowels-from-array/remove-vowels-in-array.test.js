test('remove vowels from all words in array', function () {
    // Arrange
    var removeVowelsForWords = require('./remove-vowels-in-array');
    var inputVowels = ['Irina', 'Etza', 'Daniel'];

    // Act
    var result = removeVowelsForWords(inputVowels);


    // Assert
    expect(result).toEqual(['__i_a', '___a', '_a_ie_']);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]