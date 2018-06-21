// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
exports.average = elements => {
    const numbers = elements.filter(element => typeof element === "number")
    return numbers.reduce((a, b) => a + b) / numbers.length;
}
    