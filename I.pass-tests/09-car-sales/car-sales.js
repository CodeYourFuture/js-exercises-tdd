// Takes an array of car objects and returns an object of total price by make

module.exports = function (arrayOfCars) {
  const totalPriceByMake = {};

  for (const { make, price } of arrayOfCars) {
    if (totalPriceByMake[make] != undefined) {
      totalPriceByMake[make] += price;
    } else {
      totalPriceByMake[make] = price;
    }
  }

  return totalPriceByMake;
};
