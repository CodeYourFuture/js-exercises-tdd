var getLargestNumber = require('./largest-number')

test('Sort array and get first 2 elements', function () {
    var arr = [3, 21, 88, 4, 36];

    var result = getLargestNumber(arr)

    var expected = 88;

    expect(result).toEqual(expected);
    expect(arr).toEqual([3, 21, 88, 4, 36]);
}
);
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
