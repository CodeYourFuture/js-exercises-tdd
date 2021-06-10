const { convertToOldRoman, convertToNewRoman } = require('./roman-converter')

describe('The `convertToOldRoman` function', function () {
  test('it converts the number 1 into a Roman numeral', function () {
    expect(convertToOldRoman(1)).toEqual('I')
  })

  test("it converts the number 3 into it's correct Roman numeral equivalent", function () {
    expect(convertToOldRoman(3)).toEqual('III')
  })

  test("it converts the number 7 into it's correct Roman numeral equivalent", function () {
    expect(convertToOldRoman(7)).toEqual('VII')
  })

  test("it converts the number 15 into it's correct Roman numeral equivalent", function () {
    expect(convertToOldRoman(15)).toEqual('XV')
  })

  test("it converts the number 18 into it's correct Roman numeral equivalent", function () {
    expect(convertToOldRoman(18)).toEqual('XVIII')
  })

  test("it converts the number 22 into it's correct Roman numeral equivalent", function () {
    expect(convertToOldRoman(22)).toEqual('XXII')
  })

  test('it returns an empty string if 0 is passed in as an argument', function () {
    expect(convertToOldRoman(0)).toBe('')
  })
})

describe('The `convertToNewRoman` function', function () {
  test("it converts the number 4 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(4)).toEqual('IV')
  })

  test("it converts the number 9 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(9)).toEqual('IX')
  })

  test("it converts the number 14 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(14)).toEqual('XIV')
  })

  test("it converts the number 44 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(44)).toEqual('XLIV')
  })

  test("it converts the number 99 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(99)).toEqual('XCIX')
  })

  test("it converts the number 400 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(400)).toEqual('CD')
  })

  test("it converts the number 944 into it's correct Roman numeral equivalent", function () {
    expect(convertToNewRoman(944)).toEqual('CMXLIV')
  })

  test('it throws an error if argument passed is not a number', function () {
    expect(() => convertToNewRoman('String')).toThrow(
      Error('Please enter an Arabic number')
    )
  })
})
