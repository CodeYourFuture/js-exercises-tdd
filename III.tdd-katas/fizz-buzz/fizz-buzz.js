function fizzbuzz(num) {
    var result = [];
    for (var i = 1; i <= num; i++){
        if (i % 15 === 0){
            result.push("FizzBuzz");
        } else if (i % 3 === 0 || i.toString().includes('3')){
            result.push("Fizz");
        } else if (i % 5 === 0 || i.toString().includes('5')){
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result.join(", ");
}
module.exports = fizzbuzz;