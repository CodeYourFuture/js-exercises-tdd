module.exports = (cars, color) => {
    var newCars = cars.map(car => Object.assign({}, car))
    newCars.forEach(car => {if (car.make === 'Ford') car.colour = color;})
    return newCars;
};
 