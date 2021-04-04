const getSecondAndThird = require('./get-second-third')

describe('Get Second and Third function', function() {
  const numberArray = [40, 1, 5, 200]

  test("It returns the second and third elements in an array", function() {
    const arr = ['snap', 'crackle', 'pop', 3]
    const output = ['crackle', 'pop']

    expect(getSecondAndThird(arr)).toEqual(output)
  })

  test('It does not mutate the original array', function() {
    const clonedNumberArray = [...numberArray]

    expect(numberArray.length === clonedNumberArray.length &&
    numberArray.every((value, index) => value === clonedNumberArray[index])).toBe(true)
  })

  test('It sorts numbers in ascending order', function() {
    const output = [5, 40]

    expect(getSecondAndThird(numberArray)).toEqual(output)
  })
})

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
