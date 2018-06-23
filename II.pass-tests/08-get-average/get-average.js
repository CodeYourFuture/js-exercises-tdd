// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
exports.average = (elements = []) => {
    let len = 1;
    if (elements.length == 0) {
        return 0;
    }
    return elements.slice()
    .filter(element => typeof element === "number")
    .reduce((a, b, cindex) => {
        len = cindex + 1;
        return a + b}, 0) / len;
}
    