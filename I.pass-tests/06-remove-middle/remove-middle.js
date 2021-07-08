function removeMiddle(words) {
  const index = Math.floor(words.length / 2);
  return words.splice(index, 1);
}
module.exports = removeMiddle;
