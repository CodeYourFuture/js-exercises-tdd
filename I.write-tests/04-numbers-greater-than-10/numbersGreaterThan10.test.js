const numberGreaterThan10 = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function () {
    //Arange
    const value = [4, 10, 32, 9, 21];
    const expection = [32, 21];
    //Act
    const result = numberGreaterThan10(value);
    //Assert
    expect(result).toEqual(expection);

});


// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];


// const removeVowelsForWords = require("./remove-vowels-in-array");

// test('remove vowels from all words in array', function () {
//     // Arrange
//     const value = ["Irina", "Etza", "Daniel"];
//     const expection = ["rn", "tz", "dnl"];
//     // Act
//     const result = removeVowelsForWords(value);
//     // Assert
//     expect(result).toEqual(expection);
// })