module.exports = numbers => {
  return numbers.sort((x, y) => x < y)[1];
};
