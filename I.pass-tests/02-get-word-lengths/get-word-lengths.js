const getWordLengths = function(someWords) {
  return someWords.map(word => {
    if (typeof word !== 'string') return null;
    return word.length;
  });
};

module.exports = getWordLengths;
