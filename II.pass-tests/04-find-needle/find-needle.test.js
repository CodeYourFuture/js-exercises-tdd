var findTheNeedle = require('./find-needle');

test('Find the needle', function () {
    var words = ['house', 'train', 'slide', 'needle', 'book'];
    var wordToFind1 = "house", wordToFind2 = "book", wordToFind3 = "needle";
    var expected1 = 0, expected2 = 4; expected3 = 3;

    var output1 = findTheNeedle(words, "house");
    var output2 = findTheNeedle(words, "book");
    var output3 = findTheNeedle(words, "needle");
    expect(output1).toEqual(expected1);
    expect(output2).toEqual(expected2);
    expect(output3).toEqual(expected3);
});
