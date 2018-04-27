function removeMiddle(array) {
  return array.splice((array.length - 1) / 2, 1);
}

module.exports = removeMiddle;
