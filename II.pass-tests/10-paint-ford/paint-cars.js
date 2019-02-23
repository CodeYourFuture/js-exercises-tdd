function paintShop (cars, carToPaint, newColour) {
    var newCarsArray = cars.map(car => {
        return Object.assign({}, car);
    });

    newCarsArray.forEach(car => {
        if (car.make === carToPaint) {
            car.colour = newColour;
        }
    });

    return newCarsArray;
};

module.exports = paintShop;