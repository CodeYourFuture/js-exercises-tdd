//step-1
/* 
module.exports = function (number) {
    var result = [];
    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result[i] = "FizzBuzz";
        } else if (i % 3 === 0) {
            result[i] = "Fizz";
        } else if (i % 5 === 0) {
            result[i] = "Buzz";
        } else {
            result[i] = i;
        } //if
    } //for
    result.shift();
    return result.join(", ");
}
*/

// step-2
function fizzbuzz(number) {
    var result = [];
    for (var i = 1; i <= number; i++) {
        if (isInculed(i, 3) && isInculed(i, 5) || isDividedBy(i, 3) && isDividedBy(i, 5)) {
            result[i] = "FizzBuzz";
        } else if (isInculed(i, 3) || isDividedBy(i, 3)) {
            result[i] = "Fizz";
        } else if (isInculed(i, 5) || isDividedBy(i, 5)) {
            result[i] = "Buzz";
        } else {
            result[i] = i;
        } //if
    } //for
    result.shift();
    return result.join(", ");
}
// function to check if the 3 or 5 icluded inside the number
function isInculed(number, threeOrfive) {
    return number.toString().includes(threeOrfive);
}

function isDividedBy(number, divisor) {
    return number % divisor === 0;
}

module.exports = fizzbuzz;

