
function formatCapital(element) {

    element.forEach(function(city) {
      return `${city.city} is the capital of ${city.country}`;
    });
}

module.exports = formatCities;