function getEven(numbers) {
    return numbers.filter(number => {
        return number % 2 === 0;
    })
}

module.exports = getEven;