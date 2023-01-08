module.exports = function (cars, newColor) {
  let newArrayOfCars = [];

  for (const car of cars) {
    if (car.colour === "Red") {
      newArrayOfCars.push({ ...car, colour: "Pink" });
    } else {
      newArrayOfCars.push(car);
    }
  }

  return newArrayOfCars;
};
