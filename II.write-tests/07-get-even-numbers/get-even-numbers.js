function getEven(numbers) {
  if (!Array.isArray(numbers)) return null

  return numbers.filter(function(number) {
    if (typeof number !== 'number') return
    return number % 2 === 0
  })
}

module.exports = getEven;
