function secondLargest (numbers) {
  numbers.sort((x, y) => x > y)
  return numbers[numbers.length - 2]
}
module.exports = secondLargest
