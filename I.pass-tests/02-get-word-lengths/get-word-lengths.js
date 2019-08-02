var getWordLengths = function(words) {
  var lengths = words.map(word => {
    return word.length;
  });
  return lengths;
};

module.exports = getWordLengths;
