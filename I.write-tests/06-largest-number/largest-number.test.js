const getLargestNumber = require("./largest-number")

test('print the largest number in a array', function () {
    // Arrange
    const numbers = [3, 21, 88, 4, 36];
    const expection = 88;
    const TestingOriginalArrayNotChange = [3, 21, 88, 4, 36];
    // Act
    const result = getLargestNumber(numbers);
    // Assert
    expect(result).toEqual(expection)
    expect(TestingOriginalArrayNotChange).toEqual(numbers)
})


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed