module.exports = function (capitals, transform) {
  return capitals.map((capital) => transform(capital));
};
