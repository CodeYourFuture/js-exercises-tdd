function convertToOldRoman(number) {
  let str = ''

  const arabicToOldRomanMapper = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }

  if (typeof number !== 'number') throw Error('Please enter an Arabic number')

  for (prop in arabicToOldRomanMapper) {
    while (number >= arabicToOldRomanMapper[prop]) {
      str += prop
      number -= arabicToOldRomanMapper[prop]
    }
  }

  return str
}

function convertToNewRoman(number) {
  let str = ''

  const arabicToNewRomanMapper = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  if (typeof number !== 'number') throw Error('Please enter an Arabic number')

  for (prop in arabicToNewRomanMapper) {
    while (number >= arabicToNewRomanMapper[prop]) {
      str += prop
      number -= arabicToNewRomanMapper[prop]
    }
  }

  return str
}

module.exports = {
  convertToOldRoman,
  convertToNewRoman
}
