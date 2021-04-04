function getLargestNumber(array) {
  let largestNumber

  if (array.length === 1 && typeof array[0] === 'number') largestNumber = array[0]

  for (let i = 0; i < array.length - 1; i++) {
    if (typeof array[i] !== 'number') continue
    if (array[i] < array[i + 1]) largestNumber = array[i + 1]
    if (array[i] > array[i + 1]) largestNumber = array[i]
  }

  return largestNumber
}

module.exports = getLargestNumber;
