var getEven = require('./get-even-numbers.js');
test('get even number', function () {

    var number = [22, 13, 73, 82, 4];
    var result = getEven(number);
    expect(result).toEqual([22, 82, 4]);
}) 

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];