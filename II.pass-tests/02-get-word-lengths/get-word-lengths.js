var getWordLengths = function(someWords) {
  return someWords.map(function(word) {
    return word.length;
  });
};

module.exports = getWordLengths;
