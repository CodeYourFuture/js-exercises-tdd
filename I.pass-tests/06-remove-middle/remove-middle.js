function removeMiddle(words) {
  var middle = words.splice(2, 1);
  return middle;
}

module.exports = removeMiddle;
