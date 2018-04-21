var getWordLengths = function (someWords) {
    var result = someWords.map(word=> word.length);
    return result;

};

module.exports = getWordLengths;