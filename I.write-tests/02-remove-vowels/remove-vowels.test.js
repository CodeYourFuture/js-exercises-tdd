const {removeVowels} = require('./remove-vowels');
test('remove vowels from word', function () {

    // Arrange

    // Act
    var result = removeVowels("samuel");
    // Assert
    expect(result).toBe("_a_ue_");
})