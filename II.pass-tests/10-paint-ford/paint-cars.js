module.exports = function(cars, carColor) {
  var painted = cars.map(a => Object.assign({}, a)); // a way to clone arrays without referencing the same element
  painted[0].colour = carColor;
  return painted;
};
