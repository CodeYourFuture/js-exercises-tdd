module.exports = function (cars, carToPaint, newColour) {
  //copying the cars array while keeping the original array unchanged 
  var copyCars = cars.map(car => {
    return Object.assign({}, car);
  });
  //changing the colour of the designated car inside the copied array  
  copyCars.forEach(car => {
    if (car.make === carToPaint) {
      car.colour = newColour;
    }
  });

  return copyCars;
};
