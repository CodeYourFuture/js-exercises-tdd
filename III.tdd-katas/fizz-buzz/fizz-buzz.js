function fizzbuzz(num) {
    let start = 1;
    let arr = []
    while (start <= num) {
        if (start % 5 === 0 && start % 3 === 0) {
           arr.push("FizzBuzz")
        } else if (start % 3 == 0) {
            arr.push("Fizz")
        } else if (start % 5 == 0) {
            arr.push("Buzz")
        } else {
            arr.push(start)
        }
        start++;
    }

    return arr.join(", ").trim()
}

module.exports = fizzbuzz;

console.log(fizzbuzz(15))