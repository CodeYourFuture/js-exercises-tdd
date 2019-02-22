// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = arr => {
    const x = arr.filter(x => typeof x === 'number')
    return x.reduce((a, b) => (a + b)) / x.length
}