function findNeedle(words, targetWord) {
  const foundWords = words.reduce(function(acc, curr, index) {
    if (curr === targetWord) {
      acc.push(index);
    }
    return acc;
  }, []);

  if (foundWords.length === 0) return "Target word not found";
  if (foundWords.length === 1) return foundWords[0];
  return foundWords;
}

module.exports = findNeedle;
