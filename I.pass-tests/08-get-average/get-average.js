// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function getAverage(numbers) {
  let filtered = numbers.filter(Number);

  let count = filtered.length;
  filtered = filtered.reduce((previous, current) => (current += previous));
  filtered /= count;

  return count;
}
module.exports = getAverage;
