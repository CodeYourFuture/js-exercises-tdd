function secondLargest(numbers) {
    var secondLargest = numbers.sort(function(a, b) { return a - b })[numbers.length - 2];
    return secondLargest;
}

module.exports = secondLargest;