var getWordLengths = function(someWords) {
  let wordsLength = someWords.map(word => {
    return word.length;
  });
  return wordsLength;
};

module.exports = getWordLengths;
