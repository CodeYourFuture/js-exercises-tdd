test('remove vowels from word', function () {

    // Arrange
    var removeVowels = require('./remove-vowels');
   


    // Act
    var result = removeVowels('samuel');

    // Assert
    expect(result).toBe('_a_ue_');
})