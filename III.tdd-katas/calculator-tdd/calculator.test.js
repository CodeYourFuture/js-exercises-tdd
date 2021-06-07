const add = require('./calculator')

describe('add method', function () {
  test('It returns 0 if string is empty', function () {
    const emptyStr = ''

    expect(add(emptyStr)).toEqual(0)
  })

  test('It returns a number if only argument', function () {
    expect(add('1')).toEqual(1)
  })

  test('It returns the sum of string numbers', function () {
    expect(add('1, 2')).toEqual(3)
  })

  test('It can handle multiple arguments', function () {
    expect(add('1, 2, 3, 4, 5, 6, 7, 8, 9, 10')).toEqual(55)
  })

  test('It can handle new lines', function () {
    expect(add('1\n2,3')).toEqual(6)
  })

  test('It ignores whitespace if it is not followed by a string number', function () {
    expect(add('1,\n')).toEqual(1)
  })

  test('It supports different delimiters', function () {
    expect(add('//;\n1;2')).toEqual(3)
  })

  test('It throws an exception if string number is negative', function () {
    expect(() => add('1,4,-1')).toThrow(Error)
  })

  test('It ignores numbers greater than 1000', function () {
    expect(add('2, 1001')).toEqual(2)
  })
})
