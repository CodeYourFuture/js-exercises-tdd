module.exports = function(number) {
  for (i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      i.push("fizz");
    }
    return i;
  }
};
