function findNeedle(words) {
  words.forEach(function(word) {
    if (word === "needle") {
      return words.indexOf("needle");
    }
  });
}

module.exports = findNeedle;
