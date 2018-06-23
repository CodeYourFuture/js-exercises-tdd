
function average(numbers) {
    result = [];
    for (i = 0; i < numbers.length; i++) {

        if (typeof numbers[i] === 'number') {

            result.push(numbers[i])
        }

    }
    var add = result.reduce((a, b) => a + b)
    return add / result.length

}









module.exports = average


// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
