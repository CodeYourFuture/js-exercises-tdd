var even = require('./get-even-numbers');

test('Get even numbers', function () {
    var numbers = [22, 13, 73, 82, 4];
    var expected = [22, 82, 4];

    var output = even(numbers);
    expect(output).toEqual(expected);
});