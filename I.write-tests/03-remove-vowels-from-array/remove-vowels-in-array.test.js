
var remove = require("../03-remove-vowels-from-array/remove-vowels-in-array")
test('remove vowels from all words in array', function () {
    // Arrange
    var input = ["Irina", "Etza", "Daniel"];

    // Act
    var result = remove(input)
    // Assert
    expect(result).toEqual(["__i_a", "___a", "_a_ie_"])

})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]