module.exports = (capitals, transform) => {
  var newForattedArray = capitals.map(capital => {
    return transform(capital.city, capital.country);
  });
  return newForattedArray;
};
