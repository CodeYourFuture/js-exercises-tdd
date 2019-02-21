module.exports = function (words) {
  var middleIndex = (words.length - 1) / 2;
  return words.splice(middleIndex, 1);
}

