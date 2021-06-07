function add(stringNumbers) {
  const arrStrings = stringNumbers.match(/\d+|\-\d+/g)
  if (stringNumbers.trim() === '') return 0

  return arrStrings.reduce((acc, curr) => {
    if (Math.sign(+curr) === -1)
      throw new Error(`Negative numbers are not allowed: ${curr}`)
    if (+curr > 1000) curr = 0
    return acc + +curr
  }, 0)
}

module.exports = add
