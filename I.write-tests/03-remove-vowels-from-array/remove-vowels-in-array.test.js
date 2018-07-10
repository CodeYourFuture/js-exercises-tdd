
var removeVowelsForWords= require('./remove-vowels-in-array');

test('remove vowels from all words in array', function () {
    // Arrange

    // Act
   var  words=["Irina", "Etza", "Daniel"];
    var result= removeVowelsForWords(words);
    // Assert
    expect(result).toEqual(["rn", "tz", "dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]