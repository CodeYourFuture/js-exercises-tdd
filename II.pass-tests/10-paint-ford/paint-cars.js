module.exports = (cars, colour) =>
  cars.map(car => {
    const { model } = car;
    if (model == "Fiesta") {
        return {...car, colour};
    }
    return car;
  });
