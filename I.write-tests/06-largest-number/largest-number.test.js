const getLargestNumber = require("./largest-number");

test("Get the largest number", function () {
    //Arrange
    const value = [3, 21, 88, 4, 36];
    const expection = 88;
    //Act
    const result = getLargestNumber(value);
    //Assert
    expect(result).toEqual(expection);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed




// const secondThird = require("./get-second-third");
// test("Get the second and third smallest number of the list", function () {

//     //Arrange
//     const value = [90, 5, 11, 8, 6];
//     const expection = [6, 8];
//     //Act
//     const result = secondThird(value);
//     //Assert
//     expect(result).toEqual(expection);
// });