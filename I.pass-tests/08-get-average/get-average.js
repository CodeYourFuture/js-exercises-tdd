// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function getAverage(array) {
    let numArray = [];
    array.forEach(element => {
        if (typeof element == "number") {
            numArray.push(element)
        }
    });
    let sum = numArray.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum / numArray.length

}
module.exports = getAverage;