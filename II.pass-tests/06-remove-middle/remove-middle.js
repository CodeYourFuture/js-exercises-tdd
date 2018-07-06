function removeMiddle(words) {
  var indexMiddle = Math.round((words.length - 1) / 2);
  words = words.splice(indexMiddle, 1);
  return words;
}

module.exports = removeMiddle;
