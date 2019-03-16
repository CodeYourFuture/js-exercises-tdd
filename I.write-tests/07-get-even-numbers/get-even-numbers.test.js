const getEven = require("./get-even-numbers");

test("Get even number", function () {
    //Arrange
    const value = [22, 13, 73, 82, 4];
    const expection = [22, 82, 4];
    //Act
    const result = getEven(value);
    //Assert
    expect(result).toEqual(expection);
});


// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];


// const getLargestNumber = require("./largest-number");

// test("Get the largest number", function () {
//     //Arrange
//     const value = [3, 21, 88, 4, 36];
//     const expection = 88;
//     //Act
//     const result = getLargestNumber(value);
//     //Assert
//     expect(result).toEqual(expection);
// });