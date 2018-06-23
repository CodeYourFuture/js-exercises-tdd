var addAllnumbers = require('./add-numbers');

test('Add all numbers', function () {
    var numbers = [9, 23, 10, 3, 8];
    var expected = 53;

    var output = addAllnumbers(numbers);
    expect.assertions(3);
    expect(output).toEqual(expected);
    expect(addAllnumbers()).toBe(0);
    expect(addAllnumbers([])).toBe(0);
});
