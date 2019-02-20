var removeVowelsForWords = require('./remove-vowels-in-array');

test('remove vowels from all words in array', function () {
    // Arrange
    const expected = ["rn", "tz", "dnl"]
    // Act

    var words = ["Irina", "Etza", "Daniel", "clement"];
    var result = removeVowelsForWords(words);
    // Assert

expect(result).toEqual(expected);
});


// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]