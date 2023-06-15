// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
const getEven = require("./get-even-numbers")

test("Get even numbers", function(){
    // Arrange
    const numbers = [22, 13, 73, 82, 4];
    // Act
    const result = getEven(numbers);
    // Assert
    const expected = [22, 82, 4];
    expect(result).toEqual(expected);
});