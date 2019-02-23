function removeMiddle(words) {
  let middleWord = (words.length - 1) / 2;
  return words.splice(middleWord, 1);
}

module.exports = removeMiddle;
