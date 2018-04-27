var fizzbuzz = require("./fizz-buzz");

test("prints 1,2,fizz", function() {
  var result = fizzbuzz(3);
  expect(result).toEqual("1,2,fizz");
});

test("prints 1,2,fizz,4,buzz", function() {
  var result = fizzbuzz(5);
  expect(result).toEqual("1,2,fizz,4,buzz");
});
test("Print all the result until 15", function() {
  var result = fizzbuzz(15);
  expect(result).toEqual(
    "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz"
  );
});
