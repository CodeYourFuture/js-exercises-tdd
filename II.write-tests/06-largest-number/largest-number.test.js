const largestNumber = require('./largest-number')

describe('Largest number function', function() {
  test('It rejects non-integers', function() {
    const arr = ['a', true, {}, 1, 2, 3]

    expect(largestNumber(arr)).toEqual(3)
  })

  test('It returns the largest number in an array', function() {
    const numberArray = [40, 1, 5, 200]

    expect(largestNumber(numberArray)).toEqual(200)
  })

  test('It returns number if that is the only element in the array', function() {
    const arr = [7]

    expect(largestNumber(arr)).toEqual(7)
  })
})

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
