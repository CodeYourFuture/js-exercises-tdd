var getWordLengths = require('./get-word-lengths');

test('Get word lengths', function () {
    var words = ['sun', 'potato', 'roundabout', 'pizza'];
    var expected = [3, 6, 10, 5];

    var output = getWordLengths(words);

    expect(output).toEqual(expected);
});