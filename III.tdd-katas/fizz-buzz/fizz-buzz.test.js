var fizzbuzz = require('./fizz-buzz')

test('prints 1', function () {
    var result = fizzbuzz(1)
    expect(result).toEqual([1])
})

test('print 1,2,fizz', function() {
    var result= fizzbuzz(3)
    expect(result).toEqual([1,2,"fizz"])
})

test("print 1,2,fizz,4,buzz", function() {
  var result = fizzbuzz(5);
  expect(result).toEqual([1, 2, "fizz", 4, "buzz"]);
});

test('print 1,2,fizz,4,buzz......fizzbuzz when passed 15', function() {
    var result = fizzbuzz(15)
    expect(result[14]).toEqual("fizzbuzz")
})