const removeVowels = require("./remove-vowels.js");

test('remove vowels from word', function () {

    // Arrange
    const value = "samuel";
    const expection = "sml";
    // Act
    const resultName = removeVowels(value);
    // Assert
    expect(resultName).toEqual(expection);
})

// const greetPeople = require("./greet-people");

// test('print list of names prefixed with Hello', function () {
//     // Arrange
//     const people = ['Irina', 'Ashleigh', 'Etza'];
//     const expection = "Hello Irina, Ashleigh, Etza";
//     // Act
//     const result = greetPeople(people);

//     // Assert
//     expect(result).toEqual(expection);
// })