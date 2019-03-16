var findNeedle = require('./find-needle');

test('Find the needle', function () {
    var words = ['house', 'train', 'slide', 'needle', 'book'];
    var expected = 3;

    var output = findNeedle(words);
    expect(output).toEqual(expected);
});