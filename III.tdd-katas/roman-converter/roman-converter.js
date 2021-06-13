const helper = require('./roman-converter-helper')

function convertToOldRoman(number) {
  const arabicToOldRomanMapper = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }

  return helper(number, arabicToOldRomanMapper)
}

function convertToNewRoman(number) {
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
    I: 1,
  }

  return helper(number, arabicToNewRomanMapper)
}

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
}
