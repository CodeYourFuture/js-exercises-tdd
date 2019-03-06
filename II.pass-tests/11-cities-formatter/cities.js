module.exports = function(capitals) {
  var formattedCities = capitals.map(a => Object.assign({}, a));
  return formattedCities;
};
