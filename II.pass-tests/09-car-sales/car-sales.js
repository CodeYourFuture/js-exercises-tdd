module.exports = function (cars) {
  var total = {};
  cars.forEach(car => {
    total[car.make] = (total[car.make] || 0) + car.price;
  });
  return total;
}

