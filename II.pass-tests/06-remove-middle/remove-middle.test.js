var removeMiddle = require('./remove-middle');

test('Remove middle', function () {
    var words = ['mouse', 'giraffe', 'queen', 'window', 'bottle',"clement", "freeborn","clem"];

    var expectedWords = ['mouse', 'giraffe', "queen",'window', "clement", "freeborn", "clem"];
    var expectedOutput = ['bottle'];

    var output = removeMiddle(words);

    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
});