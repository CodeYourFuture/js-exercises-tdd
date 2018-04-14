var removeVowelsInArray = require("./remove-vowels-in-array");

test('remove vowels from all words in array', function () {
    // Arrange
    var input = ["Irina", "Etza", "Daniel"];
    // Act
    var result = removeVowelsInArray(input);
	// Assert
	expect(result).toEqual(["rn", "tz", "dnl"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]