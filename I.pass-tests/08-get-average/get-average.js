// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
    let arr = numbers.filter((num) => typeof num !== "string")
    return arr.reduce((a, b) => a + b) / arr.length
}


module.exports = average;