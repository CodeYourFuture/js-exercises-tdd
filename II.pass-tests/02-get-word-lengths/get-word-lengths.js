function getWordLengths(someWords) {
  var result = [];
  for (i = 0; i < someWords.length; i++) {
    result.push(someWords[i].length);
  }

  return result;
}

module.exports = getWordLengths;
