test('remove vowels from word', function () {

    // Arrange
var word = 'samuel';
var removeVowels = require('./remove-vowels');
    // Act
var result = removeVowels(word);
    // Assert
    expect(result).toEqual('_a_ue_');
})