module.exports = function paintShop(cars, color) {
  var newCars = cars.map(car => {
    var newCar = {
      make: car.make,
      model: car.model,
      colour: car.colour
    };
    return newCar;
  });

  newCars[0].colour = color;

  return newCars;
};
