var fizzbuzz = require('./fizz-buzz')

// tests for step-1
/*
test('prints 1', function () {
    var result = fizzbuzz(1)
    expect(result).toEqual('1')
})

test('prints 1,2', function () {
    var result = fizzbuzz(2)
    expect(result).toEqual('1, 2')
})

test('prints Fizz', function () {
    var result = fizzbuzz(3)
    expect(result).toEqual('1, 2, Fizz')
})

test('prints Buzz', function () {
    var result = fizzbuzz(5)
    expect(result).toEqual('1, 2, Fizz, 4, Buzz')
})

test('prints FizzBuzz', function () {
    var result = fizzbuzz(16)
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16')
})
*/

//tests for step-2

test('prints 1', function () {
    var result = fizzbuzz(1)
    expect(result).toEqual('1')
})

test('prints 1,2', function () {
    var result = fizzbuzz(2)
    expect(result).toEqual('1, 2')
})

test('prints Fizz', function () {
    var result = fizzbuzz(3)
    expect(result).toEqual('1, 2, Fizz')
})

test('prints Buzz', function () {
    var result = fizzbuzz(5)
    expect(result).toEqual('1, 2, Fizz, 4, Buzz')
})

test('prints Buzz', function () {
    var result = fizzbuzz(14)
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14')
})

test('prints FizzBuzz', function () {
    var result = fizzbuzz(36)
    expect(result).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, FizzBuzz, Fizz')
})