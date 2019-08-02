function formatCities(capitals, transform) {
  var transform = require("./cities.test");
  var received = capitals.map(cities => {
    return transform(cities);
  });
  return received;
}
module.exports = formatCities;
