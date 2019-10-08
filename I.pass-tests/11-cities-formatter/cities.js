function formatCities(capitals) {
  return capitals.map(
    object => object.city + " is the capital of " + object.country
  );
}
module.exports = formatCities;
