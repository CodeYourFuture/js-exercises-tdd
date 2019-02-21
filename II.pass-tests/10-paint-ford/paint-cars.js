module.exports = (cars, color) => {
    var paintedCars = [];

    cars.forEach(carObj => {
        paintedCars.push(Object.assign({}, carObj));
    });

    paintedCars.forEach(carObj => {
        if (carObj.make === "Ford") {
            carObj.colour = color;
        }
    });

    return paintedCars;
};