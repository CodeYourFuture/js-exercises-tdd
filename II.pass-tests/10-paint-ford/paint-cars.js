function paintShop(cars, colour) {
    var newCars = JSON.parse(JSON.stringify(cars));
    newCars[0].colour = colour;
    return newCars;
}
module.exports = paintShop;