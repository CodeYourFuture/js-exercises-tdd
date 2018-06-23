
var removeVowels = require("../02-remove-vowels/remove-vowels.js")

test('remove vowels from word', function () {

    // Arrange
    //given
    var word = "samuel";
    // Act

    var result = removeVowels(word)



    // Assert

    expect(result).toEqual("_a_ue_")
})