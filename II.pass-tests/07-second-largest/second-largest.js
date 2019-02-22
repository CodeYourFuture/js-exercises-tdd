function secondLargest(numbers) {
    numbers.sort();
    return numbers[numbers.length-2];
}

module.exports = secondLargest;