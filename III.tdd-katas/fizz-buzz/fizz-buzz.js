function fizzBuzz(number){
//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var result = [];
        for (i = 1; i <= number; i++) {
        
//        var newArr = arr.forEach(function (number) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                result=result+"FizzBuzz, ";
            } else if (i % 3 === 0) {
                result=result+"Fizz, ";
            } else if (i % 5 === 0) {
                result=result+"Buzz, ";
            } else {
                result=result+i+", ";
            }
        }  
        return result.slice(0,-2);
}

module.exports = fizzBuzz;