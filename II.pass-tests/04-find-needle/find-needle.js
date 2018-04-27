function findNeedle(words) {
  for (i = 0; i < words.length; i++) {
    if (words[i] === "needle") {
      return i;
    }
  }
}

module.exports = findNeedle;
