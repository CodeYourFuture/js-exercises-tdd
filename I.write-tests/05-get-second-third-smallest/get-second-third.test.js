const getSecondThird = require('./get-second-third')
test('sort array and get second and third Element', function () {
  // Arrange
  const myArray = [90, 5, 11, 8, 6]
  const expectations = [6, 8]
  const expectArray = [90, 5, 11, 8, 6]
  // Act
  const result = getSecondThird(myArray)

  // Assert
  expect(result).toEqual(expectations)
  expect(myArray).toEqual(expectArray)
})

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
