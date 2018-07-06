var fizzbuzz = require('./fizz-buzz')

test('prints 1', function () {
    var result = fizzbuzz(1)
    expect(result).toEqual([1])
})

test('prints 1,2', function () {
    var result = fizzbuzz(2)
    expect(result).toEqual([1, 2])
})

test('print 1,2,Fizz', function () {
    var result = fizzbuzz(3)
    expect(result).toEqual([1, 2, "Fizz"])

})

test('print 1,2,Fizz,4,Buzz', function () {
    var result = fizzbuzz(5)
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz"])
})

test('print 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz', function () {
    var result = fizzbuzz(23)
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, "Fizz"])
})