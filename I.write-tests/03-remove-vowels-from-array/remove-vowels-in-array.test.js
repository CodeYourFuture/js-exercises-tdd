//var removeVowels = require('../02-remove-vowels/remove-vowels');
const removeVowelsForWords = require("./remove-vowels-in-array");

test('remove vowels from all words in array', function () {
    // Arrange
    const value = ["Irina", "Etza", "Daniel"];
    const expection = ["rn", "tz", "dnl"];
    // Act
    const result = removeVowelsForWords(value);
    // Assert
    expect(result).toEqual(expection);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]

// const removeVowels = require("./remove-vowels.js");

// test('remove vowels from word', function () {

//     // Arrange
//     const value = "samuel";
//     const expection = "sml";
//     // Act
//     const resultName = removeVowels(value);
//     // Assert
//     expect(resultName).toEqual(expection);
// })