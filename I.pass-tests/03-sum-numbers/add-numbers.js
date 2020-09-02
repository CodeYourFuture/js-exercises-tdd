function addNumbers(numbers) {
    return numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
}

module.exports = addNumbers;
