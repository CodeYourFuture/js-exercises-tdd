const getEven = require('./get-even-numbers')

describe('Get even numbers function', function() {
  test('It returns even numbers in an array', function() {
    const arr = [22, 13, 73, 82, 4]
    const output = [22, 82, 4]

    expect(getEven(arr)).toEqual(output)
  })

  test('It ignores non-integers', function() {
    const mixedArr = [{}, 'a', false, 4]

    expect(getEven(mixedArr)).toEqual([4])
  })

  test('It returns negative numbers', function() {
    const arr = [-100, -50, -25, -10]
    const output = [-100, -50, -10]

    expect(getEven(arr)).toEqual(output)
  })

  test('It returns null if argument passed in is not a number', function() {
    const arg = 'Hello, world!'

    expect(getEven(arg)).toBe(null)
  })
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
