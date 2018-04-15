// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function getAverage(numbers) {
	return numbers.filter(num => Number(num)).length;
}
module.exports = getAverage;