var addNumbers = require('./add-numbers');

test('Add all numbers', function () {
    var numbers = [9, 23, 10, 3, 8];
    var expected = 53;

    var output = addNumbers(numbers);

    expect(output).toEqual(expected);
});