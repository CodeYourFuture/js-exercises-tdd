module.exports = function formatCities(capitals, transform) {
  return capitals.map(capital => transform(capital));
};
