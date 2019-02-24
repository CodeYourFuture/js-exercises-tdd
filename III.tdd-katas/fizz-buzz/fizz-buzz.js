module.exports = (n) => {
    let result = []
    for (i = 1; i <= n; i++)
        (i % 15 === 0) ? result.push("FizzBuzz") : (i % 5 === 0) ? result.push("Buzz") : (i % 3 === 0) ? result.push("Fizz") : result.push(i)
return result.join(', ')
} 