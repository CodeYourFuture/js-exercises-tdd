

function getNumber(number) {
    var result = []
    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0 || i.toString().indexOf("3") != -1) {
            result.push("Fizz");
        } else if (i % 5 === 0 || i.toString().indexOf("5") != -1) {
            result.push("Buzz");


        } else {
            result.push(i);
        }


    }
    return result;
}


module.exports = getNumber