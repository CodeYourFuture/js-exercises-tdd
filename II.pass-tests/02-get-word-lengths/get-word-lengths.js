var getWordLengths = function (someWords) {
  return someWords.map(wordLength => {
    return wordLength.length
  })
}

module.exports = getWordLengths
