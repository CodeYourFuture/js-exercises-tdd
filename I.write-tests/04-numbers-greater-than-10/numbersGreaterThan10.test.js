var largerThanTen = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function () {
    const exception = [32, 21]
    const result = largerThanTen([4, 10, 32, 9, 21])
    expect(result).toEqual(exception)
});


// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
