var secondSmallest = require("./second-largest");

test('Second largest', function () {
    var numbers = [2, 0, 23, 0, 57, 1];

    var output = secondSmallest(numbers);

    expect(output).toEqual(23);
});