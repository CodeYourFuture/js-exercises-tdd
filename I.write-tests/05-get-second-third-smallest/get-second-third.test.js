const secondThird = require("./get-second-third");
test("Get the second and third smallest number of the list", function () {

    //Arrange
    const value = [90, 5, 11, 8, 6];
    const expection = [6, 8];
    //Act
    const result = secondThird(value);
    //Assert
    expect(result).toEqual(expection);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed


// const numberGreaterThan10 = require('./numbersGreaterThan10');

// test('Get numbers greater than 10', function () {
//     //Arange
//     const value = [4, 10, 32, 9, 21];
//     const expection = [32, 21];
//     //Act
//     const result = numberGreaterThan10(value);
//     //Assert
//     expect(result).toEqual(expection);

// });