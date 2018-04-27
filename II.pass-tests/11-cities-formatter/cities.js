function formatingCities(capitals) {
  var result = [];
  for (i = 0; i < capitals.length; i++) {
    result.push(capitals[i].city + " is the capital of " + capitals[i].country);
  }
  return result;
}

module.exports = formatingCities;
