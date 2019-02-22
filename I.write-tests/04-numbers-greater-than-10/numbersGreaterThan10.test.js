var largerThanTen = require('./numbersGreaterThan10')

test('Get numbers greater than 10', function () {
  // Arrange
  const numbers = [4, 10, 32, 9, 21]
  const expectations = [32, 21]
  // Act
  const result = largerThanTen(numbers)
  // Assert
  expect(result).toEqual(expectations)
})

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
