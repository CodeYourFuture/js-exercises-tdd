var getWordLengths = function(someWords) {
  var wordLength = someWords.map(function(value) {
    return value.length;
  });

  return wordLength;
};

module.exports = getWordLengths;
