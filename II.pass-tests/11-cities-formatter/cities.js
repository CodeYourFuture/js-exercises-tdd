module.exports = function(capitals, callback) {
  var formattedCities = [];
  capitals.forEach(capital => formattedCities.push(callback(capital)));
  return formattedCities;
};
