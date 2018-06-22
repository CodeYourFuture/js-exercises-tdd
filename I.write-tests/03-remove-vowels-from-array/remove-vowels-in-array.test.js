test('remove vowels from all words in array', function () {
    // Arrange
var removeVowels = require('./remove-vowels-in-array.js');
    // Act
    var words = ["Irina", "Etza", "Daniel"];
var result = removeVowels(words);
    // Assert
    expect(result).toEqual( ["__i_a", "___a", "_a_ie_"]);
    
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["__i_a", "___a", "_a_ie_"]
    