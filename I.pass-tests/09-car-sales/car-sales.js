function sales(cars) {
    const hash = {}
    cars.forEach(car => {
        return hash[car.make] ? hash[car.make] += car.price : hash[car.make] = car.price;
    });
    return hash;
}

module.exports = sales;