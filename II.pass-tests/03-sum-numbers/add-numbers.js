// var numbers = [9, 23, 10, 3, 8];
// console.log(numbers.length);

function addNumbers(numbers) {
    var numbersAdded = 0;
    for (var i = 0; i < numbers.length; i++) {
        numbersAdded += numbers[i];
    }
    return numbersAdded;
    // console.log(numbersAdded);
}

// var result = numbers.map(addNumbers(numbers));

// addNumbers(numbers);

module.exports = addNumbers;