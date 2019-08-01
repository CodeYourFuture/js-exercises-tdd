function formatCities(capitals, transform) {
  var formatArray = [];
  for (var i = 0; i < capitals.length; i++) {
    var firstFormat = transform(capitals[i]);
    formatArray.push(firstFormat);
  }
  return formatArray;
}
module.exports = formatCities;
/*
var capitals = [
...     { city: "Paris", country: "France" },
...     { city: "Madrid", country: "Spain" },
...     { city: "Rome", country: "Italy" }
...   ];
undefined
> function transform({ city, country }) {
...     return `${city} is the capital of ${country}`;
...   }
undefined
> transform(capitals[0])
'Paris is the capital of France'
*/
