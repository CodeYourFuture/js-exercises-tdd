const getLargestNumber = require('./largest-number')
test('Get Largest Number', function () {
  // Arrage
  const numbers = [3, 21, 88, 4, 36]
  const expectations = 88
  const expectArr = [3, 21, 88, 4, 36]
  // Act
  result = getLargestNumber(numbers)
  // Assert
  expect(result).toEqual(expectations)
  expect(numbers).toEqual(expectArr)
})

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
