function second(numbers) {

    numbers.sort(function (a, b) {
        return b - a;
    })

    return numbers[1];
}

module.exports = second;