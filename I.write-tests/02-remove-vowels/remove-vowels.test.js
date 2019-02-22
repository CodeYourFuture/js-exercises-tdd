const removeVowels = require('./remove-vowels')
test('remove vowels from word', function () {
  // Arrange
  const expectation = 'sml'
  // Act
  var result = removeVowels('samuel')
  // Assert
  expect(result).toEqual(expectation)
})
