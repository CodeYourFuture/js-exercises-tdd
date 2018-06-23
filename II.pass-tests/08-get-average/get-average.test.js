var {average} = require('./get-average');

test('Average', function () {
    var numbers = [4, '-', 8, 11, 'hello', '57', 0, 2];
    var expected = 5;

    var output = average(numbers);
    expect(average()).toEqual(0);//default
    expect(average([])).toEqual(0);//empty
    expect(output).toEqual(expected);
});