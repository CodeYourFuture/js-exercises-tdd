function findNeedle(words, lookupWord) {
  let findWordIndex = words.findIndex(word => {
    return word === lookupWord;
  });
  return findWordIndex;
}

module.exports = findNeedle;
