// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
    const result = numbers.filter(num => typeof num === 'number');
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum / result.length;
}



module.exports = average;