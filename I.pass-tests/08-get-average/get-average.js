// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getAverage(arr) {
  if (!Array.isArray(arr)) return

  const numArr = arr.filter(element => typeof element === 'number')

  if (numArr.length === 0) return null

  return numArr.reduce((acc, curr) => acc + curr, 0) / numArr.length
}

module.exports = getAverage
