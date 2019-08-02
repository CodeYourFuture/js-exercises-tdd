module.exports = removeMiddle;
function removeMiddle(words) {
  return words.splice(words.length / 2, 1);
}
