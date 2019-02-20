module.exports = (cars, color) => {
  var paintedCars = [];

  //Making a Shallow copy of the objects inside the array
  cars.forEach(carObj => {
    paintedCars.push(Object.assign({}, carObj));
  });

  //Paint the ford car
  paintedCars.forEach(carObj => {
    if (carObj.make === "Ford") {
      carObj.colour = color;
    }
  });

  return paintedCars;
};
