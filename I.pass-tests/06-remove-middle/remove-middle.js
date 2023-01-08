module.exports = function (words) {
  const middle = Math.floor(words.length / 2);

  return words.splice(middle, 1);
};
