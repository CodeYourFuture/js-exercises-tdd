var removeVowels = require("./remove-vowels");

test('remove vowels from word', function () {

    // Arrange
    
    // Act
    var result = removeVowels("samuel");
    // Assert
    expect(result).toEqual("sml");
})