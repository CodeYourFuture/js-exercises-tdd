function formatCities(capitals, transform) {
  var result = [];
  var city = "";
  var country = "";

  capitals.forEach(elemento => {
    city = elemento.city;
    country = elemento.country;
    result.push(transform({ city, country }));
  });
  return result;
}
module.exports = formatCities;
