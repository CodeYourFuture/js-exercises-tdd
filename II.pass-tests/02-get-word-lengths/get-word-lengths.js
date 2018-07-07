var getWordLengths = function (someWords) {

    var results = someWords.map(w => w.length);
    return results;
}

module.exports = getWordLengths;