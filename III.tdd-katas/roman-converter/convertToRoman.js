function convertToOldRoman(num){
    var numbers = [1000, 500, 100, 50, 10, 5, 1];
    var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

    var romanNumber = '';

    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
            romanNumber += roman[i];
            num -= numbers[i];
        }
    }

    return romanNumber;
}

function convertToNewRoman(num) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var romanNumber = '';

    for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
            romanNumber += roman[i];
            num -= numbers[i];
        }
    }

    return romanNumber;
}

module.exports = {convertToOldRoman, convertToNewRoman};