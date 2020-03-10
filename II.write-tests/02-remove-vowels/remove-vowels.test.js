var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
    // Arrange
    var names = ['samuel'];
    var expected = ['sml'];
    // Act
    var result = removeVowels('samuel');
    // Assert
    expect(result).toEqual(expected);
});