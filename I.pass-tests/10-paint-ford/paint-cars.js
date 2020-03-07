
function paintShop(cars, newColor) {
    let copyOfCars = JSON.parse(JSON.stringify(cars));
    for (let obj of copyOfCars) {
        if (obj.colour == 'Red') {
            obj.colour = newColor;
        }
    }
    return copyOfCars;
}

module.exports = paintShop;