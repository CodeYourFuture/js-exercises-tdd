function secondLargest(numbers) {
	return Number(numbers.sort().splice(-2, 1));
}

module.exports = secondLargest;
