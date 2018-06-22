test('remove vowels from word', function () {
    var removeVowels = require('./remove-vowels');
    var characters = 'samuel';// Arrange
 var result = removeVowels(characters);// Act

 expect(result).toEqual('_a_ue_');   // Assert
})