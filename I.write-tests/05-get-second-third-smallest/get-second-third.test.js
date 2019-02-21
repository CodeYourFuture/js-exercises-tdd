const getSecondThirdSmallest = require("./get-second-third")

test('print the second and third smallest numbers in a array', function () {
    // Arrange
    const numbers = [90, 5, 11, 8, 6];
    const expection = [6, 8];
    const TestingOriginalArrayNotChange = [90, 5, 11, 8, 6];
    // Act
    const result = getSecondThirdSmallest(numbers);
    // Assert
    expect(result).toEqual(expection)
    expect(TestingOriginalArrayNotChange).toEqual(numbers)
})

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed