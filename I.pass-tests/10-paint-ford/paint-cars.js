function paintShop(cars, value) {
  var repCars = JSON.parse(JSON.stringify(cars));
  repCars[0].colour = value;
  return repCars;
}
module.exports = paintShop;
