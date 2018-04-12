var findLargest = require('./largest-number');

test('Find largest number', function () {
    var numbers = [3, 21, 88, 4, 36];
    var expected = 88;

    var output = findLargest(numbers);
    expect(output).toEqual(expected);
});
