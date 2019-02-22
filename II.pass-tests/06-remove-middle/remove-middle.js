function removeMiddle(words) {
  var result = [];
  result = words.splice(words.length / 2, 1);
  return result;
}

module.exports = removeMiddle;
