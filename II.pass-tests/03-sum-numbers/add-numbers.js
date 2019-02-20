function addNumbers(numbers) {
    var number = 0;
    for(var i =0; i < numbers.length; i++){
        number +=numbers[i];

    }
    return number;
}
module.exports = addNumbers;