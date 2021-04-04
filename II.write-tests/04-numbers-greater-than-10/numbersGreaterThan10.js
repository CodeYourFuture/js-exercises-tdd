function numbersGreaterThan10(array) {
  return array.filter(number => {
    if (typeof number !== 'number') return
    return number > 10
  })
}

module.exports = numbersGreaterThan10
