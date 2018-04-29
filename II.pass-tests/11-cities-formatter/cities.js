function formatedCity(capitals) {
  var result = capitals.map(
    capital => capital.city + ' is the capital of ' + capital.country
  );
  return result;
}

module.exports = formatedCity;
