var fizzbuzz = require("./fizz-buzz");

test("prints 1", function () {
  var result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("prints 1,2", function () {
  var result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});

test("print FizzBuzz", () => {
  var result = fizzbuzz(15)
  expect(result).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz")
})