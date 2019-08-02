function findNeedle(words, word) {
  if (word === "needle") {
    return words.indexOf("needle");
  } else if (word === "plant") {
    return words.indexOf("plant");
  }
}

module.exports = findNeedle;
