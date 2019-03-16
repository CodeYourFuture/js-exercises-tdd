// var words = ['sun', 'potato', 'roundabout', 'pizza'];

function getWordLengths(someWords) {
    someWords.map((val, index, arr) => {
        arr[index] = val.length;

    });
    return someWords;
};

// getWordLengths(words);



module.exports = getWordLengths;