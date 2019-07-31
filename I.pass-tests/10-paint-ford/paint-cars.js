function paintCars(car) {
  let copy = JSON.parse(JSON.stringify(car));
  copy.forEach(a => {
    if (a.make === "Ford") {
      return (a.colour = "Pink");
    }
  });
  return copy;
}
module.exports = paintCars;
