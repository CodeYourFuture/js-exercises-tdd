var largestNumber = require('./largest-number');// example
test('largest number',function() {
    var numbers = [3, 21, 88, 4, 36];
    var result = largestNumber(numbers);
    expect(result).toEqual(88);
})// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed