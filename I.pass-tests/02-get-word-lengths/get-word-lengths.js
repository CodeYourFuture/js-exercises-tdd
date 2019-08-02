var getWordLengths = function(someWords) {
  return someWords.map(function(item) {
    return item.length;
  });
};

module.exports = getWordLengths;
