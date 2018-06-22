test('selecting even numbers',function() {
var getEven = require('./get-even-numbers');// example
var numbers = [22, 13, 73, 82, 4]; // input: [22, 13, 73, 82, 4];
var result = getEven(numbers);
expect(result).toEqual([22,82,4]);
})// expected: [22, 82, 4];