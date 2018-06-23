module.exports = function (array) {
    const [, secondHighest, thirdHighest] = array
      .concat()
      .sort(function(x, y) {
        return x > y;
      });
    return [secondHighest, thirdHighest];
};