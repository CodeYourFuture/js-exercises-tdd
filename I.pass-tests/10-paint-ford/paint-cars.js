function paintCars(obj, color) {
  var copyArr = JSON.parse(JSON.stringify(obj));
  copyArr.filter(car => {
    if (car.make == "Ford") {
      car.colour = color;
    }
  });

  return copyArr;
}
module.exports = paintCars;
