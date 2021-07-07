var getWordLengths = function(someWords) {
    return someWords.map((word) => { return word.length;})
};

module.exports = getWordLengths;

console.log(getWordLengths(["sun", "potato", "roundabout", "pizza"]))