var greetPeople = require("./remove-vowels");

test('remove vowels from word', function () {

    // Arrange
    var samuel = "samuel";
    // Act
    var result = removeVowels(samuel);
    // Assert
    expect(result).toEqual("_a_ue_");
})