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
/*
function fizzbuzz(number) {
    var result = [];
    for (var i = 1; i <= number; i++) {
        if (isInculed(3, i) && isInculed(5, i) || isDividedBy(i, 3) && isDividedBy(i, 5)) {
            result[i] = "FizzBuzz";
        } else if (isInculed(3, i) || isDividedBy(3, i)) {
            result[i] = "Fizz";
        } else if (isInculed(3, i) || isDividedBy(5, i)) {
            result[i] = "Buzz";
        } else {
            result[i] = i;
        } //if
    } //for
    result.shift();
    return result.join(", ");
}
*/

//step-2 another solution
function fizzbuzz(number) {
    var result = [];
    for (var i = 1; i <= number; i++) {
        if (isInculed(3, i) && isInculed(5, i) || isDividedBy(i, 3) && isDividedBy(i, 5)) {
            result.push("FizzBuzz");
        } else if (isInculed(3, i) || isDividedBy(i, 3)) {
            result.push("Fizz");
        } else if (isInculed(3, i) || isDividedBy(i, 5)) {
            result.push("Buzz");
        } else {
            result.push(i);
        } //if
    } //for
    return result.join(", ");
}


// function to check if any number is icluded inside the number
function isInculed(threeOrfive, number) {
    return number.toString().includes(threeOrfive);
}
// function to check if the number is divisible by any number
function isDividedBy(number, divisor) {
    return number % divisor === 0;
}

module.exports = fizzbuzz;

