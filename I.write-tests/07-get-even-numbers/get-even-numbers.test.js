const getEvenNumbers = require("./get-even-numbers")

test('print even numbers', function () {
    // Arrange
    const numbers = [22, 13, 73, 82, 4];
    const expection = [22, 82, 4];
    // Act
    const result = getEvenNumbers(numbers);
    // Assert
    expect(result).toEqual(expection)
})


// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];