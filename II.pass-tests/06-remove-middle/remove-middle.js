function removeMiddle(words) {
  //var result = [];
  var wordsLength = words.length;
  wordIndex = (wordsLength - 1) / 2;
  return [(midWord = words[wordIndex])];
  //return result.push(midWord);
  //return result.push("words[wordIndex]");
}

module.exports = removeMiddle;
