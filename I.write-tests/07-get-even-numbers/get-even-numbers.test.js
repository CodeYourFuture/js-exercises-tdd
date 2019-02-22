const getEvenNumbers = require('./get-even-numbers')
test('Get Even Numbers', function () {
  // Arrange
  const myArr = [22, 13, 73, 82, 4]
  const expectation = [22, 82, 4]

  // Act
  const result = getEvenNumbers(myArr)
  // Assert
  expect(result).toEqual(expectation)
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
