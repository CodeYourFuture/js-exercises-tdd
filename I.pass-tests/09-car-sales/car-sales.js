function sales(arrayOfCars) {
  let totalPrices = {};
  arrayOfCars.forEach(carInfo => {
    if (!totalPrices.hasOwnProperty(carInfo.make)) {
      totalPrices[carInfo.make] = carInfo.price;
    } else {
      totalPrices[carInfo.make] += carInfo.price;
    }
  });
  return totalPrices;
}

module.exports = sales;
