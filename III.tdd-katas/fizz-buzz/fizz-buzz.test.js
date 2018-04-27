var fizzbuzz = require('./fizz-buzz');

test('prints 1', function () {
    var result = fizzbuzz(1);
    expect(result).toEqual('1');
});

test('prints 1,2', function () {
    var result = fizzbuzz(2);
    expect(result).toEqual('1, 2');
});

test('print fizz and buzz and numbers', function(){
    var result = fizzbuzz(5);
    expect(result).toEqual('1, 2, Fizz, 4, Buzz');
});

test("print fizz and buzz if it has 3 or 5 in it", function() {
	var result = fizzbuzz(15);
	expect(result).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz");
});