function paintShop(cars, color) {
  var paintedCars = JSON.parse(JSON.stringify(cars));
  paintedCars[0].colour = color;
  return paintedCars;
}

module.exports = paintShop;
