const removeVowels = require('./remove-vowels')
test('remove vowels from word', function () {

    // Arrange
 const expection = 'sml'
    // Act
    const result = removeVowels('samuel');
    // Assert
    expect(result).toEqual(expection) 
})