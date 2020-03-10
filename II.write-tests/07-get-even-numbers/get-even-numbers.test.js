var getEven = require('./get-even-numbers')

test('Sort array and get first 2 elements', function () {
    var arr = [22, 13, 73, 82, 4];

    var result = getEven(arr)

    var expected = [22, 82, 4];

    expect(result).toEqual(expected);
}
);
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
