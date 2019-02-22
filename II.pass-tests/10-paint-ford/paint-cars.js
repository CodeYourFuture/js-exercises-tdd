const paintShop = function (cars, newColour) {
  // var paintedCars = cars.slice()
  var paintedCars = JSON.parse(JSON.stringify(cars))// duplicating array without a refrence to original array
  paintedCars[0].colour = newColour
  return paintedCars
}
module.exports = paintShop
