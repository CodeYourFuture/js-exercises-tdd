
//First Solution for fizzBuzz Kata: 

function fizzBuzz(number){
        var result = [];
        for (i = 1; i <= number; i++) {
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

// Re-implemented the same Kata, but this time writing another possible solution:
/*
function fizzBuzz(number) {
    var result = [];
    for (i = 1; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result[i-1] = "FizzBuzz";
        } else if (i % 3 === 0) {
            result[i-1] = "Fizz";
        } else if (i % 5 === 0) {
            result[i-1] = "Buzz";
        } else {
            result[i-1] = i ;
        }
    }
    return result.join(", ");
}
*/

module.exports = fizzBuzz;