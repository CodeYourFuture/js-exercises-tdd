// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(element) {
    element = element.filter(e => typeof e !== 'string');
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return element.reduce(reducer)/element.length;

}

module.exports = average;



