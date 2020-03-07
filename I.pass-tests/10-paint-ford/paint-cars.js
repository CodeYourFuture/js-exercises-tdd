
function paintShop(cars, newColor) {
    for (let obj of cars) {
        if (obj.colour == 'Red') {
            obj.colour = newColor;
        }
    }
    return cars.splice(0);
}

module.exports = paintShop;