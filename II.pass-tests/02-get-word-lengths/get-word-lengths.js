var getWordLengths = function(someWords) {
  var result = [];
  someWords.ForEach(function(word) {
    result.push(word.length);
  });
  return result;
};

module.exports = getWordLengths;
